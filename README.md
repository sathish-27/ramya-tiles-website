# Ramya Tiles Work Contractor Website

A professional, modern website for tile laying services with customer enquiry forms, cost calculator, service listings, and quotation request system.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Cost Calculator** - Instant cost estimation for different tiling services
- **Quotation Form** - Detailed quotation request system with WhatsApp integration
- **Service Showcase** - Comprehensive listing of all tiling services with pricing
- **Contact Integration** - Phone, email, and WhatsApp contact options
- **Gallery Section** - Display your completed projects (ready for real images)
- **Professional Design** - Modern, clean, and trustworthy aesthetic

## 📁 Files Included

- `index.html` - Main website file
- `styles.css` - All styling and design
- `script.js` - Interactive features and functionality
- `README.md` - This file with instructions

## 🚀 How to Upload to GitHub

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create your free account
3. Verify your email address

### Step 2: Create a New Repository
1. After logging in, click the "+" icon in the top right
2. Select "New repository"
3. Name it: `ramya-tiles-website` (or any name you prefer)
4. Description: "Professional website for Ramya Tiles Work Contractor"
5. Choose "Public" (required for free hosting)
6. **Do NOT** check "Add a README file" (we already have one)
7. Click "Create repository"

### Step 3: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all 4 files:
   - index.html
   - styles.css
   - script.js
   - README.md
3. Scroll down and click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Navigate to the folder containing your files
cd path/to/your/website/files

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Ramya Tiles website"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/ramya-tiles-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🌐 How to Host for FREE (Using GitHub Pages)

### Method 1: GitHub Pages (Recommended - Completely Free)

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 2-3 minutes
7. Your website will be live at: `https://YOUR-USERNAME.github.io/ramya-tiles-website/`

### Method 2: Netlify (Also Free - Better Domain Support)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up using your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub" and authorize Netlify
5. Select your `ramya-tiles-website` repository
6. Click "Deploy site"
7. Your site will be live in 1-2 minutes at a netlify URL
8. You can connect your RamyaTilesworkcontractor.in domain in site settings

### Connecting Your .in Domain

**For GitHub Pages:**
1. In your repository, create a new file named `CNAME`
2. Add one line: `RamyaTilesworkcontractor.in`
3. Commit the file
4. Go to your domain registrar (where you bought the domain)
5. Add these DNS records:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: YOUR-USERNAME.github.io

**For Netlify:**
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: RamyaTilesworkcontractor.in
4. Follow Netlify's DNS instructions

## ⚙️ Customization Guide

### Update Contact Information
Edit `index.html` and search for these placeholders:

```html
Phone: +91 98765 43210
Email: info@ramyatileswork.in
WhatsApp: https://wa.me/919876543210
```

Replace with your dad's actual contact details.

### Update Business Name/Location
Search for "Chennai" and "Ramya" in `index.html` and update as needed.

### Change Colors
Edit `styles.css` at the top where it says `:root` and modify:
```css
--primary: #2C5F2D;  /* Main green color */
--accent: #D4A373;   /* Gold/tan accent */
```

### Update Pricing
In `index.html`, search for the service prices like `₹45-80/sq.ft` and update to your actual rates.

### Add Real Photos to Gallery
Replace the gradient backgrounds in the gallery section with actual project images:
1. Upload images to your repository
2. In `index.html`, find the gallery section
3. Replace `style="background: linear-gradient..."` with `style="background-image: url('your-image.jpg')"`

## 📧 Setting Up Email (Zoho Mail - Free)

1. Go to [zoho.com/mail](https://www.zoho.com/mail/)
2. Sign up for free plan (5 email addresses)
3. Add your domain: RamyaTilesworkcontractor.in
4. Verify domain ownership
5. Create email addresses like:
   - info@RamyaTilesworkcontractor.in
   - ramya@RamyaTilesworkcontractor.in
   - quotes@RamyaTilesworkcontractor.in

## 🔧 Technical Details

**Technologies Used:**
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks needed)
- Google Fonts (Playfair Display + Work Sans)

**Browser Support:**
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Performance:**
- Fast loading (< 2 seconds)
- No external dependencies except fonts
- Optimized images (when you add them)

## 📱 Features Walkthrough

### Cost Calculator
- Select service type
- Enter area in square feet
- Choose tile quality (standard or premium)
- Add optional services (waterproofing, old tile removal)
- Get instant cost estimate

### Quotation Form
- Collects customer details
- Service and project information
- Sends via WhatsApp or Email
- Automatic response confirmation

### WhatsApp Integration
All contact forms and quote requests can be sent directly to WhatsApp for quick response.

## 🎨 Design Features

- Professional green and gold color scheme
- Elegant serif headers (Playfair Display)
- Clean sans-serif body text (Work Sans)
- Smooth animations and transitions
- Mobile-first responsive design
- Accessibility considerations

## 📞 Support

If you need help:
1. Check GitHub Issues for common problems
2. Contact via the website contact form
3. Email: support@example.com (update with real support email)

## 📄 License

This website is created for Ramya Tiles Work Contractor. Free to use and modify for your business.

---

## 🎯 Next Steps After Uploading

1. **Test Everything**
   - Click all links
   - Submit test forms
   - Try the calculator
   - Test on mobile phone

2. **Update Content**
   - Add real phone number
   - Add real email
   - Update prices if needed
   - Add actual project photos

3. **SEO Optimization**
   - Add to Google Search Console
   - Submit sitemap
   - Get reviews on Google My Business

4. **Marketing**
   - Share website link on WhatsApp
   - Add to business cards
   - Post on social media
   - List in local directories

## ✅ Checklist Before Going Live

- [ ] Updated phone number
- [ ] Updated email address
- [ ] Updated WhatsApp number
- [ ] Verified pricing is accurate
- [ ] Tested all forms
- [ ] Tested on mobile
- [ ] Connected custom domain
- [ ] Set up professional email
- [ ] Added to Google My Business
- [ ] Shared with first customers

---

**Built with ❤️ for Ramya Tiles Work Contractor**

Good luck with your dad's business! 🏗️✨
