import { Outlet } from "react-router-dom";
import Footer from "./sharedfile/Footer";
import Headers from "./sharedfile/Header";


const App = () => {
  

  return (
    <>
    <Headers/>
  
      <div className="min-h-[83.3vh]">
      <Outlet/>
      </div>
  <Footer/>
    </>
  );
};

export default App;
