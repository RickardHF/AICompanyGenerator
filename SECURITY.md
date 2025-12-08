# Security Policy

## Supported Versions

The only supported version is latest version that is built (latest commit on main branch).

## Security Measures

This application implements the following security measures to protect API keys and prevent abuse:

### API Key Protection
- **Server-side only API calls**: OpenAI API keys are never exposed to the client browser
- **Environment variable security**: Sensitive credentials use server-side only environment variables (without `NEXT_PUBLIC_` prefix)
- **No client-side API access**: All OpenAI API calls go through server-side Next.js API routes

### Request Protection
- **Rate limiting**: Limits the number of requests per IP address to prevent abuse
- **Input validation**: All user inputs are validated and sanitized
- **Length limits**: User input is limited to 500 characters
- **Prompt injection protection**: User input is sanitized before being sent to OpenAI

### Error Handling
- **Secure error messages**: Errors don't expose sensitive information to clients
- **Proper logging**: Errors are logged server-side without exposing details to users

## Best Practices for Deployment

1. **Never commit `.env` files**: Ensure `.env.local` and similar files are in `.gitignore`
2. **Use GitHub Secrets**: Store API keys in GitHub Secrets, not in code
3. **Rotate API keys regularly**: Periodically rotate your OpenAI API keys
4. **Monitor API usage**: Keep track of your OpenAI API usage to detect unusual activity
5. **Keep dependencies updated**: Regularly update npm packages to get security patches

## Reporting a Vulnerability

If you find any vulnerability with the code within this project please inform the owner of the repository directly through GitHub Security Advisories or by email.
