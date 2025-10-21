# ninbox - Landing Website

Modern institutional landing page for ninbox, a multi-channel notification platform designed for SaaS startup founders.

## Features

- **Modern Design**: Inspired by Trustify's sleek, professional aesthetic
- **Multi-language Support**: Built-in internationalization with English and Spanish
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Dark Theme**: Eye-friendly dark color scheme with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Vite for blazing-fast development and optimized production builds

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready animation library
- **react-i18next**: Internationalization framework
- **Lucide React**: Beautiful & consistent icon toolkit

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
landing-website/
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Stats.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── LanguageSwitcher.jsx
│   ├── i18n/              # Internationalization
│   │   ├── config.js
│   │   └── locales/
│   │       ├── en.json
│   │       └── es.json
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## Internationalization

The website supports multiple languages out of the box. Currently available:
- English (en)
- Spanish (es)

To add a new language:
1. Create a new JSON file in `src/i18n/locales/`
2. Add the language to `src/i18n/config.js`

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Content

Update translations in:
- `src/i18n/locales/en.json` for English
- `src/i18n/locales/es.json` for Spanish

## Deployment

### 🚀 Automated GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages with custom domain support.

**Live Site**: https://ninbox.co

Every push to the `main` branch automatically:
1. Builds the project
2. Deploys to GitHub Pages
3. Updates https://ninbox.co

For detailed deployment instructions, DNS configuration, and troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Manual Build

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Alternative Deployment Options

**Vercel:**
```bash
npx vercel
```

**Netlify:**
```bash
npx netlify deploy --prod
```

## Target Audience

This landing page is specifically designed for:
- SaaS startup founders
- Technical decision-makers
- Growth-focused engineering teams

## Design Philosophy

- **Clean & Modern**: Minimalist design with focus on content
- **Trust-Building**: Professional appearance that builds credibility
- **Conversion-Focused**: Clear CTAs and value propositions
- **Performance-First**: Optimized for speed and user experience

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use this template for your own projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or support, please open an issue in the repository.
