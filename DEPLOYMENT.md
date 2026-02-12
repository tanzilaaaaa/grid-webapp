# Deployment Guide

This guide walks you through deploying the Grid Application to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Git installed locally

## Step 1: Push to GitHub

### Create a new repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., `grid-app`)
3. Add description: "Interactive 3x3 grid with ripple effects"
4. Choose Public or Private
5. Click "Create repository"

### Push your code

```bash
# Navigate to your project
cd grid-app

# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/grid-app.git

# Rename branch to main if needed
git branch -M main

# Push code
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your `grid-app` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your app will be live in ~2-3 minutes!

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm project settings
# - Deploy
```

## Step 3: Verify Deployment

1. Check your Vercel dashboard for deployment status
2. Visit the provided URL (e.g., `https://grid-app.vercel.app`)
3. Test the grid functionality:
   - Click boxes to increment values
   - Verify ripple effects work correctly
   - Check locked state at value ≥ 15

## Environment Variables

This project doesn't require environment variables for the free tier. If you add backend functionality later:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

## Continuous Deployment

Once connected to GitHub, Vercel automatically:
- Deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Runs build checks before deployment

## Monitoring & Analytics

In Vercel Dashboard:
- **Analytics**: View page performance metrics
- **Logs**: Check deployment and runtime logs
- **Deployments**: View deployment history
- **Settings**: Configure domain, environment, etc.

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (usually 24-48 hours)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript types are correct

### App Not Loading
- Clear browser cache
- Check browser console for errors
- Verify all assets are loading correctly

### Performance Issues
- Check Vercel Analytics
- Review bundle size in build logs
- Optimize images and assets

## Rollback

To revert to a previous deployment:
1. Go to Deployments tab
2. Find the deployment you want
3. Click the three dots menu
4. Select "Promote to Production"

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

## Next Steps

After deployment:
1. Share your live URL
2. Monitor performance metrics
3. Gather user feedback
4. Plan future enhancements
