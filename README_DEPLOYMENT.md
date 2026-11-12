# 🚀 Vercel Deployment Guide: Ramya Tiles Work Contractor

This modern Angular website for **Ramya Tiles Work Contractor** is configured for **100% free, automated deployment on Vercel** (with global CDN, SSL HTTPS, and continuous git deployment).

---

## 🌟 Method: GitHub + Vercel (Recommended & Fastest)

### Step 1: Initialize Git and Commit Changes
In your terminal, navigate to the project directory:
```bash
cd d:\ramya-tiles-website
git init
git add .
git commit -m "Ramya Tiles Contractor Angular Website ready for Vercel"
```

### Step 2: Push to Your GitHub Account
1. Go to [GitHub.com](https://github.com/new) and click **"New repository"**.
2. Name it: `ramya-tiles-website` (Public or Private).
3. Do **NOT** initialize with README or .gitignore (we already have them configured).
4. Run the following commands in your terminal:
```bash
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/ramya-tiles-website.git
git branch -M main
git push -u origin main
```

---

### Step 3: Import & Deploy on Vercel (1 Minute)
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Under **Import Git Repository**, find `ramya-tiles-website` and click **"Import"**.
4. Vercel automatically detects the configuration from `vercel.json`:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/ramya-tiles-app/browser`
5. Click **"Deploy"**!

Within ~60 seconds, your site will be live with a permanent URL like:
`https://ramya-tiles-website.vercel.app`

---

## 📱 How to Customize Your Father's Phone Number & WhatsApp
To update the contact number to your father's exact phone number:
1. Open [src/app/app.component.ts](file:///d:/ramya-tiles-website/src/app/app.component.ts):
   ```typescript
   readonly phone = '+919876543210';          // Change to your father's phone
   readonly displayPhone = '+91 98765 43210'; // Display format
   readonly whatsappNumber = '919876543210';  // WhatsApp number (without '+')
   ```
2. Save, commit, and push (`git commit -am "Update contact phone" && git push`).
3. Vercel will automatically redeploy the update in seconds!

---

## 🌐 Connecting Your Custom Domain (e.g. `ramyatiles.in`)
1. In your Vercel project dashboard, go to **Settings** → **Domains**.
2. Type your domain name (e.g., `ramyatiles.in` or `ramyatilesworkcontractor.in`).
3. Follow the DNS instructions (add the CNAME or A Record in your domain registrar).
4. Vercel will automatically provision a free SSL certificate.
