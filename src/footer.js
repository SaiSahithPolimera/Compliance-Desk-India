const footer = () => {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const footerTop = document.createElement("div");
  footerTop.className = "footer-top";

  const footerLogo = document.createElement("div");
  footerLogo.className = "footer-logo";
  const logoImg = document.createElement("img");
  logoImg.src = "compliance-logo.png"; // Make sure this image is in the right directory
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

  footer.appendChild(footerTop);
  footer.appendChild(footerLinks);
  footer.appendChild(footerBottom);

  document.body.appendChild(footer);
  return footer;
};

export  { footer };
