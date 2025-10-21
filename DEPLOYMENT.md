# Deployment Guide - GitHub Pages with Custom Domain

## 🚀 Automated Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### 📋 Prerequisites

1. **GitHub Repository**: https://github.com/ninboxco/website
2. **Custom Domain**: ninbox.co
3. **GitHub Pages**: Must be enabled in repository settings

## ⚙️ Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/ninboxco/website
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Click **Save**

### Step 2: Configure Custom Domain

#### In GitHub Repository:

1. Still in **Settings** → **Pages**
2. Under "Custom domain":
   - Enter: `ninbox.co`
   - Click **Save**
3. Wait for DNS check to complete
4. ✅ Check "Enforce HTTPS" once DNS is verified

#### In Your DNS Provider (e.g., Cloudflare, Route53, Namecheap):

Add these DNS records:

**Option A: Apex Domain (ninbox.co)**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**Option B: With www subdomain (www.ninbox.co)**
```
Type: CNAME
Name: www
Value: ninboxco.github.io
TTL: 3600
```

**For both options, add:**
```
Type: CNAME
Name: _github-pages-challenge-ninboxco
Value: (GitHub will provide this value)
TTL: 3600
```

### Step 3: Verify Deployment

1. Push any commit to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages
3. Monitor the workflow:
   - Go to **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow
4. Once complete, visit: https://ninbox.co

## 📁 Files Added for Deployment

### `.github/workflows/deploy.yml`
GitHub Actions workflow that:
- Triggers on push to main branch
- Builds the Vite project
- Deploys to GitHub Pages
- Can also be triggered manually

### `public/CNAME`
Contains the custom domain `ninbox.co`
- This file is automatically copied to the `dist` folder during build
- Ensures GitHub Pages uses your custom domain

### `vite.config.js`
Updated with `base: '/'` for custom domain
- Uses root path since we have a custom domain
- If you weren't using a custom domain, this would be `/website/`

## 🔄 How It Works

1. **Commit & Push**: Push changes to `main` branch
2. **Trigger**: GitHub Actions workflow starts automatically
3. **Build**: Runs `npm ci` and `npm run build`
4. **Deploy**: Uploads `dist` folder to GitHub Pages
5. **Live**: Changes appear at https://ninbox.co

## 🛠 Manual Deployment

To manually trigger a deployment:

1. Go to **Actions** tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

## 🔍 Troubleshooting

### Issue: 404 Not Found
- **Solution**: Check that GitHub Pages source is set to "GitHub Actions"
- Verify the workflow completed successfully in the Actions tab

### Issue: Custom domain not working
- **Solution**:
  - Verify DNS records are correct
  - Wait up to 24-48 hours for DNS propagation
  - Check "Enforce HTTPS" is enabled after DNS verification

### Issue: Workflow failing
- **Solution**:
  - Check the workflow logs in the Actions tab
  - Ensure all dependencies are in `package.json`
  - Verify the build completes locally with `npm run build`

### Issue: CSS/JS files not loading
- **Solution**:
  - Verify `base: '/'` is set in `vite.config.js`
  - Check browser console for 404 errors
  - Clear browser cache

## 📊 Workflow Status

Check the deployment status badge:

```markdown
[![Deploy to GitHub Pages](https://github.com/ninboxco/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/ninboxco/website/actions/workflows/deploy.yml)
```

## 🌐 Production URL

Once configured, your site will be available at:
- **Primary**: https://ninbox.co
- **Backup**: https://ninboxco.github.io/website (if custom domain fails)

## 🔐 Permissions

The workflow uses these permissions:
- `contents: read` - Read repository contents
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Write identity token for authentication

## 📝 Notes

- Deployments typically take 1-3 minutes
- DNS changes can take up to 48 hours to propagate globally
- HTTPS is automatically provided by GitHub Pages
- The workflow runs on every push to `main` branch
- You can disable auto-deployment by deleting the workflow file

## 🎉 Next Steps

After successful deployment:

1. **Add Analytics**: Integrate Google Analytics or Plausible
2. **Monitor Performance**: Use Lighthouse for performance audits
3. **SEO Optimization**: Add meta tags, sitemap.xml, robots.txt
4. **Add Monitoring**: Set up uptime monitoring with UptimeRobot
5. **Configure CDN**: Consider Cloudflare for additional performance

---

**Happy Deploying!** 🚀

For issues or questions, check the GitHub Actions logs or open an issue in the repository.
