import React from "react";

function Footer() {

  const today = new Date();

  return (
    <div className="footer">      
        <p>
        © {today.getFullYear()} Dustin Evans. All rights reserved. test 
        </p>
    </div>
  );
}

export default Footer;
