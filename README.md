# Michelle Sentevski - Professional Portfolio Website

A modern, responsive portfolio website showcasing Michelle Sentevski's mechanical engineering and product design services.

## 🚀 Features

- Clean, professional design
- Responsive navigation
- Services showcase
- Contact form with reCAPTCHA protection
- Social media integration
- Portfolio and experience sections

## 🛠️ Technology Stack

- **Frontend:**
  - Vanilla JavaScript (ES6+)
  - HTML5
  - CSS3
  - Font Awesome icons
  - Google reCAPTCHA

- **Development Server:**
  - Servor (lightweight development server with hot-reload)

## 📁 Project Structure

```
website-michelle/
├── components/
│   └── nav.js         # Navigation component with routing
├── index.html         # Main landing page
├── package.json       # Project dependencies and scripts
├── styles.css         # Global styles
└── script.js         # Main JavaScript entry point
```

## 🔧 Setup and Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd website-michelle
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080` by default.

## 💻 Development

### Navigation Component

The `nav.js` component (`components/nav.js`) provides:
- Responsive navigation menu
- Active page highlighting
- Social media links
- Profile section with image

### Contact Form

The contact form includes:
- Input validation
- reCAPTCHA integration for spam protection
- Honeypot field for additional security

### Configuration

To enable the contact form functionality:
1. Replace `YOUR_SITE_KEY` in `index.html` with your Google reCAPTCHA site key
2. Configure your backend endpoint for form submission

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🔒 Security Features

- reCAPTCHA integration
- Honeypot field for spam prevention
- Secure form submission

## 🚀 Deployment

The site can be deployed to any static hosting service such as:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 📄 License

[Add your license information here]

## 👤 Contact

For professional inquiries, contact Michelle Sentevski:
- LinkedIn: [Michelle Sentevski](https://linkedin.com/in/michellesentevski)
- Email: msentevski+contracting@gmail.com 