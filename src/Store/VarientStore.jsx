import React from "react";

const VarientStore = React.createContext({
	pageTitleVariant: {
		initial: {
			x: "-2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.8,
			},
		},
	},

	leftSlideIn: {
		initial: {
			x: "-2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 1,
				delay: 0.6,
			},
		},
	},

	rightSlideIn: {
		initial: {
			x: "2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 1,
				delay: 0.6,
			},
		},
	},

	mobilePop: {
		initial: {
			scale: 0.95,
			opacity: 0,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.6,
				delay: 0.5,
			},
		},
	},

	// Experience

	imgPopExperience: {
		initial: {
			scale: 0.9,
			y: 5,
			opacity: 0,
		},
		animate: {
			scale: 1,
			y: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.6,
				delay: 0.6,
			},
		},
	},

	// Projects

	rotateBy45: {
		initial: {
			rotate: 0.5,
            opacity:0
		},
		animate: {
			rotate: -45,
            opacity:1,
			transition: {
				type: " tween",
				duration: 0.6,
			},
		},
        exit:{
            rotate: 0,
            opacity:0,
            transition: {
				type: " tween",
				duration: 0.5,
			},
        }
	},

	slideUp: {
		initial: {
			y: 50,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
		exit: {
			y: 50,
			opacity: 0,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
	},
});

export default VarientStore;
