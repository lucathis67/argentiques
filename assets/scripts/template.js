
function main() {

	//automatic update of the copyright statement to the current year
	copyright();

	//allow the opening of individual images on a full screen display
	displayImage();
}

function copyright() {
	let thisDate = new Date();
	let thisYear = thisDate.getFullYear();
	let copyright = document.getElementById('copyright');
	let copyrightMessage = copyright.textContent;
	copyrightMessage += ' ' + thisYear;
	copyright.textContent = copyrightMessage;
}

function getTarget(e) {
	if (!e) {
		e = window.e;
	}
	return e.target || e.srcElement;
}

function displayImage() {

	//creates the different element layers for the full screen views
	let overlay = document.createElement('div');
	overlay.setAttribute('id', 'overlay');
	let frame = document.createElement('div');
	frame.setAttribute('id', 'frame');
	overlay.appendChild(frame);
	let page = document.getElementsByTagName('body');
	page[0].appendChild(overlay);

	function featureImage(e) {

		document.getElementById('overlay').style.display = "block";
		let featureImage = document.createElement('img');
		featureImage.setAttribute('id', 'featured');
		featureImage.src = getTarget(e).src;
		frame.appendChild(featureImage);

		//deactivates the full screen view when clicking anywhere
		let overlayOff = function() {
			document.getElementById('overlay').onclick = function() {
				this.style.display = "none";
				let featureImage = document.getElementById('featured');
				frame.removeChild(featureImage);
			}
		}();
	}

	//activates the full screen view when clicking on an image
	let overlayOn = function() {
		let portfolio = document.getElementsByClassName('portfolio');
		for (let i = 0; i < portfolio.length; i++) {
			if (portfolio[i].addEventListener) {
				portfolio[i].addEventListener('click', function(e) {
					let target = getTarget(e);
					if (target.hasAttribute('src')) {
						featureImage(e);
					}
				}, false);
			}
			else {
				portfolio[i].attachEvent('click', function(e) {
					let target = getTarget(e);
					if (target.hasAttribute('src')) {
						featureImage(e);
					}
				});
			}
		}
	}();
}

main();

