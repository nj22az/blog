# Project Instructions for Claude

## Development Workflow

### Pre-commit Checks (MANDATORY)
Always run these commands before any commit or deployment:

```bash
# 1. Type checking
npm run typecheck

# 2. Linting (check for errors)
npm run lint:check

# 3. Build verification
npm run build

# 4. Format check
npm run format:check
```

### Auto-fix Commands
If errors are found, use these commands to automatically fix them:

```bash
# Fix linting issues
npm run lint

# Fix formatting issues
npm run format
```

### Security Maintenance
Run periodically to maintain security:

```bash
# Check for vulnerabilities
npm audit

# Fix non-breaking vulnerabilities
npm audit fix

# For breaking changes (use with caution)
npm audit fix --force
```

## Project Structure
- React + TypeScript + Vite
- Tailwind CSS for styling
- Sanity CMS for content management
- React Router for navigation
- Lucide React for icons

## Key Quality Standards
- Zero TypeScript errors
- Zero ESLint errors
- All imports must be used
- All variables must be used
- Follow existing code patterns
- Maintain responsive design
- Ensure accessibility compliance

## Common Issues to Avoid
1. **Unused imports** - Remove any unused imports immediately
2. **Unused variables** - Remove or use all declared variables
3. **Large bundle sizes** - Consider code splitting for bundles >500KB
4. **Security vulnerabilities** - Address via npm audit
5. **Missing error handling** - Always handle async operations properly

## Emergency Fixes
If the build fails:
1. Check TypeScript errors with `npm run typecheck`
2. Check ESLint errors with `npm run lint:check`
3. Verify all imports are correct and used
4. Check for missing dependencies

## Deployment Notes
- Build outputs to `/dist` directory
- Uses GitHub Pages deployment via `npm run deploy`
- All assets are optimized during build
- Tailwind CSS is purged for production

## Performance Monitoring
- Watch for bundle size warnings during build
- Monitor Core Web Vitals
- Optimize images through Sanity CDN
- Use React.memo() for expensive components when needed