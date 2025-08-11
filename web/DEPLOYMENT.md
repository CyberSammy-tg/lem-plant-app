# 🚀 LEM PLANT WEB APP DEPLOYMENT GUIDE

## 📋 **Current Technology Stack**

- **Framework**: Next.js 15.4.5 (Latest)
- **React**: 19.1.0 (Latest)
- **Styling**: Tailwind CSS v4 (Latest)
- **TypeScript**: Full TypeScript support
- **Build Tool**: Turbopack (Fast development)

## 🌐 **Deployment Options (FREE)**

### 🥇 **Option 1: Vercel (RECOMMENDED)**

**Why Vercel?**
- ✅ Made by Next.js creators (perfect compatibility)
- ✅ Automatic deployments from Git
- ✅ Global CDN for fast loading
- ✅ Free SSL certificates
- ✅ Custom domains supported
- ✅ Serverless functions for API routes
- ✅ 100GB bandwidth/month free

**Setup Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd web
   vercel --prod
   ```

4. **Configure Environment Variables**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add all variables from `.env.example`

### 🥈 **Option 2: Netlify**

**Setup Steps:**

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build for static export**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=out
   ```

### 🥉 **Option 3: GitHub Pages + Cloudflare**

**Setup Steps:**

1. **Update next.config.ts for GitHub Pages**
   ```typescript
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name/',
   ```

2. **Build and export**
   ```bash
   npm run export
   ```

3. **Push to GitHub Pages branch**

## 🔧 **Pre-Deployment Checklist**

### ✅ **Environment Setup**

1. **Copy environment file**
   ```bash
   cp .env.example .env.local
   ```

2. **Update environment variables**
   - Set production API URLs
   - Configure database connections
   - Add authentication secrets
   - Set up external service keys

### ✅ **Build Verification**

1. **Test local build**
   ```bash
   npm run build
   npm run start
   ```

2. **Check for build errors**
   ```bash
   npm run lint
   npm run type-check
   ```

### ✅ **Performance Optimization**

1. **Enable static export** (already configured)
2. **Image optimization disabled** for static hosting
3. **Trailing slashes enabled** for better compatibility

## 🔗 **Backend Integration**

### **API Configuration**

Update these environment variables for production:

```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.com/api
NEXT_PUBLIC_BACKEND_URL=https://your-backend-domain.com
```

### **CORS Configuration**

Ensure your backend allows requests from your web domain:

```javascript
// In your Express backend
app.use(cors({
  origin: ['https://your-web-domain.com', 'http://localhost:3000'],
  credentials: true
}));
```

## 📱 **Mobile App Integration**

The web app will share data with your existing mobile app through:

1. **Shared Backend API** (already set up)
2. **Common Database** (MySQL with Sequelize)
3. **Consistent Data Models** (User, Plant, Rabbit, Order, etc.)

## 🔒 **Security Considerations**

### **Environment Variables**
- Never commit `.env.local` to Git
- Use different secrets for production
- Rotate API keys regularly

### **HTTPS**
- All deployment options provide free SSL
- Ensure all API calls use HTTPS in production

## 🚀 **Deployment Commands**

### **Quick Deploy to Vercel**
```bash
cd web
npm run build
npm run deploy:vercel
```

### **Quick Deploy to Netlify**
```bash
cd web
npm run build
npm run deploy:netlify
```

### **Local Development**
```bash
cd web
npm run dev
```

## 📊 **Monitoring & Analytics**

### **Free Options**
- **Vercel Analytics** (built-in with Vercel)
- **Google Analytics** (add GA_ID to environment)
- **Netlify Analytics** (built-in with Netlify)

## 🔄 **Continuous Deployment**

### **Automatic Deployments**

1. **Connect Git Repository**
   - Link your GitHub/GitLab repo to Vercel/Netlify
   - Automatic deployments on push to main branch

2. **Branch Previews**
   - Preview deployments for pull requests
   - Test changes before merging

## 🆘 **Troubleshooting**

### **Common Issues**

1. **Build Failures**
   - Check TypeScript errors: `npm run type-check`
   - Fix linting issues: `npm run lint`

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names (NEXT_PUBLIC_ prefix for client-side)

3. **API Connection Issues**
   - Verify backend URL is correct
   - Check CORS configuration
   - Ensure backend is deployed and accessible

## 🎯 **Next Steps**

1. **Choose deployment platform** (Vercel recommended)
2. **Set up environment variables**
3. **Deploy and test**
4. **Configure custom domain** (optional)
5. **Set up monitoring and analytics**

## 📞 **Support**

If you encounter issues:
1. Check the deployment platform's documentation
2. Verify all environment variables are set correctly
3. Test the build locally first
4. Check browser console for client-side errors
5. Check server logs for API issues
