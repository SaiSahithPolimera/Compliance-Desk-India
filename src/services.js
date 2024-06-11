const services = () => {
  const servicesContainer = document.createElement("div");
  servicesContainer.id = "servicesContainer";
  const headingContainer = document.createElement("div");
  const servicesList = document.createElement("div");
  servicesList.id = "servicesList";
  const plansContainer = document.createElement("div");
  plansContainer.id = "plansContainer";

  const createCards = () => {
    services.forEach((service) => {
      service.plans.forEach((plan) => {
        const card = document.createElement("div");
        card.id = "card";
        const planDetailsContainer = document.createElement("div");
        planDetailsContainer.id = "planDetailsContainer";
        const price = document.createElement("span");
        price.id = "price";
        const priceValidityContainer = document.createElement("div");
        priceValidityContainer.id = "priceValidityContainer";
        const validity = document.createElement("span");
        const planDetails = document.createElement("div");
        planDetails.id = "planDetails";
        const button = document.createElement("button");
        const priceContainer = document.createElement("div");
        priceContainer.id = "priceContainer";
        const p = document.createElement("p");
        if (plan.price === "$299") {
          const popularContainer = document.createElement("div");
          popularContainer.id = "popularContainer";
          const div = document.createElement("div");
          card.classList.add("popularCard");
          div.innerHTML = `Most Popular <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.02347 13.1221C9.06139 13.2744 9.19434 13.3874 9.35134 13.3874C9.50972 13.3874 9.64337 13.2722 9.68097 13.1184C9.79944 12.6336 10.03 12.112 10.3805 11.5535C11.1621 10.3199 12.6893 9.10924 14.068 8.71845C14.2219 8.67484 14.3346 8.53821 14.3346 8.37828C14.3346 8.21968 14.2237 8.08367 14.0709 8.04127C13.4466 7.86806 12.8335 7.56608 12.2405 7.14408C10.9555 6.23494 9.98693 4.9078 9.68208 3.66803C9.64405 3.51338 9.50943 3.39807 9.35017 3.39807C9.19334 3.39807 9.05996 3.51004 9.02138 3.66206C8.87019 4.25777 8.59049 4.83752 8.18228 5.42716C7.31338 6.68767 5.98392 7.63729 4.60555 8.03768C4.45388 8.08174 4.34521 8.21802 4.34521 8.37596C4.34521 8.53736 4.45866 8.6754 4.6142 8.71849C5.26854 8.89974 5.93051 9.24068 6.58242 9.73247C7.97413 10.7763 8.75719 12.0524 9.02347 13.1221Z" fill="white"/>
          <path d="M3.45112 6.10041C3.47279 6.18746 3.54876 6.25203 3.63847 6.25203C3.72898 6.25203 3.80535 6.18619 3.82683 6.09827C3.89453 5.82127 4.02629 5.52319 4.22654 5.20404C4.67321 4.49914 5.54585 3.80735 6.33372 3.58404C6.42164 3.55912 6.48604 3.48105 6.48604 3.38966C6.48604 3.29903 6.4227 3.22131 6.33537 3.19708C5.97863 3.0981 5.6283 2.92554 5.2894 2.6844C4.55516 2.16489 4.00167 1.40653 3.82747 0.698087C3.80574 0.609713 3.72881 0.543823 3.6378 0.543823C3.54819 0.543823 3.47197 0.607807 3.44993 0.694672C3.36353 1.03508 3.2037 1.36637 2.97044 1.7033C2.47393 2.42359 1.71423 2.96623 0.926598 3.19503C0.839927 3.2202 0.777832 3.29808 0.777832 3.38833C0.777832 3.48056 0.842657 3.55944 0.931538 3.58406C1.30545 3.68763 1.68371 3.88246 2.05623 4.16348C2.8515 4.75993 3.29896 5.48918 3.45112 6.10041Z" fill="white"/>
          </svg>
          `;
          popularContainer.appendChild(div);
          card.appendChild(popularContainer);
        }
        p.textContent = plan.planName;
        price.textContent = plan.price;
        validity.textContent = "/" + plan.duration;
        priceContainer.appendChild(p);
        priceValidityContainer.appendChild(price);
        priceValidityContainer.appendChild(validity);
        priceContainer.appendChild(priceValidityContainer);
        plan.planDetails.forEach((detail) => {
          const planDetail = document.createElement("div");
          const span = document.createElement("div");
          const planContent = document.createElement("div");
          span.id = "tick";
          planContent.textContent = detail;
          planDetail.appendChild(span);
          planDetail.appendChild(planContent);
          planDetails.appendChild(planDetail);
        });
        button.textContent = "Get started";
        planDetailsContainer.appendChild(planDetails);
        planDetailsContainer.appendChild(button);
        card.appendChild(priceContainer);
        card.appendChild(planDetailsContainer);
        plansContainer.appendChild(card);
      });
    });
  };

  const services = [
    {
      serviceName: "Register Your Business",
      plans: [
        {
          planName: "Private Limited Company Registration",
          price: "$199",
          duration: "month",
          planDetails: [
            "DIN and DSC for two Directors",
            "Name Approval Certificate",
            "Drafting of MoA & AoA",
            "Registration fees and stamp duty",
            "Company PAN and TAN & more",
          ],
        },
        {
          planName: "Limited Liability Partnership",
          price: "$299",
          duration: "month",
          planDetails: [
            "DSC for one director and DIN for up to three directors",
            "Drafting of MoA & AoA",
            "Drafting of MoA & AoA",
            "Registration fees and stamp duty",
            "Company Incorporation Certificate",
            "Company Incorporation Certificate",
            "Zero Balance Current Account & more",
          ],
        },
        {
          planName: "One Person Company",
          price: "$499",
          duration: "month",
          planDetails: [
            "DIN and DSC for two directors",
            "Name Approval Certificate",
            "Drafting of MoA & AoA",
            "Company Incorporation Certificate & more",
          ],
        },
        {
          planName: "One Person Company",
          price: "$499",
          duration: "month",
          planDetails: [
            "DIN and DSC for two directors",
            "Name Approval Certificate",
            "Drafting of MoA & AoA",
            "Company Incorporation Certificate & more",
          ],
        },
      ],
    },
    {
      serviceName: "Get Licenses and Registrations",
      plans: [],
    },
    {
      serviceName: "Protect Your Intellectual Properties",
      plans: [],
    },
    {
      serviceName: "Easy Tax Registration and Filling",
      plans: [],
    },
    {
      serviceName: "Mandatory Compliances",
      plans: [],
    },
  ];

  services.forEach((service) => {
    const serviceContainer = document.createElement("div");
    serviceContainer.id = "serviceContainer";
    const serviceName = document.createElement("span");
    const hr = document.createElement("hr");
    serviceName.addEventListener("click", () => {
      hr.style.display = "block";
      serviceName.style.color = "#fe472c";
      reset(serviceName, hr);
    });
    const reset = (serviceName, hr) => {
      const servicesNames = document.querySelectorAll("#serviceContainer span");
      const lines = document.querySelectorAll("#serviceContainer hr");
      console.log(serviceName);
      console.log(lines);
      servicesNames.forEach((name) => {
        if (name.textContent !== serviceName.textContent) {
          name.style.color = "";
        }
      });
      lines.forEach((line) => {
        if (line !== hr) {
          line.style.display = "none";
        }
      });
    };
    serviceName.textContent = service.serviceName;
    serviceContainer.appendChild(serviceName);
    serviceContainer.appendChild(hr);
    servicesList.append(serviceContainer);
  });

  const heading = document.createElement("h2");
  heading.textContent = "Delve into Our Extensive Services";
  headingContainer.appendChild(heading);
  servicesContainer.appendChild(headingContainer);
  servicesContainer.appendChild(servicesList);
  createCards();
  servicesContainer.appendChild(plansContainer);
  return servicesContainer;
};

export { services };
