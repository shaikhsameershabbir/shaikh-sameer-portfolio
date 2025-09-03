# Shaikh Sameer - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark mode UI with smooth animations and a clean, professional design.

## 🚀 Features

- **Modern Design**: Dark mode UI with glass morphism effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 App Router for optimal performance
- **SEO Optimized**: Complete with metadata, Open Graph tags, and structured data
- **Smooth Animations**: Framer Motion animations throughout the site
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Beautiful project grid with hover effects
- **Experience Timeline**: Professional experience with detailed information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── experience/
│   │   └── page.tsx          # Experience page
│   ├── projects/
│   │   └── page.tsx          # Projects page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Navigation.tsx        # Navigation component
│   └── Footer.tsx            # Footer component
```

## 🎨 Customization Guide

### 1. Personal Information
Update the following files with your personal information:

- **Name**: Replace "Shaikh Sameer" throughout all files
- **Email**: Update email addresses in contact forms and links
- **Social Links**: Update GitHub, LinkedIn, and other social media links
- **Phone**: Update phone number in contact information
- **Location**: Update your location information

### 2. Content Updates

#### Home Page (`src/app/page.tsx`)
- Update the hero section text
- Modify the introduction paragraph
- Update the quick stats section

#### About Page (`src/app/about/page.tsx`)
- Replace the professional summary
- Update skills and technologies
- Modify the experience timeline
- Add your profile image

#### Projects Page (`src/app/projects/page.tsx`)
- Replace dummy project data with your actual projects
- Update project images (currently using Unsplash placeholders)
- Modify project descriptions and technologies
- Update GitHub and live demo links

#### Experience Page (`src/app/experience/page.tsx`)
- Update work experience details
- Modify education information
- Add/remove certifications
- Update achievements and responsibilities

#### Contact Page (`src/app/contact/page.tsx`)
- Update contact information
- Modify social media links
- Customize the contact form (currently simulated)

### 3. Images and Assets

#### Profile Image
- Add your profile image to the `public` folder
- Update the image path in the About page

#### Project Images
- Add your project screenshots to the `public` folder
- Update image paths in the Projects page

#### Resume/CV
- Add your resume PDF to the `public` folder
- Update the download link in the About page

### 4. Styling Customization

#### Colors
The website uses a dark theme with the following color scheme:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Green (#10B981)
- Background: Gray (#111827)

#### Typography
- Font: Inter (Google Fonts)
- Headings: Bold weights
- Body: Regular weight

### 5. SEO and Metadata

Update the metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter card information
- Keywords

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**
   ```bash
   npx vercel
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Navigation
- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Active link highlighting

### Animations
- Framer Motion for smooth page transitions
- Scroll-triggered animations
- Hover effects on interactive elements

### Contact Form
- Form validation
- Loading states
- Success/error messages
- Responsive design

### Project Showcase
- Grid layout with hover effects
- Featured projects section
- Technology tags
- Live demo and source code links

## 🔧 Customization Tips

1. **Add New Pages**: Create new folders in `src/app/` and add `page.tsx` files
2. **Modify Animations**: Adjust Framer Motion settings in components
3. **Update Colors**: Modify Tailwind classes or add custom CSS
4. **Add Components**: Create reusable components in `src/components/`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy Coding! 🚀**