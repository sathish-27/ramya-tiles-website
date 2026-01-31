// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }
    
    lastScroll = currentScroll;
});

// Cost Calculator Function
function calculateCost() {
    const serviceType = document.getElementById('serviceType').value;
    const area = parseFloat(document.getElementById('area').value);
    const tileQuality = document.getElementById('tileQuality').value;
    const waterproofing = document.getElementById('waterproofing').checked;
    const removal = document.getElementById('removal').checked;
    
    // Validate inputs
    if (!serviceType || !area || area <= 0) {
        alert('Please fill in all required fields with valid values');
        return;
    }
    
    if (serviceType === 'custom') {
        alert('For tile repair services, please submit a quotation request for a custom quote based on your specific requirements.');
        document.getElementById('quotationForm').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    // Parse price range
    const [minPrice, maxPrice] = serviceType.split('-').map(p => parseFloat(p));
    
    // Calculate base cost based on quality selection
    let pricePerSqFt = tileQuality === 'premium' ? maxPrice : minPrice;
    let baseCost = area * pricePerSqFt;
    
    // Calculate additional costs
    let additionalCost = 0;
    if (waterproofing) {
        additionalCost += area * 15;
    }
    if (removal) {
        additionalCost += area * 20;
    }
    
    // Calculate total
    const totalCost = baseCost + additionalCost;
    
    // Display results
    document.getElementById('baseCost').textContent = `₹${baseCost.toLocaleString('en-IN')}`;
    document.getElementById('additionalCost').textContent = `₹${additionalCost.toLocaleString('en-IN')}`;
    document.getElementById('totalCost').textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    
    // Show result section
    const resultSection = document.getElementById('calculatorResult');
    resultSection.classList.remove('hidden');
    
    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Quotation Form Submission
const quotationForm = document.getElementById('quotationForm');
const formMessage = document.getElementById('formMessage');

if (quotationForm) {
    quotationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quotationForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Create email content
        const emailSubject = `New Quotation Request from ${data.name}`;
        const emailBody = `
New Quotation Request Details:

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Location: ${data.location}
Project Type: ${data.projectType}
Service Required: ${data.serviceRequired}
Estimated Area: ${data.estimatedArea || 'Not specified'} sq.ft
Timeline: ${data.timeline || 'Not specified'}

Additional Details:
${data.message || 'None'}

---
This request was submitted via RamyaTilesworkcontractor.in website.
        `.trim();
        
        // Create mailto link (fallback method)
        const mailtoLink = `mailto:info@ramyatileswork.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Create WhatsApp message
        const whatsappMessage = `
*New Quotation Request*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Location:* ${data.location}
*Service:* ${data.serviceRequired}
*Project Type:* ${data.projectType}
${data.estimatedArea ? `*Area:* ${data.estimatedArea} sq.ft` : ''}
${data.timeline ? `*Timeline:* ${data.timeline}` : ''}

${data.message ? `*Details:* ${data.message}` : ''}
        `.trim();
        
        const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Show success message
        formMessage.textContent = 'Thank you! Your quotation request has been received. We will contact you within 24 hours.';
        formMessage.classList.remove('hidden', 'error');
        formMessage.classList.add('success');
        
        // Open WhatsApp (recommended) or email
        const userChoice = confirm('Your request has been prepared!\n\nClick OK to send via WhatsApp (recommended)\nClick Cancel to send via Email');
        
        if (userChoice) {
            // Open WhatsApp
            window.open(whatsappLink, '_blank');
        } else {
            // Open email client
            window.location.href = mailtoLink;
        }
        
        // Reset form after 2 seconds
        setTimeout(() => {
            quotationForm.reset();
            formMessage.classList.add('hidden');
        }, 5000);
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards, gallery items, and stat cards
document.querySelectorAll('.service-card, .gallery-item, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Phone number validation (Indian format)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        // Remove non-numeric characters
        let value = e.target.value.replace(/\D/g, '');
        
        // Limit to 10 digits
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        
        e.target.value = value;
    });
}

// Auto-populate calculator values to quotation form
const calculatorButton = document.querySelector('.calculator-result .btn-secondary');
if (calculatorButton) {
    calculatorButton.addEventListener('click', () => {
        const serviceType = document.getElementById('serviceType');
        const area = document.getElementById('area');
        const estimatedArea = document.getElementById('estimatedArea');
        const serviceRequired = document.getElementById('serviceRequired');
        
        // Map calculator service to quotation service
        const serviceMapping = {
            '45-80': 'floor',
            '60-100': 'bathroom',
            '50-90': 'kitchen',
            '40-75': 'commercial',
            '80-150': 'designer'
        };
        
        if (area.value && estimatedArea) {
            estimatedArea.value = area.value;
        }
        
        if (serviceType.value && serviceRequired) {
            const mappedService = serviceMapping[serviceType.value];
            if (mappedService) {
                serviceRequired.value = mappedService;
            }
        }
    });
}

// Add loading animation for form submission
const buttons = document.querySelectorAll('button[type="submit"]');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Processing...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 3000);
    });
});

// Gallery item click handler (for future image modal)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Future implementation: open image in modal/lightbox
        console.log('Gallery item clicked - modal feature coming soon');
    });
});

// Update copyright year
const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector('.footer-bottom p');
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} Ramya Tiles Work Contractor. All rights reserved.`;
}

// Console welcome message
console.log('%c🏗️ Ramya Tiles Work Contractor', 'font-size: 20px; font-weight: bold; color: #2C5F2D;');
console.log('%cWebsite built with care for professional tiling services', 'font-size: 12px; color: #666;');
console.log('%cNeed help? Contact: +91 98765 43210', 'font-size: 12px; color: #D4A373;');
