
function main() {

	//automatic update of the copyright statement to the current year
	copyright();

	//allow the opening of individual images on a full screen display
	//uses the Glightbox plugin
	GLightbox();

}

function copyright() {
	const thisDate = new Date();
	document.getElementById('copyright').textContent += ` ${thisDate.getFullYear()}`;
}

main();

