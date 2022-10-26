import React, { useState } from "react";
import Bars from "../components/Bars";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/Random.css";
import { useIsMobile } from "../hooks";

export default function Random() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    if (isMobile) {
      setClicked(!clicked);
    }
  };
  const isMobile = useIsMobile();
  return (
    <div className="body">
      <Bars />

      <main className="randomMain">
        <Navbar currTab={"random"} />

        <div className="content">
          <div className="holder">
            <h1>coming soon-ish...or later</h1>
            <p className="previewtext">* book reviews + art + more *</p>
          </div>

          <div className="random">
            <div>
              <img
                className="book"
                alt="book cover of 'The Age of Surveillance Capitalism' by Shoshana Zuboff"
                src="https://www.publicaffairsbooks.com/wp-content/uploads/2018/01/97816103957001.jpg?fit=484%2C750&w=640"
              ></img>
            </div>
            <div>
              <img
                className="book"
                alt="book cover of 'Race After Technology' by Ruha Benjamin"
                src="https://images.squarespace-cdn.com/content/v1/5bbd85f3809d8e6a1a3c5c9e/1539747351919-A8XPCT283K2SQZI80UCZ/Race+After+Tech_Cover.jpg"
              ></img>
            </div>
            <div>
              <img
                className="book"
                alt="book cover of  'Weapons of Math Destruction' by Cathy O'Neil"
                src="https://images-na.ssl-images-amazon.com/images/I/51eUw-v0X+L.jpg"
              ></img>
            </div>
            <div>
              <img
                className="book"
                alt="book cover of 'An Ugly Truth' by Sheera Frenkel and Ceilia Kang"
                src="https://images-na.ssl-images-amazon.com/images/I/91fam98oLRL.jpg"
              ></img>
            </div>
            <div
              className={`filler ${clicked ? "clicked" : ""}`}
              onClick={toggleClicked}
            >
              <p className="sneaktext">
                {isMobile ? "tap" : "hover"} for a sneak peek!
              </p>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
