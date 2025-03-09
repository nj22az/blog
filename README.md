# The Office of Nils Johansson

## About

This is the official website for the Office of Nils Johansson, a professional portfolio and information hub showcasing expertise in marine engineering, automation, and field service engineering.

## Features

- **Modern Design**: Clean and responsive interface using Tailwind CSS
- **Blog Integration**: WordPress integration for blog posts
- **Dark Mode**: System-aware dark mode support
- **Responsive Layout**: Mobile-first design approach
- **TypeScript**: Type-safe development
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions

## Technology Stack

This website is built with modern web technologies:

### Core Technologies

- **React**: For building the user interface
- **TypeScript**: For type-safe code and better development experience
- **Vite**: For fast development and optimized production builds

### UI and Styling

- **Tailwind CSS**: For utility-first styling
- **shadcn/ui**: For pre-built, customizable UI components
- **Lucide Icons**: For consistent and scalable icons
- **Three.js**: For interactive 3D animations in the experience timeline

### Additional Features

- **React Router**: For client-side routing
- **React Query**: For efficient data management
- **Next Themes**: For theme management

## Application Structure and Terminology

### Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── BlogPost.tsx # Blog post component
│   ├── Header.tsx   # Site header
│   └── Footer.tsx   # Site footer
├── pages/
│   ├── Home.tsx     # Landing page
│   ├── Blog.tsx     # Blog listing page
│   ├── About.tsx    # About page
│   └── Contact.tsx  # Contact page
└── lib/
    └── wordpress.ts # WordPress API integration
```

### Key Sections and Component Names

For clarity in our discussions, we'll use these terms consistently:

1. **Profile Page** - The main landing page (Index.tsx) showing personal information
2. **Calendar Page** - The page showing the interactive calendar (Blog.tsx)
3. **Experience Timeline** - The professional history page with job animations
4. **Main Layout** - The overall application structure (Layout component in App.tsx)
5. **Header** - The top navigation bar with logo and menu toggle
6. **Sidebar** - The left navigation panel with links to different sections
7. **InteractiveCalendar** - The calendar component with holiday information

### Features and Components

- **Header**: Contains the site title, logo, and navigation menu toggle
- **Sidebar**: Main navigation component with collapsible menu
- **MainContent**: Overview page with profile information
- **Experience Timeline**: Interactive timeline of professional experience
- **InteractiveCalendar**: Calendar component with holiday information for different countries
- **JobAnimation**: Custom Three.js animations for job categories

## Getting Started

To run this project locally:

```sh
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd office-nils-johansson

# Install dependencies
npm install

# Start development server
npm run dev
```

## Building for Production

```sh
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Browser Support

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

If you'd like to contribute to this project, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2025 Nils Johansson. All rights reserved.
