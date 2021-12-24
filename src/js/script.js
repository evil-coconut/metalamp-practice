/*"use strict"

const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if(isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}
*/
import $ from "./jquery-3.6.0.min.js";

$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu,.menu__body').toggleClass('_active');
	});
});

$(document).ready(function() {
    $('.menu-dropdown').click(function(event) {
        $('.sub-menu__list,._icon-expand_more,.menu-dropdown').toggleClass('_touch');
    });
});

$(document).ready(function() {
    $('#input-guests').click(function(event) {
        $('.sub-menu_input-guests').toggleClass('_touch-input');
    });
});
