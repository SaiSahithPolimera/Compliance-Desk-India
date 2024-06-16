
const hero = () => {
  const section = document.getElementById('hero');
  document.addEventListener('DOMContentLoaded', function() {
    // Create navbar elements
    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light bg-light';
    
    const container = document.createElement('div');
    container.className = 'container-fluid';
    
    const brand = document.createElement('img');
    brand.src = 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1718449972/l2ek5zydrctcxn5jfkhq.png';
    brand.classList.add('navbar-brand');
    const button = document.createElement('button');
    button.className = 'navbar-toggler';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', '#navbarNavDropdown');
    button.setAttribute('aria-controls', 'navbarNavDropdown');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');
    
    const buttonIcon = document.createElement('span');
    buttonIcon.className = 'navbar-toggler-icon';
    
    button.appendChild(buttonIcon);
    
    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarNavDropdown';
    
    const ul = document.createElement('ul');
    ul.className = 'navbar-nav';
    
    const accountsAndAuditLi = document.createElement('li');
    accountsAndAuditLi.className = 'nav-item dropdown';
    
    const accountsAndAuditLink = document.createElement('a');
    accountsAndAuditLink.className = 'nav-link active dropdown-toggle mr-2';
    accountsAndAuditLink.href = '#';
    accountsAndAuditLink.setAttribute('aria-current', 'page');
    accountsAndAuditLink.textContent = 'Account and Audit';
    
    accountsAndAuditLi.appendChild(accountsAndAuditLink);
    
    const featuresLi = document.createElement('li');
    featuresLi.className = 'nav-item dropdown';
    
    const featuresLink = document.createElement('a');
    featuresLink.className = 'nav-link dropdown-toggle mr-2';
    featuresLink.href = '#';
    featuresLink.textContent = 'Payroll Management';
    
    featuresLi.appendChild(featuresLink);
    
    const pricingLi = document.createElement('li');
    pricingLi.className = 'nav-item dropdown';
    
    const pricingLink = document.createElement('a');
    pricingLink.className = 'nav-link dropdown-toggle mr-2';
    pricingLink.href = '#';
    pricingLink.textContent = 'License and Registration';
    
    pricingLi.appendChild(pricingLink);
    
    const dropdownLi = document.createElement('li');
    dropdownLi.className = 'nav-item dropdown';
    
    const dropdownLink = document.createElement('a');
    dropdownLink.className = 'nav-link dropdown-toggle mr-2';
    dropdownLink.href = '#';
    dropdownLink.id = 'navbarDropdownMenuLink';
    dropdownLink.setAttribute('role', 'button');
    dropdownLink.setAttribute('data-bs-toggle', 'dropdown');
    dropdownLink.setAttribute('aria-expanded', 'true');
    dropdownLink.textContent = 'Dropdown link';
    
    dropdownLi.appendChild(dropdownLink);


    const taxLi = document.createElement('li');
    taxLi.className = 'nav-item dropdown';
    
    const taxLink = document.createElement('a');
    taxLink.className = 'nav-link dropdown-toggle mr-2';
    taxLink.href = '#';
    taxLink.textContent = 'Tax';
    
    taxLi.appendChild(taxLink);

    const rocLi = document.createElement('li');
    rocLi.className = 'nav-item dropdown';
    
    const rocLink = document.createElement('a');
    rocLink.className = 'nav-link dropdown-toggle mr-2';
    rocLink.href = '#';
    rocLink.textContent = 'Roc';
    
    rocLi.appendChild(rocLink);

    const virtualCfoLi = document.createElement('li');
    virtualCfoLi.className = 'nav-item dropdown'; 

    const virtualCfoLink = document.createElement('a');
    virtualCfoLink.className = 'nav-link dropdown-toggle mr-2';
    virtualCfoLink.href = '#';
    virtualCfoLink.textContent = 'Virtual CFO';

    virtualCfoLi.appendChild(virtualCfoLink);
    
    
    ul.appendChild(accountsAndAuditLi);
    ul.appendChild(featuresLi);
    ul.appendChild(pricingLi);
    ul.appendChild(dropdownLi);
    ul.appendChild(taxLi);
    ul.appendChild(rocLi);
    ul.appendChild(virtualCfoLi);
    
    collapseDiv.appendChild(ul);
    collapseDiv.classList.add("hero-navbar")
    container.appendChild(brand);
    container.appendChild(button);
    container.appendChild(collapseDiv);
    
    navbar.appendChild(container);
    
  section.appendChild(navbar);
  });
  const contant = document.createElement('div');
  contant.classList.add('hero-content');
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Finance Simplified Success Amplified';
  const heroSubTitle = document.createElement('p');
  heroSubTitle.textContent = 'With Complince Desk, managing your financial and compliance needs become effortless.';
  contant.appendChild(heroTitle);
  contant.appendChild(heroSubTitle);

  document.addEventListener('DOMContentLoaded', function() {
    // Create form elements
    const form = document.createElement('form');
    form.className = 'container-fluid';
    
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';
    
    const inputGroupText = document.createElement('span');
    inputGroupText.className = 'input-group-text';
    inputGroupText.id = 'basic-addon1';
    inputGroupText.textContent = '';
    inputGroupText.classList.add('hero-form');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Username';
    input.setAttribute('aria-label', 'Username');
    input.setAttribute('aria-describedby', 'basic-addon1');
    input.classList.add('hero-form1');
    // Append elements to form
    inputGroup.appendChild(inputGroupText);
    inputGroup.appendChild(input);
    form.appendChild(inputGroup);
    
    // Append form to the DOM
    section.appendChild(contant);
    section.appendChild(form);

    const options = document.createElement('div');
    options.className = 'options';

    const option1 = document.createElement('li');
    const optionLi = document.createElement('a');
    optionLi.href = "#";
    optionLi.textContent = 'Company Registration';
    option1.appendChild(optionLi);

    const option2 = document.createElement('li');
    const option2Li = document.createElement('a');
    option2Li.href = "#";
    option2Li.textContent = 'GST Registration';
    option2.appendChild(option2Li);

    const option3 = document.createElement('li');
    const option3Li = document.createElement('a');
    option3Li.href = "#";
    option3Li.textContent = 'Private Limited Comp';
    option3.appendChild(option3Li);

    const option4 = document.createElement('li');
    const option4Li = document.createElement('a');
    option4Li.href = "#";
    option4Li.textContent = 'Trademark And IP';
    option4.appendChild(option4Li);

    const option5 = document.createElement('li');
    const option5Li = document.createElement('a');
    option5Li.href = "#";
    option5Li.textContent = 'Company Registration';
    option5.appendChild(option5Li);

    const option6 = document.createElement('li');
    const option6Li = document.createElement('a');
    option6Li.href = "#";
    option6Li.textContent = 'Company Registration';
    option6.appendChild(option6Li);

    const option7 = document.createElement('li');
    const option7Li = document.createElement('a');
    option7Li.href = "#";
    option7Li.textContent = 'Company Registration';
    option7.appendChild(option7Li);
    

    options.appendChild(option1);
    options.appendChild(option2);
    options.appendChild(option3);
    options.appendChild(option4);
    options.appendChild(option5);
    options.appendChild(option6);
    options.appendChild(option7);



    section.appendChild(options);


    const heroLast = document.createElement('img');
    heroLast.classList.add('hero-last');
    heroLast.src = "https://res.cloudinary.com/drlfc6gsb/image/upload/v1718204027/WhatsApp_Image_2024-06-11_at_8.08.08_PM_evvwh4.jpg";
    section.appendChild(heroLast);
  });


  return section;
}

export {hero};