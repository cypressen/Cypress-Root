import Links from "./links";
import CypressLogo from "./secret-button";
const Header = () => {
  return (
    <div className="flex justify-between  px-[10vw] py-[3vh] items-center ">
      <div className="text-3xl font-semibold">
        <CypressLogo />
      </div>
      <Links />
    </div>
  );
};
export default Header;
