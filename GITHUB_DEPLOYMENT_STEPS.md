# GitHub & Vercel Deployment Steps

Follow these exact steps to push your code to GitHub and deploy to Vercel.

## Step 1: Create GitHub Repository

### 1.1 Go to GitHub
- Visit [github.com/new](https://github.com/new)
- Sign in if needed

### 1.2 Create New Repository
- **Repository name**: `grid-app`
- **Description**: Interactive 3x3 grid with ripple effects
- **Visibility**: Public (for easy sharing)
- **Initialize repository**: Leave unchecked (we already have git)
- Click **Create repository**

### 1.3 Copy Repository URL
- You'll see a page with your repository URL
- Copy the HTTPS URL (e.g., `https://github.com/YOUR_USERNAME/grid-app.git`)

## Step 2: Push Code to GitHub

### 2.1 Add Remote Origin
```bash
cd grid-app
git remote add origin https://github.com/YOUR_USERNAME/grid-app.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 2.2 Verify Remote
```bash
git remote -v
```

You should see:
```
origin  https://github.com/YOUR_USERNAME/grid-app.git (fetch)
origin  https://github.com/YOUR_USERNAME/grid-app.git (push)
```

### 2.3 Push to GitHub
```bash
git branch -M main
git push -u origin main
```

This pushes all commits to GitHub.

### 2.4 Verify on GitHub
- Go to your repository on GitHub
- You should see all files and commits
- Verify the code is there

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

#### 3A.1 Go to Vercel
- Visit [vercel.com](https://vercel.com)
- Sign in with GitHub (or create account)

#### 3A.2 Import Project
- Click **Add New...** → **Project**
- Click **Import Git Repository**
- Select your `grid-app` repository
- Click **Import**

#### 3A.3 Configure Project
- **Project Name**: `grid-app` (or custom name)
- **Framework**: Next.js (should auto-detect)
- **Root Directory**: `./` (default)
- Leave other settings as default
- Click **Deploy**

#### 3A.4 Wait for Deployment
- Vercel will build and deploy your app
- Takes 2-3 minutes
- You'll see a success message

#### 3A.5 Get Live URL
- Click **Visit** to see your live app
- URL will be like: `https://grid-app.vercel.app`
- Copy this URL to share

### Option B: Using Vercel CLI

#### 3B.1 Install Vercel CLI
```bash
npm i -g vercel
```

#### 3B.2 Deploy
```bash
cd grid-app
vercel
```

#### 3B.3 Follow Prompts
- **Set up and deploy?** → `y`
- **Which scope?** → Select your account
- **Link to existing project?** → `n`
- **Project name?** → `grid-app`
- **In which directory?** → `./`
- **Auto-detect build settings?** → `y`

#### 3B.4 Get Live URL
- Vercel will provide your live URL
- Copy and share it

## Step 4: Verify Deployment

### 4.1 Visit Live URL
- Open the URL provided by Vercel
- Should see your grid application

### 4.2 Test Features
- Click boxes to increment values
- Verify ripple effects work
- Check locked state at value ≥ 15
- Test on mobile device

### 4.3 Check Vercel Dashboard
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Click your project
- View deployment status
- Check analytics

## Step 5: Share Your App

### 5.1 Share Live URL
- Copy your Vercel URL
- Share with friends, colleagues, or stakeholders
- Example: `https://grid-app.vercel.app`

### 5.2 Share GitHub Repository
- Copy your GitHub URL
- Share for code review or contributions
- Example: `https://github.com/YOUR_USERNAME/grid-app`

## Continuous Deployment

Once connected to GitHub, Vercel automatically:
- Deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Runs build checks before deployment

## Troubleshooting

### GitHub Push Fails
```bash
# Check remote
git remote -v

# If wrong remote, remove and re-add
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/grid-app.git

# Try push again
git push -u origin main
```

### Vercel Build Fails
1. Check build logs in Vercel dashboard
2. Verify all dependencies in `package.json`
3. Check for TypeScript errors: `npm run build`
4. Redeploy from Vercel dashboard

### App Not Loading
1. Clear browser cache
2. Check browser console for errors
3. Verify Vercel deployment is complete
4. Check Vercel logs for runtime errors

## Custom Domain (Optional)

To use your own domain:

1. Go to Vercel Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (24-48 hours)

## Environment Variables (Optional)

If you add backend functionality:

1. Go to Vercel Project Settings → Environment Variables
2. Add your variables
3. Redeploy project

## Monitoring

In Vercel Dashboard:
- **Analytics**: View page performance
- **Logs**: Check deployment and runtime logs
- **Deployments**: View deployment history
- **Settings**: Configure domain, environment, etc.

## Rollback

To revert to a previous deployment:
1. Go to Deployments tab
2. Find the deployment you want
3. Click the three dots menu
4. Select "Promote to Production"

## Summary

You now have:
- ✓ Code on GitHub
- ✓ Live app on Vercel
- ✓ Automatic deployments on push
- ✓ Live URL to share

## Next Steps

1. Monitor your app performance
2. Gather user feedback
3. Plan future enhancements
4. Keep dependencies updated

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Help](https://docs.github.com)

---

**Congratulations!** Your Grid Application is now live on the internet! 🎉
