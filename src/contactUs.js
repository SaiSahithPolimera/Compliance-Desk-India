import map from "./assets/map.gif";

const contactUs = () => {
  const contactUs = document.getElementById("contact-us");
  const headerGrp = document.createElement("hgroup");
  const heading = document.createElement("h2");
  const subHeading = document.createElement("p");
  const mainContainer = document.createElement("div");
  const formContainer = document.createElement("div");
  formContainer.id = "formContainer";
  const MapContainer = document.createElement("div");
  MapContainer.id = "mapContainer";
  mainContainer.id = "mainContainer";
  heading.textContent = "Contact our Experts";
  subHeading.textContent = "Expert Guidance at your Fingertips";
  headerGrp.appendChild(heading);
  headerGrp.appendChild(subHeading);
  const form = document.createElement("form");
  form.setAttribute("autocomplete", "off");
  const fullNameLocationContainer = document.createElement("div");
  const labelInputContainer = document.createElement("div");
  const contactInfoContainer = document.createElement("div");
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  const submitButton = document.createElement("button");
  const fullNameLabel = document.createElement("label");
  fullNameLabel.textContent = "Full Name";
  const firstName = document.createElement("input");
  const lastName = document.createElement("input");
  labelInputContainer.appendChild(firstName);
  labelInputContainer.appendChild(lastName);
  const locationLabel = document.createElement("label");
  const location = document.createElement("input");
  locationLabel.textContent = "Location";
  fullNameLabel.appendChild(labelInputContainer);
  locationLabel.appendChild(location);
  const suggestionsContainer = document.createElement("div");
  suggestionsContainer.id = "suggestions";
  locationLabel.appendChild(suggestionsContainer);
  fullNameLocationContainer.appendChild(fullNameLabel);
  fullNameLocationContainer.appendChild(locationLabel);
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const email = document.createElement("input");
  email.placeholder = "sample@gmail.com";
  const phoneNumberLabel = document.createElement("label");
  phoneNumberLabel.textContent = "Phone number";
  const phoneNumber = document.createElement("input");
  phoneNumber.placeholder = "Phone number";
  phoneNumber.setAttribute("type", "tel");
  phoneNumber.id = "phone";
  const descriptionLabel = document.createElement("label");
  descriptionLabel.id = "descriptionLabel";
  const labelName = document.createElement("span");
  const descriptionCase = document.createElement("textarea");
  labelName.innerHTML = `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.58333 8.55159H6V6.21826H5.41667M6 3.88493H6.00583M11.25 6.21826C11.25 6.9077 11.1142 7.59039 10.8504 8.22735C10.5865 8.86431 10.1998 9.44306 9.71231 9.93057C9.2248 10.4181 8.64605 10.8048 8.00909 11.0686C7.37213 11.3325 6.68944 11.4683 6 11.4683C5.31056 11.4683 4.62787 11.3325 3.99091 11.0686C3.35395 10.8048 2.7752 10.4181 2.28769 9.93057C1.80018 9.44306 1.41347 8.86431 1.14963 8.22735C0.885795 7.59039 0.75 6.9077 0.75 6.21826C0.75 4.82588 1.30312 3.49052 2.28769 2.50595C3.27226 1.52139 4.60761 0.968262 6 0.968262C7.39239 0.968262 8.72774 1.52139 9.71231 2.50595C10.6969 3.49052 11.25 4.82588 11.25 6.21826Z" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  Describe your case`;
  descriptionLabel.appendChild(labelName);
  descriptionCase.placeholder = "Tell us about your use case...";
  submitButton.textContent = "Submit";
  const rightArrowIcon = document.createElement("img");
  rightArrowIcon.src =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTMzOC43NTIgMTA0LjcwNGE2NCA2NCAwIDAgMCAwIDkwLjQ5NmwzMTYuOCAzMTYuOGwtMzE2LjggMzE2LjhhNjQgNjQgMCAwIDAgOTAuNDk2IDkwLjQ5NmwzNjIuMDQ4LTM2Mi4wNDhhNjQgNjQgMCAwIDAgMC05MC40OTZMNDI5LjI0OCAxMDQuNzA0YTY0IDY0IDAgMCAwLTkwLjQ5NiAwIi8+PC9zdmc+";
  submitButton.appendChild(rightArrowIcon);
  const mapGif = document.createElement("img");
  mapGif.src = map;
  MapContainer.appendChild(mapGif);
  emailLabel.appendChild(email);
  phoneNumberLabel.appendChild(phoneNumber);
  descriptionLabel.appendChild(descriptionCase);
  contactInfoContainer.appendChild(emailLabel);
  contactInfoContainer.appendChild(phoneNumberLabel);
  contactInfoContainer.appendChild(descriptionLabel);
  buttonContainer.appendChild(submitButton);
  form.appendChild(fullNameLocationContainer);
  form.appendChild(contactInfoContainer);
  form.appendChild(buttonContainer);
  formContainer.appendChild(form);
  mainContainer.appendChild(formContainer);
  mainContainer.appendChild(MapContainer);
  contactUs.appendChild(headerGrp);
  contactUs.appendChild(mainContainer);
  location.addEventListener("keyup", () => {
    let suggestionsList = [];
    suggestionsContainer.innerHTML = "";

    async function fetchSuggestions() {
      if (location.value.length < 3) {
        return;
      }

      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${location.value}&apiKey=0c7cc986354a41219043000c3e16e533`,
      );

      const suggestions = await response.json();

      suggestions.features.forEach((element) => {
        let suggestion = "";
        suggestion += element.properties.city
          ? element.properties.city + ", "
          : "";
        suggestion += element.properties.country
          ? element.properties.country
          : "";

        if (!suggestion.includes("undefined")) {
          const suggestionContent = document.createElement("div");
          suggestionContent.classList.add("suggestionBox");
          suggestionContent.textContent = suggestion;
          suggestionsContainer.appendChild(suggestionContent);
          suggestionsList.push(suggestion);
        }
      });
    }

    fetchSuggestions();
  });

  return contactUs;
};

export { contactUs };
