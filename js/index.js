const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Images
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'], '../img/logo.png');

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute(
  'src',
  siteContent['cta']['img-src'],
  '../img/header-img.png'
);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute(
  'src',
  siteContent['main-content']['middle-img-src'],
  '../img/mid-page-accent.jpg'
);
// End Images

// Navigation

// general

// end general

const nav = document.querySelectorAll('a');
console.log(nav);

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(ele, i) {
  console.log(ele, i);
  ele.textContent = siteContent['nav'][`nav-item-${i + 1}`];
  ele.style.color = 'green';
});
// End navigation

// cta
const ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;
// end cta

// top content
const tHeader = document.querySelectorAll('.top-content .text-content h4');
tHeader[0].textContent = siteContent['main-content']['features-h4'];
tHeader[1].textContent = siteContent['main-content']['about-h4'];

const tContent = document.querySelectorAll('.top-content .text-content p');
tContent[0].textContent = siteContent['main-content']['features-content'];
tContent[1].textContent = siteContent['main-content']['about-content'];
// end top content

// bottom content
const bHeader = document.querySelectorAll('.bottom-content .text-content h4');
bHeader[0].textContent = siteContent['main-content']['services-h4'];
bHeader[1].textContent = siteContent['main-content']['product-h4'];
bHeader[2].textContent = siteContent['main-content']['vision-h4'];

const bContent = document.querySelectorAll('.bottom-content .text-content p');
bContent[0].textContent = siteContent['main-content']['services-content'];
bContent[1].textContent = siteContent['main-content']['product-content'];
bContent[2].textContent = siteContent['main-content']['vision-content'];
// end bottom content

// address
const addressH4 = document.querySelector('.contact h4');
addressH4.textContent = siteContent['contact']['contact-h4'];
const address = document.querySelectorAll('.contact p');
address[0].textContent = siteContent['contact'].address;
address[1].textContent = siteContent['contact'].phone;
address[2].textContent = siteContent['contact'].email;
// end address

// footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
// end footer
