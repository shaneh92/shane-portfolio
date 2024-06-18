import MenuLinkItem from "./MenuLinkItem";

export function MenuItems() {
  return (
    <>
      <MenuLinkItem to="/home" title="Home" />

      <MenuLinkItem to="/resume" title="Resume" />

      <MenuLinkItem disabled to="/projects" title="Projects" />

      <MenuLinkItem disabled to="/databases" title="Databases" />

      <MenuLinkItem disabled to="/about" title="About" />
    </>
  );
}
