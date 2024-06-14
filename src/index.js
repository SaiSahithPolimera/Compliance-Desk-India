import { footer } from "./footer";
import { whyChooseUs } from "./whyChooseUs";
import { services } from "./services";
import { contactUs } from "./contactUs";
import { testimonials } from "./testimonals";
import "./styles.css";

document.body.appendChild(whyChooseUs());
document.body.appendChild(services());
document.body.appendChild(testimonials());
document.body.appendChild(contactUs());
document.body.appendChild(footer());

