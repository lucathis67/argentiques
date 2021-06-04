
function main() {

	//automatic update of the copyright statement to the current year
	copyright();

	//allow the opening of individual images on a full screen display
	displayModal();

}

function copyright() {
	const thisDate = new Date();
	const thisYear = thisDate.getFullYear();
	const copyright = document.getElementById('copyright');
	let copyrightMessage = copyright.textContent;
	copyrightMessage += ` ${thisYear}`;
	copyright.textContent = copyrightMessage;
}

function displayModal() {

	const lightbox = GLightbox();
	lightbox.on('open', (target) => {
	    console.log('lightbox opened');
	});
	const lightboxDescription = GLightbox({
	    selector: '.glightbox2'
	});
	const lightboxVideo = GLightbox({
	    selector: '.glightbox3'
	});

}

main();

