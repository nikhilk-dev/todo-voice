# GitHub Pages Setup Checklist

This is a quick reference guide for setting up GitHub Pages deployment.

## Prerequisites Checklist

- [ ] GitHub account created
- [ ] Google Apps Script URL ready (from GOOGLE_SHEETS_SETUP.md)
- [ ] Node.js installed locally

## Step 1: Create GitHub Repository

1. Log in to GitHub
2. Click the **+** icon in the upper-right corner
3. Select **"New repository"**
4. **Repository name:**
   - For user site: `your-username.github.io` (exact match required)
   - For project site: any name (e.g., `my-todo-app`)
5. Set repository to **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

Run these commands (replace `YOUR_USERNAME` and `REPO_NAME`):

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Configure Environment Variables

### For Automated Deployment (GitHub Actions)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In left sidebar: **Secrets and variables** → **Actions**
4. Click **"New repository secret"**
5. Name: `VITE_GOOGLE_SCRIPT_URL`
6. Value: Your Google Apps Script URL
7. Click **"Add secret"**

### For Manual Deployment

Create a `.env.production` file in the project root:

```bash
echo "VITE_GOOGLE_SCRIPT_URL=your-script-url-here" > .env.production
```

## Step 4: Configure GitHub Pages

### Option A: Automated Deployment (Recommended)

1. Go to repository → **Settings** → **Pages**
2. Under **"Build and deployment"**, select **"Source: GitHub Actions"**
3. The existing workflow (`.github/workflows/deploy.yml`) will automatically deploy on every push to `main`
4. No further action needed - just push to `main` and it will deploy!

### Option B: Manual Branch Deployment

1. Build and deploy using the script:
   ```bash
   ./deploy-gh-pages.sh
   ```

   Or manually:
   ```bash
   npm run build
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   git checkout main
   ```

2. Configure GitHub Pages:
   - Go to repository → **Settings** → **Pages**
   - Under **"Build and deployment"**, select **"Source: Deploy from a branch"**
   - Branch: `gh-pages`
   - Folder: `/` (root)
   - Click **"Save"**

## Step 5: Verify Deployment

1. Wait 2-5 minutes for GitHub Pages to build/deploy
2. Visit your site:
   - User site: `https://your-username.github.io`
   - Project site: `https://your-username.github.io/repository-name`
3. Test the waitlist form
4. Verify data appears in your Google Sheet

## Important Notes

### Repository Name for User Sites

- **MUST** be exactly `your-username.github.io` (case-sensitive)
- If your username is `johndoe`, the repo must be `johndoe.github.io`
- This gives you the root URL: `https://johndoe.github.io`

### Base Path Configuration

- **User site** (`username.github.io`): No changes needed to `vite.config.ts`
- **Project site**: Update `vite.config.ts`:
  ```typescript
  export default defineConfig({
    base: '/repository-name/',
    // ... rest of config
  })
  ```

### Custom Domain (Optional)

1. Go to repository → **Settings** → **Pages** → **Custom domain**
2. Enter your domain name (e.g., `www.mywebsite.com`)
3. Click **"Save"**
4. Configure DNS with your domain registrar:
   - Create a **CNAME** record
   - Point to: `your-username.github.io`
5. DNS changes can take up to 24 hours to propagate

## Troubleshooting

### Site shows 404
- Wait a few more minutes (first deployment can take 5-10 minutes)
- Check that the repository name matches `username.github.io` for user sites
- Verify GitHub Pages is enabled in Settings → Pages

### Build fails in GitHub Actions
- Check Actions tab for error logs
- Verify `VITE_GOOGLE_SCRIPT_URL` secret is set correctly
- Ensure all dependencies are in `package.json`

### Environment variables not working
- For Actions: Verify secret name is exactly `VITE_GOOGLE_SCRIPT_URL`
- For manual: Ensure `.env.production` exists before building
- Variable names must start with `VITE_` to be included in the build

### Form submissions not working
- Check browser console for errors
- Verify Google Apps Script URL is correct
- Ensure Google Apps Script is deployed as Web App with "Anyone" access

## Next Steps After Deployment

- [ ] Test all functionality on the live site
- [ ] Set up a custom domain (optional)
- [ ] Configure analytics (optional)
- [ ] Set up monitoring (optional)
