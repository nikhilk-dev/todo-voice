# Deployment Guide

This guide will help you deploy your TODO website to make it live.

## Prerequisites

1. A GitHub account
2. Your Google Apps Script URL (from GOOGLE_SHEETS_SETUP.md)
3. Node.js installed locally (for testing builds)

## Quick Deployment Options

### 🚀 Option 1: Vercel (Recommended - Fastest & Easiest)

**Why Vercel?**
- Free tier with generous limits
- Automatic deployments on git push
- Built-in environment variable management
- Custom domain support
- Fast global CDN

**Steps:**

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com) and sign up/login
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
   - Add Environment Variable:
     - Name: `VITE_GOOGLE_SCRIPT_URL`
     - Value: Your Google Apps Script URL
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional):**
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

---

### 🌐 Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as Vercel step 1)

2. **Deploy to Netlify:**
   - Visit [netlify.com](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Show advanced" and add environment variable:
     - Key: `VITE_GOOGLE_SCRIPT_URL`
     - Value: Your Google Apps Script URL
   - Click "Deploy site"

---

### 📄 Option 3: GitHub Pages

**Steps:**

1. **Update repository name** (if needed):
   - If your repo is `username.github.io`, skip to step 2
   - Otherwise, you'll need to update `vite.config.ts` with the base path

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Add GitHub Secret:**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `VITE_GOOGLE_SCRIPT_URL`
   - Value: Your Google Apps Script URL
   - Click "Add secret"

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on every push to `main`

5. **Update base path in vite.config.ts** (if repo name is NOT `username.github.io`):
   ```typescript
   export default defineConfig({
     base: '/YOUR_REPO_NAME/',
     // ... rest of config
   })
   ```

---

## Environment Variables

For all platforms, you need to set:
- `VITE_GOOGLE_SCRIPT_URL` - Your Google Apps Script Web App URL

**How to get your Google Apps Script URL:**
1. Open your Google Sheet
2. Extensions → Apps Script
3. Deploy → Manage deployments
4. Copy the Web App URL

## Testing Your Deployment

1. **Test locally first:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check the deployed site:**
   - Fill out the waitlist form
   - Check your Google Sheet to verify submissions are working
   - Test all interactive elements

## Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+
- Check build logs for specific errors

### Environment variables not working
- Verify the variable name starts with `VITE_`
- Restart/redeploy after adding variables
- Check that variables are set in the correct environment (production)

### Google Sheets not receiving data
- Verify `VITE_GOOGLE_SCRIPT_URL` is set correctly
- Check Google Apps Script execution logs
- Ensure the script is deployed as a Web App with "Anyone" access

### Form submissions not working
- Check browser console for CORS errors
- Verify the Google Apps Script URL is correct
- Test the Google Apps Script URL directly

## Next Steps

After deployment:
1. Test the waitlist form end-to-end
2. Set up a custom domain (optional)
3. Configure analytics (optional)
4. Set up monitoring (optional)
