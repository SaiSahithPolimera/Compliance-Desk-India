import { footer } from "./footer";
import { whyChooseUs } from "./whyChooseUs";
import { services } from "./services";
import { contactUs } from "./contactUs";
// <<<<<<< main
import { hero } from "./hero";
=======
import { testimonials } from "./testimonals";
// >>>>>>> main
import "./styles.css";

document.body.appendChild(hero());
document.body.appendChild(whyChooseUs());
document.body.appendChild(services());
document.body.appendChild(testimonials());
document.body.appendChild(contactUs());
document.body.appendChild(footer());

