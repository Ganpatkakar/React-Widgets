import Navbar from "./Navbar";

const NavLinks = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" }
];

const Header = () => {
  return <Navbar list={NavLinks} />;
};

export default Header;
