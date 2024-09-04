document.addEventListener('DOMContentLoaded', function () {
	// Custom styles for the mute/unmute button and related elements
	const css = `
      .center-con {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .roundedToggle {
        position: absolute;
        background: rgba(0, 0, 0, 0.75);
        width: 40px;
        height: 40px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        bottom: .5rem;
        right: .5rem;
      }
      
      .speaker {
        height: 30px;
        width: 30px;
        position: relative;
        overflow: hidden;
      }
      
      .speaker span {
        display: block;
        width: 7px;
        height: 7px;
        background: #fff;
        margin: 12px 0 0 1px;
      }
      
      .speaker span:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent #fff transparent transparent;
        border-width: 10px 12px 10px 15px;
        left: -13px;
        top: 5px;
      }
      
      .speaker span:before {
        transform: rotate(45deg);
        border-radius: 0 50px 0 0;
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border-style: double;
        border-color: #fff;
        border-width: 7px 7px 0 0;
        left: 18px;
        top: 9px;
        transition: all 0.2s ease-out;
      }
      
      .speaker.on .muteVid { opacity:1; transform: scale(1); }
      .speaker.on span:before { transform: scale(0.8) translate(-17px, 0) rotate(42deg); }
      
      .muteVid {
        position: absolute;
        width: 15px;
        height: 15px;
        opacity: 0;
        left: 15px;
        top: 7px;
        transform: scale(0.3);
        transition: all 0.2s ease-out;
      }
      
      .muteVid:before, .muteVid:after {
        position: absolute;
        margin-left: 7px;
        content: ' ';
        height: 15px;
        width: 2px;
        background-color: #7f7f7f;
      }
      
      .muteVid:before { transform: rotate(45deg); }
      .muteVid:after { transform: rotate(-45deg); }
    `;

	// Append the dynamic CSS to the document head
	const styleSheet = document.createElement('style');
	styleSheet.type = 'text/css';
	styleSheet.innerText = css;
	document.head.appendChild(styleSheet);

	// Get all video elements within '.media-with-text__media' containers
	var videoElements = document.querySelectorAll('.media-with-text__media');

	// Define mobile breakpoint for different behavior on smaller screens
	var mobileBreakpoint = 768;

	// Check if we're within the mobile screen size
	if (window.innerWidth <= mobileBreakpoint) {
		// Iterate over each video element to apply custom controls and behavior
		videoElements.forEach((videoElement, index) => {
			var videoMedia = videoElement.querySelector('video-media');
			var actualVideo = videoElement.querySelector('video');

			// If a video is found, modify its controls and behavior
			if (actualVideo) {
				actualVideo.controls = false; // Remove default controls
				actualVideo.loop = true; // Set video to loop
				actualVideo.muted = true; // Ensure video starts muted for autoplay compatibility
			}

			// Create and style the custom mute/unmute button (speaker icon)
			const centerConDiv = document.createElement('div');
			centerConDiv.className = 'center-con';

			const roundedToggleDiv = document.createElement('div');
			roundedToggleDiv.className = 'roundedToggle';

			const speakerDiv = document.createElement('div');
			speakerDiv.classList.add('speaker', 'on'); // 'on' class indicates the speaker is active

			const muteVidDiv = document.createElement('div');
			muteVidDiv.id = 'muteVid';
			muteVidDiv.className = 'muteVid';

			const span = document.createElement('span');

			// Append the speaker elements together
			speakerDiv.appendChild(muteVidDiv);
			speakerDiv.appendChild(span);
			roundedToggleDiv.appendChild(speakerDiv);
			centerConDiv.appendChild(roundedToggleDiv);

			// Append the custom controls to the video element
			if (videoMedia) {
				videoMedia.appendChild(centerConDiv);
			}

			// Add a click event listener to toggle mute/unmute
			videoElement.addEventListener('click', function () {
				var video = this.querySelector('video');
				var speaker = this.querySelector('.speaker');

				if (video) {
					video.muted = !video.muted; // Toggle the mute state
					speaker.classList.toggle('on'); // Toggle the visual state of the speaker icon
				}
			});
		});

		// Set up Intersection Observer to mute videos when out of view
		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach((entry) => {
					var video = entry.target;
					var speaker = entry.target
						.closest('.media-with-text__media')
						.querySelector('.speaker');

					// Mute the video if it's out of view
					if (!entry.isIntersecting) {
						video.muted = true;
						speaker.classList.add('on'); // Reflect the muted state visually
					} else {
						video.muted = true; // Keep the video muted for autoplay compatibility
						video.play(); // Ensure the video plays when in view
						speaker.classList.add('on'); // Show the mute icon visually
					}
				});
			},
			{
				threshold: 0.5, // Trigger at 50% visibility
			}
		);

		// Apply the observer to each video element
		videoElements.forEach(function (mediaElement) {
			var video = mediaElement.querySelector('video');
			if (video) {
				observer.observe(video); // Start observing for visibility changes
			}
		});
	}
});
