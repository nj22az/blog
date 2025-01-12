# Professional CV Website

A modern, interactive CV website built with React, featuring dynamic content, PDF generation capabilities, responsive design, and integrated contact functionality.

## Version History

- v1.1.0 (January 12, 2025)

  - Added EmailJS integration for contact form
  - Added Amazon Affiliate Shop link
  - Improved header navigation
  - Enhanced deployment workflow
  - Bug fixes and performance improvements

- v1.0.0 (January 9, 2024)
  - Interactive CV display
  - PDF generation for CV and Cover Letter
  - Responsive design with mobile support
  - Timeline view of professional experience
  - Skills categorization and visualization

## Features

- 📱 Responsive design that works on desktop and mobile
- 📄 Downloadable CV in PDF format
- ✉️ Downloadable Cover Letter in PDF format
- 📊 Interactive timeline of professional experience
- 🎯 Skills visualization and categorization
- 🌐 Contact form with EmailJS integration
- 🛍️ Amazon Affiliate Shop integration
- 🌐 Built with modern web technologies

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- HTML2Canvas & jsPDF for PDF generation
- EmailJS for contact form
- GitHub Actions for CI/CD

## Local Development

1. Clone the repository

```bash
git clone https://github.com/nj22az/blog.git
cd blog
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_NOTIFICATION_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server

```bash
npm start
```

5. Build for production

```bash
npm run build
```

## Deployment

The website is deployed using GitHub Pages and can be accessed at:
[https://nj22az.github.io/blog/](https://nj22az.github.io/blog/)

## License

This project is private and not licensed for public use.

## Contact

For any inquiries, please use the contact form on the website or reach out through LinkedIn.
