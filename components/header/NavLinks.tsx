import { navLinks } from "@/constants/navLinks";

interface NavegationLinksProps {
  disappear: string;
  flexDirection: string;
}
const NavLinks = ({ disappear, flexDirection }: NavegationLinksProps) => {
  return (
    // We use this prop when we want to hide the desktop menu
    <nav className={`${disappear}`}>
      <ul
        // we use this prop when we want to hide change the flex direction of the links
        className={`${flexDirection}`}
      >
        {navLinks.map((link) => (
          <li
            key={link.href}
            className="hover:text-purple-500 transition-all duration-200 font-medium"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
