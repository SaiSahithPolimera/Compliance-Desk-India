

const whyChooseUs = () => {
    const section = document.getElementById('why-choose-us');

    const heading1 = document.createElement('h1');
    heading1.textContent = 'Why Choose Us?';

    const heading2 = document.createElement('h2');
    heading2.textContent = 'Your Success, Our Commitment';

    const features = [
        {
            imgSrc: 'confidentiality.png',
            title: 'Confidentiality',
            description: 'Your security and privacy are our top priorities.'
        },
        {
            imgSrc: 'quick-response.png',
            title: 'Quick Response',
            description: 'Complete the entire process with quick and efficient responses.'
        },
        {
            imgSrc: 'convenient-compliance.png',
            title: 'Convenient Compliance',
            description: 'Hassle-free compliance services. Relax, we\'ve got you covered.'
        },
        {
            imgSrc: 'expertise.png',
            title: 'Expertise and Knowledge',
            description: 'Experienced CA in finance, tax, and auditing.'
        },
        {
            imgSrc: 'affordable.png',
            title: 'Affordable & Reliable',
            description: 'Affordable and reliable assistance for all your financial needs.'
        },
        {
            imgSrc: 'personalized-solutions.png',
            title: 'Personalized Solutions',
            description: 'Tailored compliance solutions to meet your unique needs.'
        }
    ];

    const featuresContainer = document.createElement('div');
    featuresContainer.classList.add('features');

    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.classList.add('feature');

        const img = document.createElement('img');
        img.src = feature.imgSrc;
        img.alt = feature.title;

        const h3 = document.createElement('h3');
        h3.textContent = feature.title;

        const p = document.createElement('p');
        p.textContent = feature.description;

        featureDiv.appendChild(img);
        featureDiv.appendChild(h3);
        featureDiv.appendChild(p);

        featuresContainer.appendChild(featureDiv);
    });

    section.appendChild(heading1);
    section.appendChild(heading2);
    section.appendChild(featuresContainer);
    return section;
}
export {whyChooseUs};