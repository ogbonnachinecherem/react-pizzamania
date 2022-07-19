import React from "react";
function AboutPizza({title}) {
    return (
        <div>
    <div class="container">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<h2 id="about">{title} PIZZA</h2>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<img src="images/p3.jpg" class="img-responsive ime" alt="pizzaimage"/>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<h2>Pizza Is Awesome</h2>
			<p>Trying out some git practiceLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
			
			
		</div>
	   </div>
     </div>
    </div>
    )
}
export default AboutPizza;