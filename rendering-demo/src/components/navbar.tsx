import { Navlinks } from "./navlinks";
import { NavSearch } from "./navsearch";

export const Navbar = () => {
  console.log(`Navbar renbdered`);

  return (
    <div>
      <Navlinks />
      <NavSearch />
    </div>
  );
};
