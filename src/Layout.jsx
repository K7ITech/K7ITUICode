import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MobileBottomNavbar from "./Components/Pages/Mobile/MobileBottomNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="g-sidenav-show ">
        <main className="main-content position-relative border-radius-lg ps ps--active-y ">
          <div>
            <Navbar />
            <div className="py-4">{children}</div>
            <footer className="footer pt-5 ">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-12 mb-lg-0 mb-2">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    <Footer />
                  </div>
                  <MobileBottomNavbar/>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
