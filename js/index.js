const html = document.documentElement;
$(document).ready(function () {
    
    let experience = document.getElementById("experience");
    experience.scrollLeft = 1
    var scroller = {};
    scroller.e = document.getElementById("experience");

    if (scroller.e.addEventListener) {
        scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
        scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    } else 
        scroller.e.attachEvent("onmousewheel", MouseWheelHandler);
});

function MouseWheelHandler(e) {
    let experience = document.getElementById("experience");
    let projects = document.getElementById("projects");
    //experience has reached top & exprience right has not reached yet -> activate horizontal scrolling
    // console.log(window.pageYOffset,window.innerHeight+50, " and ",experience.scrollLeft, experience.clientWidth, experience.scrollWidth)
    if(window.pageYOffset > window.innerHeight+50 && (experience.scrollLeft+experience.clientWidth <= experience.scrollWidth) && experience.scrollLeft > 0){
        var e = window.event || e;
        var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));
    
        var pst = experience.scrollLeft + delta;

        if (pst < 0) {
            // console.log("GOING RIGHT")
            pst = 0;
        } else if (pst > experience.scrollWidth) {
            // console.log("GOING LEFT")
            pst = experience.scrollWidth;
        }
        // console.log(pst)
        experience.scrollLeft = pst;
        e.preventDefault()
        return false;
    }

    if(window.pageYOffset < window.innerHeight+50){
        projects.style.display = "none";
        experience.scrollLeft = 1
    }
}