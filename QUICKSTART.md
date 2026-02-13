# Quick Start Guide

Get the Grid Application running in minutes.

## 1. Local Development (2 minutes)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/grid-app.git
cd grid-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 2. Test the Application (1 minute)

- Click any box to increment its value
- Watch the colors change (even = gray, odd = dark blue)
- Observe ripple effects:
  - Divisible by 3: Right neighbor decrements by 1
  - Divisible by 5: Bottom neighbor increments by 2
- Click until a box reaches 15 to see it lock:
  - Background turns red
  - Cannot be clicked anymore
  - Ripple effects cannot change its value

## 3. Deploy to Vercel (3 minutes)

### Option A: Vercel Dashboard (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy"

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 4. Share Your Live URL

Once deployed, Vercel provides a live URL like:
```
https://grid-app.vercel.app
```

Share this with others!

## File Structure

```
grid-app/
├── app/components/Grid.tsx    ← Main component
├── app/page.tsx               ← Home page
├── README.md                  ← Full documentation
└── QUICKSTART.md              ← This guide
```

## Key Features

✓ 3×3 interactive grid
✓ Click to increment values
✓ Ripple effects (Rules A & B)
✓ Locked state at value ≥ 15
✓ Responsive design
✓ Production-ready code

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Vercel deployment issues?**
Check [GITHUB_DEPLOYMENT_STEPS.md](./GITHUB_DEPLOYMENT_STEPS.md) for detailed troubleshooting.

## Next Steps

1. ✓ Run locally
2. ✓ Test features
3. ✓ Push to GitHub
4. ✓ Deploy to Vercel
5. ✓ Share live URL

## Documentation

- **README.md** - Full project documentation
- **GITHUB_DEPLOYMENT_STEPS.md** - Step-by-step deployment guide
- **QUICKSTART.md** - This quick start guide

## Support

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Ready to deploy?** See [GITHUB_DEPLOYMENT_STEPS.md](./GITHUB_DEPLOYMENT_STEPS.md)
