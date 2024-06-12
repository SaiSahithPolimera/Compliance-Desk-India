import { footer } from "./footer";
import { whyChooseUs } from "./whyChooseUs";
import { services } from "./services";
import { updates } from "./updates";
import { contactUs } from "./contactUs";
import "./styles.css";

document.body.appendChild(whyChooseUs());
document.body.appendChild(services());
document.body.appendChild(contactUs());
document.body.appendChild(footer());
