#!/bin/bash

# GitHub Pages Manual Deployment Script
# This script helps deploy your built site to GitHub Pages using the gh-pages branch method

set -e  # Exit on error

echo "🚀 GitHub Pages Manual Deployment Script"
echo "========================================"
echo ""

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found!"
    echo "   Please run 'npm run build' first to build your project."
    exit 1
fi

# Check if .env.production exists (for environment variables)
if [ ! -f ".env.production" ]; then
    echo "⚠️  Warning: .env.production file not found!"
    echo "   If you need VITE_GOOGLE_SCRIPT_URL, create .env.production with:"
    echo "   VITE_GOOGLE_SCRIPT_URL=your-script-url"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Warning: You're not on the main branch (currently on: $CURRENT_BRANCH)"
    echo "   It's recommended to be on main before deploying."
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📦 Building project..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed! dist folder not created."
    exit 1
fi

echo ""
echo "🌿 Setting up gh-pages branch..."

# Check if gh-pages branch exists remotely
if git ls-remote --heads origin gh-pages | grep -q gh-pages; then
    echo "   gh-pages branch exists, checking it out..."
    git fetch origin gh-pages
    git checkout gh-pages
    git reset --hard origin/gh-pages
else
    echo "   Creating new gh-pages branch..."
    git checkout --orphan gh-pages
    git rm -rf . 2>/dev/null || true
fi

# Copy dist contents to root
echo "📋 Copying built files..."
cp -r dist/* .

# Add all files
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to deploy. Site is already up to date."
    git checkout main
    exit 0
fi

# Commit
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date +'%Y-%m-%d %H:%M:%S')"

# Push
echo "🚀 Pushing to GitHub..."
git push origin gh-pages

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to your repository on GitHub"
echo "2. Navigate to Settings → Pages"
echo "3. Under 'Build and deployment', select 'Deploy from a branch'"
echo "4. Select branch: gh-pages, folder: / (root)"
echo "5. Click Save"
echo ""
echo "Your site will be available at:"
echo "  - User site: https://YOUR_USERNAME.github.io"
echo "  - Project site: https://YOUR_USERNAME.github.io/REPO_NAME"
echo ""
echo "⏳ It may take a few minutes for the site to be live."
echo ""

# Switch back to main branch
git checkout main

echo "✨ Done! Switched back to main branch."
