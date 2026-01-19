# 🚀 Quick Start - Deploy Your Website

Your code is ready to deploy! Follow these simple steps:

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `todo-website`)
4. Choose **Private** or **Public**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
cd /Users/Personal/Nixonic/BYAI/Todo

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/todo-website.git
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended - 2 minutes!)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "Add New..." → "Project"
4. Import your repository (it should appear in the list)
5. Configure:
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
6. Click "Environment Variables" and add:
   - **Name:** `VITE_GOOGLE_SCRIPT_URL`
   - **Value:** Your Google Apps Script URL (from GOOGLE_SHEETS_SETUP.md)
7. Click "Deploy"
8. Wait ~2 minutes and your site will be live! 🎉

Your site URL will be something like: `https://your-repo-name.vercel.app`

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Show advanced" → "New variable":
   - Key: `VITE_GOOGLE_SCRIPT_URL`
   - Value: Your Google Apps Script URL
7. Click "Deploy site"

## Alternative: Deploy to GitHub Pages

1. In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**
2. Click "New repository secret":
   - Name: `VITE_GOOGLE_SCRIPT_URL`
   - Value: Your Google Apps Script URL
3. Go to **Settings** → **Pages**
4. Under "Source", select **GitHub Actions**
5. The workflow will automatically deploy on every push to `main`

Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## ✅ Verify Your Deployment

1. Visit your deployed URL
2. Fill out the waitlist form
3. Check your Google Sheet to confirm the submission was received
4. Celebrate! 🎊

## Need Help?

- See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
- See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for Google Sheets setup

## Next Steps

- [ ] Set up a custom domain (optional)
- [ ] Test the waitlist form end-to-end
- [ ] Share your live website!
