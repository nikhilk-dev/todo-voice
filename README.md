# TODO — Your Voice-First Task Assistant

TODO turns your voice into organized to-dos, reminders, and step-by-step plans. Join the waitlist for early access to the Siri-style assistant built for students, professionals, and families.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or bun)
- A Google Apps Script URL for the waitlist form (see [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md))

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## 📦 Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🌐 Deployment

This project can be deployed to various platforms. Here are the recommended options:

### Option 1: Vercel (Recommended - Easiest)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `VITE_GOOGLE_SCRIPT_URL` (your Google Apps Script URL)
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Netlify

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Add environment variable: `VITE_GOOGLE_SCRIPT_URL`
   - Click "Deploy site"

### Option 3: GitHub Pages

1. **Update `vite.config.ts`** (already configured below)

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push

### Option 4: Other Platforms

This is a standard Vite + React app, so it can be deployed to:
- Cloudflare Pages
- AWS Amplify
- Azure Static Web Apps
- Any static hosting service

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Important:** For production deployments, add this environment variable in your hosting platform's settings.

## 📝 Google Sheets Integration

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed instructions on setting up the Google Sheets integration for the waitlist form.

## 🛠️ Technologies Used

- **Vite** - Build tool and dev server
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Accessible component primitives

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or issues, please contact the project maintainer.
