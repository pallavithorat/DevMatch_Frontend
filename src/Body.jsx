import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> 
      <Footer />
    </div>
  );
};
export default Body;


// <Outlet /> // Any childern routes of body will render over here
//bcoz of outlet i don't have to write NavBar again and again , i have just added navbar on the top and all other components will render below that.
//means NavBar will stay consistant throughout the appl , and all the other code which i write will come below the navbar