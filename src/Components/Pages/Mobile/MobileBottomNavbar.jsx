import React from 'react'
import { Link } from 'react-router-dom'

const MobileBottomNavbar = () => {
  return (
    <div>
         <nav class="navbar bootom-bar fixed-bottom navbar-light bg-light display-mob px-3">
        <div class="container-fluid justify-content-center text-center mx-3 ">
          <footer class="footer-wrap">
            <div class="footer">
              <div class="footer-item ">
                <Link to="/" class="footer-link bottom-buttons">
                  <i class="ri-home-7-line text-dark" aria-hidden="true"></i>
                </Link>
                <span className="text-dark text-xs">
                  <small>Home</small>
                </span>
              </div>
              <div class="footer-item">
                <Link to="/MobileIndustries" class="footer-link bottom-buttons">
                  <i class="ri-gallery-view-2 text-dark" aria-hidden="true"></i>
                </Link>
                <span className="text-dark text-xs">
                  <small>Industries</small>
                </span>
              </div>
              <div class="footer-item">
                <Link to="/MobileServices" class="footer-link bottom-buttons">
                  <i class="ri-logout-circle-r-line text-dark"></i>
                </Link>
                <span className="text-dark text-xs">
                  <small>Services</small>
                </span>
              </div>
              <div class="footer-item">
                <Link to="/MobileCareer" class="footer-link bottom-buttons">
                  <i class="ri-login-box-line text-dark" aria-hidden="true"></i>
                </Link>
                <span class="text-dark text-xs">
                  <small>Career</small>
                </span>
              </div>
              <div class="footer-item">
                <Link to="/MobileContactUs" class="footer-link bottom-buttons">
                  <i class="ri-group-line text-dark" aria-hidden="true"></i>
                </Link>
                <span class="text-dark text-xs">
                  <small>Contact</small>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </nav>
    </div>
  )
}

export default MobileBottomNavbar