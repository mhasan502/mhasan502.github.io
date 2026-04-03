import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { GoMail } from "react-icons/go";

export const socialLinks = [
  {
    id: "email",
    href: "mailto:mhasan502@gmail.com",
    icon: GoMail,
    hoverText: "mhasan502@gmail.com",
  },
  {
    id: "github",
    href: "https://github.com/mhasan502",
    icon: FaGithub,
    hoverText: "GitHub",
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/Mhasan502",
    icon: FaLinkedin,
    hoverText: "LinkedIn",
  },
  {
    id: "google-scholar",
    href: "https://scholar.google.com/citations?user=1E7N-BoAAAAJ",
    icon: SiGooglescholar,
    hoverText: "Google Scholar",
  },
  {
    id: "stack-overflow",
    href: "https://stackoverflow.com/users/14150890/mhasan502",
    icon: FaStackOverflow,
    hoverText: "Stack Overflow",
  },
];
