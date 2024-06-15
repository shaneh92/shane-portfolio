import HeaderLinkItem from "./HeaderLinkItem";

export default function HeaderLinks() {
  return (
    <>
      <HeaderLinkItem to="/home" title="Home" />
      <HeaderLinkItem to="/resume" title="Resume" />
      <HeaderLinkItem disabled to="/projects" title="Projects" />
      <HeaderLinkItem disabled to="/databases" title="Databases" />
      <HeaderLinkItem disabled to="/about" title="About" />
    </>
  );
}
