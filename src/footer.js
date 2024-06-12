const footer = () => {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.classList.add("footer-body")

  const footerTop = document.createElement("div");
  footerTop.className = "footer-top";

  const footerLogo = document.createElement("div");
  footerLogo.className = "footer-logo";
  const logoImg = document.createElement("img");
  logoImg.src = "https://res.cloudinary.com/drlfc6gsb/image/upload/v1718091602/Screenshot_2024-06-11_130716_bp5qwf.png"; 
  logoImg.alt = "Compliance Desk India";
  footerLogo.appendChild(logoImg);

  const footerTagline = document.createElement("div");
  footerTagline.className = "footer-tagline";
  const taglineHeading = document.createElement("h1");
  taglineHeading.textContent = "Finance Simplified, Success Amplified";
  const taglineText = document.createElement("p");
  taglineText.textContent =
    "With Compliance Desk, managing your financial and compliance needs becomes effortless.";
  const consultButton = document.createElement("button");
  consultButton.textContent = "Consult an Expert";

  footerTagline.appendChild(taglineHeading);
  footerTagline.appendChild(taglineText);
  footerTagline.appendChild(consultButton);

  footerTop.appendChild(footerLogo);
  footerTop.appendChild(footerTagline);

  const footerLinks = document.createElement("div");
  footerLinks.className = "footer-links";

  const columns = [
    {
      title: "Product",
      links: [
        "Landing Page",
        "Popup Builder",
        "Web-design",
        "Content",
        "Integrations",
      ],
    },
    {
      title: "Use Cases",
      links: [
        "Web-designers",
        "Marketers",
        "Small Business",
        "Website Builder",
      ],
    },
    {
      title: "Resources",
      links: ["Academy", "Blog", "Themes", "Hosting", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "FAQs", "Teams", "Contact Us"],
    },
  ];
  const Mandatory = document.createElement("div");
  const img = document.createElement("img");
  img.src = "https://res.cloudinary.com/drlfc6gsb/image/upload/v1718203975/Screenshot_2024-06-12_202132_bllhew.png";
  img.alt = "tick";
  Mandatory.appendChild(img);
  Mandatory.classList.add("mandatory")
  const facebook = document.createElement("i");
  facebook.className = "fa-brands fa-facebook";
  Mandatory.appendChild(facebook);
  const twitter = document.createElement("i");
  twitter.className = "fa-brands fa-twitter";
  Mandatory.appendChild(twitter); 
  const linkedin = document.createElement("i");
  linkedin.className = "fa-brands fa-linkedin";
  Mandatory.appendChild(linkedin);
  const instagram = document.createElement("i");
  instagram.className = "fa-brands fa-instagram";
  Mandatory.appendChild(instagram);

  columns.forEach((column) => {
    const footerColumn = document.createElement("div");
    footerColumn.className = "footer-column";

    const columnTitle = document.createElement("h3");
    columnTitle.textContent = column.title;
    footerColumn.appendChild(columnTitle);

    const columnList = document.createElement("ul");
    column.links.forEach((linkText) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = linkText;
      listItem.appendChild(link);
      columnList.appendChild(listItem);
    });

    footerColumn.appendChild(columnList);
    footerLinks.appendChild(footerColumn);
  });

  const footerBottom = document.createElement("div");
  footerBottom.className = "footer-bottom";
  footerBottom.innerHTML = `
        <p>Privacy Policy | Terms of Use | Legal</p>
        <p>© 2024 All Rights Reserved</p>
    `;
    footerBottom.classList.add("footer-bottom")
    Mandatory.appendChild(footerLinks);
  footer.appendChild(footerTop);
  footer.appendChild(Mandatory);
  footer.appendChild(footerBottom);

  document.body.appendChild(footer);
  return footer;
};

export  { footer };
