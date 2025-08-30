# Crezvatic - Digital Marketing Agency Website

A modern, responsive website built with Next.js 15, React 19, and Tailwind CSS for Crezvatic, a leading digital marketing agency.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, Tailwind CSS 4
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **SEO Ready**: Proper metadata and structured content
- **Interactive Components**: Framer Motion animations and Lottie files

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, Lottie
- **Icons**: React Icons, FontAwesome
- **Sliders**: Keen Slider

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page and components
│   ├── blog/              # Blog pages and components
│   ├── careers/           # Careers page and components
│   ├── contact/           # Contact page and components
│   ├── services/          # Service pages (SEO, SMM, PPC, Web, Video)
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/             # Reusable components
│   ├── common/            # Shared components (Navbar, Footer)
│   └── home/              # Home page specific components
├── data/                  # Static data files
└── animations/            # Lottie animation files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## 🏗️ Build and Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Deploy to Vercel
The project is configured for easy deployment to Vercel:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 🎨 Customization

### Styling
- Global styles are in `src/app/globals.css`
- Tailwind CSS configuration in `tailwind.config.js`
- Component-specific styles use Tailwind utility classes

### Content
- Update content in respective component files
- Modify data in `src/data/` directory
- Update metadata in `src/app/layout.js`

## 📱 Responsive Design

The website is fully responsive and follows mobile-first design principles:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration
- `jsconfig.json` - JavaScript path mapping

## 📄 License

This project is proprietary to Crezvatic. All rights reserved.

## 🤝 Support

For support and questions, contact:
- Email: connect@crezvatic.com
- Phone: +91-98201 60482

---

Built with ❤️ by Crezvatic Team
