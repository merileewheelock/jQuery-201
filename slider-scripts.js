$(document).ready(function(){
	$('[data-toggle="popover"]').popover()


	function animate() {
        context.clearRect(0, 0, wWidth, wHeight);
        if (completion === 0 || completion >= 1) {
            return;
        }
        draw("#6bd6f1", "#f24b4b", 10);
    }

    function updateScroll() {
        scrollTop = window.pageYOffset;
        completion = (scrollTop - screen1Top) / (screen2Top + (screen2Height - wHeight) - screen1Top);
        completion = Math.max(0, Math.min(1, completion));
        animate();
    }

    function update(e) {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;
        triPerScreenX = Math.max(1, Math.round(wWidth / triWidth));
        triPerScreenY = Math.max(1, Math.round(wHeight / triHeight));
        realTriWidth = wWidth / triPerScreenX;
        realTriHeight = wHeight / triPerScreenY;
        canvas.width = wWidth;
        canvas.height = wHeight;
        canvas.style.width = wWidth + "px";
        canvas.style.height = wHeight + "px";
        transitionHeight = transitionWrapper.offsetHeight;
        transitionTop = transitionWrapper.getBoundingClientRect().top + document.body.scrollTop;
        screen1Height = screen1.offsetHeight;
        screen1Top = screen1.getBoundingClientRect().top + document.body.scrollTop;
        screen2Height = screen2.offsetHeight;
        screen2Top = screen2.getBoundingClientRect().top + document.body.scrollTop;
        updateScroll();
    }
})