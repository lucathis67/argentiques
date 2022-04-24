
function main() {

	//automatic update of the copyright statement to the current year
	copyright();

	//allow the opening of individual images on a full screen display
	//uses the Glightbox plugin
	GLightbox();

	// highlight link to current page in nav
	youAreHere();

}

function copyright() {
	const thisDate = new Date();
	document.getElementsByClassName('copyright')[0].textContent += ` ${thisDate.getFullYear()}`;
}

function youAreHere() {
	const thisPage = document.getElementsByTagName('title')[0].textContent.split(' | ')[0];
	for (const a of document.querySelectorAll(".navlinks a")) {
	  	if (a.textContent.includes(thisPage)) {
	    	console.log("CURRENT PAGE: " + a.textContent)
	    	a.setAttribute('class', 'active')
	  	} else if (a.hasAttribute('class', 'active')) {
	  		a.removeAttribute('class', 'active')
	  	}
	}
}

main();
