# GitHub Pages Setup Checklist for ninbox.co

## ✅ Completed

- [x] GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- [x] CNAME file added (`public/CNAME` with `ninbox.co`)
- [x] Vite config updated for custom domain
- [x] Deployment documentation created
- [x] Code pushed to GitHub repository
- [x] Initial deployment triggered

## 🔧 Manual Steps Required

### Step 1: Enable GitHub Pages (2 minutes)

1. Go to: https://github.com/ninboxco/website/settings/pages
2. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** (not "Deploy from a branch")
3. Click **Save**

### Step 2: Configure Custom Domain in GitHub (1 minute)

1. Still in https://github.com/ninboxco/website/settings/pages
2. Under "Custom domain":
   - Enter: `ninbox.co`
   - Click **Save**
3. Wait 1-2 minutes for DNS check
4. Once verified, check ✅ **"Enforce HTTPS"**

### Step 3: Configure DNS Records (5 minutes)

Go to your DNS provider (Cloudflare, Route53, Namecheap, etc.) and add these records:

#### For Apex Domain (ninbox.co):

```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600 (or Auto)

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

#### Optional - For www subdomain:

```
Type: CNAME
Name: www
Value: ninboxco.github.io
TTL: 3600
```

### Step 4: Verify Deployment (2 minutes)

1. Go to: https://github.com/ninboxco/website/actions
2. Check that "Deploy to GitHub Pages" workflow is running or completed
3. Click on the workflow to see details
4. If successful, you'll see green checkmarks ✓

### Step 5: Test the Website (1 minute)

Wait 5-10 minutes after DNS configuration, then test:

1. Open: https://ninbox.co
2. Test language switcher (EN/ES toggle)
3. Test all sections scroll smoothly
4. Test on mobile device
5. Verify HTTPS is working (padlock icon in browser)

## 📊 Monitoring

After setup, monitor:

- **GitHub Actions**: https://github.com/ninboxco/website/actions
- **Pages Status**: https://github.com/ninboxco/website/settings/pages
- **DNS Propagation**: https://www.whatsmydns.net/#A/ninbox.co

## 🐛 Troubleshooting

### Issue: Workflow not running
**Solution**: Check that GitHub Pages source is set to "GitHub Actions"

### Issue: 404 on ninbox.co
**Solution**:
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check GitHub Pages settings show domain as verified

### Issue: HTTPS not available
**Solution**: Wait for DNS to propagate, then enable "Enforce HTTPS" in settings

### Issue: CSS/JS not loading
**Solution**:
1. Clear browser cache
2. Check browser console for errors
3. Verify `base: '/'` is set in `vite.config.js`

## 🎯 Expected Timeline

| Step | Time | Total |
|------|------|-------|
| Enable GitHub Pages | 2 min | 2 min |
| Configure custom domain | 1 min | 3 min |
| Add DNS records | 5 min | 8 min |
| DNS propagation | 5-60 min | 13-68 min |
| First deployment | 2 min | 15-70 min |
| HTTPS certificate | 5-15 min | 20-85 min |

**Total setup time**: ~20 minutes (plus DNS propagation)

## ✨ After Setup

Once live, the workflow will:
- ✅ Deploy automatically on every push to `main`
- ✅ Build in ~2 minutes
- ✅ Update https://ninbox.co immediately
- ✅ Show status in GitHub Actions tab

## 📝 Quick Reference

- **Repository**: https://github.com/ninboxco/website
- **Production URL**: https://ninbox.co
- **Workflow File**: `.github/workflows/deploy.yml`
- **CNAME File**: `public/CNAME`
- **Documentation**: `DEPLOYMENT.md`

---

**Need Help?**
- Check the detailed guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- View workflow logs: https://github.com/ninboxco/website/actions
- GitHub Pages Docs: https://docs.github.com/en/pages
