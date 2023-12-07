import { Outlet,Route,Routes } from "react-router-dom";
import Biography from "./Biography";
import Painting from "./Painting";
import PaintingsCollection from "./PaintingsCollection";

function Layout() {
    return (
      <div>
        <Routes>
            <Route exact path="/" element={(<p>Home page!</p>)}></Route>
            <Route  path="/biography" element={<Biography/>}></Route>
            <Route exact path="/painting" element={<Painting/>}></Route>
            <Route exact path="/paintingsCollection" element={<PaintingsCollection/>}></Route>
        </Routes>

        <Outlet/>
      </div>
    );
  }
  
  export default Layout;