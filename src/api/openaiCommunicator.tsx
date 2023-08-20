const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    organization: process.env.NEXT_PUBLIC_OPENAI_ORG_ID
});

const openai = new OpenAIApi(configuration);

export async function getCompanyName(description: string) {
    const gptResponse = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{
            "role": "system",
            "content": `Create a name for a company based on the following description:\n ${description}`
        }]
    });

    return gptResponse.data.choices[0].message.content;
}

export async function getCompanySlogan(name: string, description: string) {
    const gptResponse = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{
            "role": "system",
            "content": `Create a slogan for a company called ${name} based on the following description:\n ${description}`
        }]
    });

    return gptResponse.data.choices[0].message.content;
}

export async function getCompanyColors(description: string) {
    const gptResponse = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{
            "role": "system",
            "content": `Create a color scheme for a company, the answer should only contain two hex-codes sepperated by a comma, based on the following description:\n ${description}`
        }]
    });

    return gptResponse.data.choices[0].message.content;
}