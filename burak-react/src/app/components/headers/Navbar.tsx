import { useLocation } from "react-router-dom";
import { NavbarHome } from "./NavbarHome";
import { NavbarOther } from "./NavbarOther";

export function Navbar() {
  const location = useLocation();
  return location.pathname === "/" ? <NavbarHome /> : <NavbarOther />;
}
