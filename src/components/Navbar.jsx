import React from "react";
function Navbar() {
    return (
    <div>
    <section id="sec1">               
        <nav className="navbar navbar-default">
          <div className="container-fluid">
           
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">PIZZAMANIA</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="index.html">Home<span className="sr-only">(current)</span></a></li>
                <li><a href="#about">About Pizza</a></li>
                <li><a href="#types">Pizza Types</a></li>
              </ul>
            </div>
          </div>
        </nav>
    </section>
 </div>
)
 }

export default Navbar;