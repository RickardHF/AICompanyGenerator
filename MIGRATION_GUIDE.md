# Migration Guide: Securing Your AICompanyGenerator

This guide will help you migrate from the insecure implementation to the secure one.

## ⚠️ Important: Breaking Changes

The security fixes require changes to your environment variables and GitHub Secrets.

## Step 1: Update GitHub Secrets

**CRITICAL**: Your GitHub Actions workflow will fail until you update these secrets.

### Old Secret Names (❌ Remove these):
- `NEXT_PUBLIC_OPENAI_API_KEY`
- `NEXT_PUBLIC_OPENAI_ORG_ID`

### New Secret Names (✅ Add these):
- `OPENAI_API_KEY` - Your OpenAI API key (same value as before, just renamed)
- `OPENAI_ORG_ID` - Your OpenAI Organization ID (same value as before, just renamed)

### How to Update GitHub Secrets:

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Add the new secrets:
   - Click "New repository secret"
   - Name: `OPENAI_API_KEY`
   - Value: [Your OpenAI API Key]
   - Click "Add secret"
4. Repeat for `OPENAI_ORG_ID`
5. Delete the old secrets (optional but recommended):
   - Find `NEXT_PUBLIC_OPENAI_API_KEY` and delete it
   - Find `NEXT_PUBLIC_OPENAI_ORG_ID` and delete it

## Step 2: Update Local Environment

If you're running this locally, update your `.env.local` file:

### Old Format (❌ Don't use):
```env
NEXT_PUBLIC_OPENAI_API_KEY=sk-...
NEXT_PUBLIC_OPENAI_ORG_ID=org-...
```

### New Format (✅ Use this):
```env
OPENAI_API_KEY=sk-...
OPENAI_ORG_ID=org-...
NEXT_PUBLIC_NAMECHEAP_AFFILIATE_LINK=https://namecheap.com/
```

**Location**: Create this file at `src/.env.local`

## Step 3: Verify the Changes

After updating your secrets and environment variables:

1. **Test locally**:
   ```bash
   cd src
   npm install
   npm run dev
   ```
   
2. **Test the form**:
   - Enter a company description
   - Click "Generate"
   - Verify that you get results

3. **Check for errors**:
   - Open browser developer console (F12)
   - Look for any error messages

## Step 4: Deploy and Monitor

1. Push your changes to trigger the GitHub Actions workflow
2. Verify the deployment succeeds
3. Test the live application
4. Monitor your OpenAI API usage for the first few days

## What Changed?

### For End Users:
- ✅ No visible changes - the app works exactly the same
- ✅ Better security - API keys are protected
- ✅ Rate limiting - prevents abuse

### For Developers:
- ❌ Old: API calls were made from client-side code
- ✅ New: API calls are made from server-side Next.js API routes
- ❌ Old: API keys were in the browser bundle
- ✅ New: API keys are only on the server

### Architecture Changes:
```
Before:
Browser → OpenAI API (with exposed keys)

After:
Browser → Your Server API → OpenAI API (keys hidden)
```

## Troubleshooting

### Issue: "Service configuration error"
**Cause**: API keys not set correctly
**Fix**: Check that `OPENAI_API_KEY` is set in GitHub Secrets or `.env.local`

### Issue: "Rate limit exceeded"
**Cause**: Too many requests from same IP
**Fix**: Wait 1 minute and try again. This is working as intended.

### Issue: Build fails in GitHub Actions
**Cause**: Secrets not updated
**Fix**: Follow Step 1 to add the new secrets

### Issue: "Failed to fetch"
**Cause**: API endpoint not found
**Fix**: Ensure `src/app/api/company/route.ts` exists in your deployment

## API Endpoint Reference

### New Endpoint: `/api/company`

**Method**: POST

**Request Body**:
```json
{
  "description": "A company that makes eco-friendly products"
}
```

**Success Response** (200):
```json
{
  "name": "EcoInnovate",
  "slogan": "Sustainable Solutions for a Greener Tomorrow",
  "colors": "#2E7D32, #81C784"
}
```

**Error Response** (400):
```json
{
  "error": "Description must be at least 3 characters long"
}
```

**Error Response** (429):
```json
{
  "error": "Rate limit exceeded. Please try again later."
}
```

## Security Features Now Enabled

✅ **Server-side API calls**: OpenAI keys never leave your server
✅ **Rate limiting**: 10 requests per minute per IP address
✅ **Input validation**: Protects against malformed requests
✅ **Input sanitization**: Protects against prompt injection
✅ **Error handling**: Doesn't leak sensitive information
✅ **Token limits**: Prevents excessive API usage per request

## Need Help?

If you encounter issues:
1. Check the SECURITY_FINDINGS.md file for detailed information
2. Review the example in `.env.example`
3. Open an issue on GitHub

## Rollback (Not Recommended)

If you need to rollback:
```bash
git revert HEAD~3
```

**Warning**: This will re-expose your API keys. Only do this if absolutely necessary, and rotate your API keys immediately after.
