import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-wrapper"> <footer>
      <p>Copyright ⓒ {year}</p>
    </footer></div>
   
  );
}

export default Footer;
