import QuoteIcon from './assets/QuoteIcon.png';
import testimonalImg1 from './assets/testimonal-img1.png';
import testimonalImg2 from './assets/testimonal-img1.png';
import testimonalImg3 from './assets/testimonal-img1.png';

let slideIndex = 0;
let intervalId = null;
document.addEventListener("DOMContentLoaded",initializeSlider);
let testimonalImages = [testimonalImg1,testimonalImg2,testimonalImg3];
let testimonalExperience = ["Exceptional Service and Results! Experience Unparalled Satisfaction with",
    "Exceptional Service and Results! Experience Unparalled Satisfaction with",
    "Exceptional Service and Results! Experience Unparalled Satisfaction with"
];

let testimonalInfo = ["I couldn't be happier with the exceptional service provided by Compliance. Their team went above and beyond to meet my needs and deliver outstanding results. Highly recommended!",
    "I couldn't be happier with the exceptional service provided by Compliance. Their team went above and beyond to meet my needs and deliver outstanding results.",
    "I couldn't be happier with the exceptional service provided by Compliance. Their team went above and beyond to meet my needs"
];

function initializeSlider() {
    if (testimonalImages.length > 0) {
        intervalId = setInterval(nextSlide, 5000);
    }
}

function testimonials(slideIndex) {
    const section = document.getElementById("testimonals");
    section.innerHTML = ""; // Clear previous content

    const heading1 = document.createElement('h1');
    heading1.textContent = "TESTIMONALS";

    const heading2 = document.createElement("h2");
    heading2.textContent = "Our Clients, Our Success";

    const testimonialContainer = document.createElement('div');
    testimonialContainer.className = "testimonial-container";

    const testimonialContent = document.createElement('div');
    testimonialContent.className = "testimonial-content";
    testimonialContainer.appendChild(testimonialContent);

    const quoteImage = document.createElement('img');
    quoteImage.className = "quote-image";
    quoteImage.src = QuoteIcon;
    testimonialContent.appendChild(quoteImage);

    const testimonialData = document.createElement('div');
    testimonialData.className = "testimonial-data";
    testimonialContent.appendChild(testimonialData);

    const testimonialExperienceElement = document.createElement('h3');
    testimonialExperienceElement.className = "testimonial-experience";
    testimonialExperienceElement.textContent = testimonalExperience[slideIndex];
    testimonialData.appendChild(testimonialExperienceElement);

    const testimonialInfoElement = document.createElement('p');
    testimonialInfoElement.className = "testimonial-info";
    testimonialInfoElement.textContent = testimonalInfo[slideIndex];
    testimonialData.appendChild(testimonialInfoElement);

    const testimonialImage = document.createElement('img');
    testimonialImage.className = "testimonial-image";
    testimonialImage.src = testimonalImages[slideIndex];
    testimonialContent.appendChild(testimonialImage);

    const testimonialButtons = document.createElement('div');
    testimonialButtons.className = "testimonial-buttons-container";

    const buttonContainer = document.createElement('div');
    buttonContainer.className = "button-container";

    const leftArrow = document.createElement('button');
    leftArrow.className = "left-arrow-btn";
    leftArrow.addEventListener("click", prevSlide);
    buttonContainer.appendChild(leftArrow);

    const rightArrow = document.createElement('button');
    rightArrow.className = "right-arrow-btn";
    rightArrow.addEventListener("click", nextSlide);
    buttonContainer.appendChild(rightArrow);

    testimonialButtons.appendChild(buttonContainer);
    testimonialContainer.appendChild(testimonialButtons);

    section.appendChild(heading1);
    section.appendChild(heading2);
    section.appendChild(testimonialContainer);

    return section;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % testimonalImages.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + testimonalImages.length) % testimonalImages.length;
    showSlide(slideIndex);
}

function showSlide(index) {
    testimonials(index);
}

document.addEventListener("DOMContentLoaded", initializeSlider);

export { testimonials };