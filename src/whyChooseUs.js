const whyChooseUs = () => {
    const section = document.getElementById('why-choose-us');
    section.classList.add("why-choose-us-body")

    const heading1 = document.createElement('h1');
    heading1.textContent = 'Why Choose Us?';
    heading1.classList.add("why-choose-us-h1" ,"why-choose-us")

    const heading2 = document.createElement('h2');
    heading2.textContent = 'Your Success, Our Commitment';
    heading2.classList.add("why-choose-us-h2","why-choose-us")

    const features = [
        {
            imgSrc: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1718091472/Screenshot_2024-06-11_130454_bevecn.png',
            title: 'Confidentiality',
            description: 'Your security and privacy are our top priorities.'
        },
        {
            imgSrc: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1718091505/Screenshot_2024-06-11_130506_tz31es.png',
            title: 'Quick Response',
            description: 'Complete the entire process with quick and efficient responses.'
        },
        {
            imgSrc: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1718091509/Screenshot_2024-06-11_130519_xj8717.png',
            title: 'Convenient Compliance',
            description: 'Hassle-free compliance services. Relax, we\'ve got you covered.'
        },
        {
            imgSrc: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1718091559/Screenshot_2024-06-11_130532_ldabte.png',
            title: 'Expertise and Knowledge',
            description: 'Experienced CA in finance, tax, and auditing.'
        },
        {
            imgSrc: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1718091568/Screenshot_2024-06-11_130540_ivktf8.png',
            title: 'Affordable & Reliable',
            description: 'Affordable and reliable assistance for all your financial needs.'
        },
        {
            imgSrc: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1718091585/Screenshot_2024-06-11_130550_ylyovb.png',
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