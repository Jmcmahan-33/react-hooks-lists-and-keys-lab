import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkTitles  = links.map((link) => {
    <a key ={link} href = {"#" + link}>
      {link}
      
    </a>
  })
  return <nav>{linkTitles}</nav>
    
}

export default NavBar;


//problem: there is no a tag for each link
// provide a method that will apply the a tag to each link
  // us a map method to turn the array into react compenents 
  // return new react components