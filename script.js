import { initializeNav } from './components/nav.js';

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation
  initializeNav();
  
  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Check honeypot field
      const honeypot = document.getElementById('website').value;
      if (honeypot) {
        console.log('Bot detected');
        return;
      }

      // Verify reCAPTCHA
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA verification');
        return;
      }
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        'g-recaptcha-response': recaptchaResponse
      };

      // Here you would typically send the form data to a server
      // For now, we'll just log it and show a success message
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      
      // Clear the form and reset reCAPTCHA
      contactForm.reset();
      grecaptcha.reset();
    });
  }
});