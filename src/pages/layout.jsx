// Layout.jsx
import { Outlet } from "react-router";
import NavigationBar from "./navbar"; 
function Layout() {
  return (
    <>
        <NavigationBar /> 
      <main>
        <Outlet /> {/* Renders nested route components here */}
      </main>
    </>
  );
}

export default Layout;
