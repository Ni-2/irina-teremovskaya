var scrollFloat = function () {
    'use strict';

    var app = {};

    app.init = function init (node) {
        if (!node || node.nodeType !== 1) {
            throw new Error(node + ' is not DOM element');
        }
        handleWindowScroll(node);
    };
	
	function handleWindowScroll (floatElement) {
        window.onscroll = function () {
            if (window.scrollY > floatElement.offsetTop) {
                floatElement.style.position = 'fixed';
                floatElement.style.top = '0';
            } else {
                floatElement.style.position = '';
                floatElement.style.top = '';
            }
        };
    }

    return app;
}();
