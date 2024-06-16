import { footer } from "./footer";
import { whyChooseUs } from "./whyChooseUs";
import { services } from "./services";
import { contactUs } from "./contactUs";
import { hero } from "./hero";
import "./styles.css";

document.body.appendChild(hero());
document.body.appendChild(whyChooseUs());
document.body.appendChild(services());
document.body.appendChild(contactUs());
document.body.appendChild(footer());
