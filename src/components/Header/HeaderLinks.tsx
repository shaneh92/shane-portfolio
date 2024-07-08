import HeaderLinkItem from "./HeaderLinkItem";

export default function HeaderLinks() {
  return (
    <>
      <HeaderLinkItem to="/home" title="Home" />
      <HeaderLinkItem to="/resume" title="Resume" />
      <HeaderLinkItem to="/projects" title="Projects" />
      <HeaderLinkItem to="/databases" title="Databases" />
      <HeaderLinkItem to="/about" title="About" />
    </>
  );
}
