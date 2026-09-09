/*
 * Floating "back to top" button.
 * Appears after the visitor scrolls down; smooth-scrolls to the top on click.
 * No dependencies.
 */
(function () {
	'use strict';

	function init() {
		var btn = document.createElement('button');
		btn.id = 'backtotop';
		btn.type = 'button';
		btn.className = 'icon solid fa-arrow-up';
		btn.setAttribute('aria-label', 'Back to top');
		btn.innerHTML = '<span class="label">Back to top</span>';
		document.body.appendChild(btn);

		var shown = false;
		var threshold = 500;

		function onScroll() {
			var y = window.pageYOffset || document.documentElement.scrollTop;
			var should = y > threshold;
			if (should !== shown) {
				shown = should;
				btn.classList.toggle('is-visible', shown);
			}
		}

		btn.addEventListener('click', function () {
			var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
			btn.blur();
		});

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
