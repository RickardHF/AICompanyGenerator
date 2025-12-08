import { NextRequest, NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

// Rate limiting - simple in-memory store (consider Redis for production)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(identifier: string): boolean {
    const now = Date.now();
    const record = requestCounts.get(identifier);

    if (!record || now > record.resetTime) {
        requestCounts.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT) {
        return false;
    }

    record.count++;
    return true;
}

function sanitizeInput(input: string): string {
    // Remove any potential prompt injection attempts
    // Limit length and remove excessive whitespace
    return input
        .trim()
        .slice(0, 500) // Limit to 500 characters
        .replace(/\s+/g, ' '); // Replace multiple spaces with single space
}

function validateDescription(description: string): { valid: boolean; error?: string } {
    if (!description || typeof description !== 'string') {
        return { valid: false, error: 'Description is required and must be a string' };
    }

    const sanitized = sanitizeInput(description);
    
    if (sanitized.length < 3) {
        return { valid: false, error: 'Description must be at least 3 characters long' };
    }

    if (sanitized.length > 500) {
        return { valid: false, error: 'Description must not exceed 500 characters' };
    }

    return { valid: true };
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting based on IP
        const ip = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown';
        
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Rate limit exceeded. Please try again later.' },
                { status: 429 }
            );
        }

        // Parse and validate request body
        const body = await request.json();
        const { description } = body;

        const validation = validateDescription(description);
        if (!validation.valid) {
            return NextResponse.json(
                { error: validation.error },
                { status: 400 }
            );
        }

        const sanitizedDescription = sanitizeInput(description);

        // Check for API key
        if (!process.env.OPENAI_API_KEY) {
            console.error('OpenAI API key not configured');
            return NextResponse.json(
                { error: 'Service configuration error' },
                { status: 500 }
            );
        }

        // Initialize OpenAI with server-side only environment variables
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            organization: process.env.OPENAI_ORG_ID
        });

        const openai = new OpenAIApi(configuration);

        // Generate company name
        const nameResponse = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: "system",
                content: `You are a creative business naming assistant. Create a single, professional company name based on the description provided. Only respond with the company name, nothing else.`
            }, {
                role: "user",
                content: sanitizedDescription
            }],
            max_tokens: 50,
            temperature: 0.7
        });

        const companyName = nameResponse.data.choices[0].message?.content?.trim() || '';

        if (!companyName) {
            throw new Error('Failed to generate company name');
        }

        // Generate slogan
        const sloganResponse = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: "system",
                content: `You are a creative marketing assistant. Create a catchy, professional slogan for the company. Only respond with the slogan, nothing else.`
            }, {
                role: "user",
                content: `Company name: ${companyName}\nDescription: ${sanitizedDescription}`
            }],
            max_tokens: 100,
            temperature: 0.8
        });

        const slogan = sloganResponse.data.choices[0].message?.content?.trim() || '';

        // Generate colors
        const colorsResponse = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: "system",
                content: `You are a professional color scheme designer. Create exactly two hex color codes that work well together for a brand. Respond ONLY with two hex codes separated by a comma (e.g., #1A2B3C, #4D5E6F). No other text.`
            }, {
                role: "user",
                content: sanitizedDescription
            }],
            max_tokens: 30,
            temperature: 0.7
        });

        const colors = colorsResponse.data.choices[0].message?.content?.trim() || '';

        return NextResponse.json({
            name: companyName,
            slogan: slogan,
            colors: colors
        });

    } catch (error: any) {
        console.error('API Error:', error.message);
        
        // Don't expose internal error details to client
        if (error.response?.status === 429) {
            return NextResponse.json(
                { error: 'OpenAI API rate limit reached. Please try again later.' },
                { status: 429 }
            );
        }

        if (error.response?.status === 401) {
            console.error('OpenAI API authentication failed');
            return NextResponse.json(
                { error: 'Service authentication error' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to generate company information. Please try again.' },
            { status: 500 }
        );
    }
}
