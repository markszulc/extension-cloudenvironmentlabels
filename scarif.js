var homeAnchor = document.getElementsByClassName("spectrum-Shell-logoLabel");
if (homeAnchor.length > 0) {
    setTimeout(function() { 
        homeAnchor[0].innerHTML = homeAnchor[0].innerHTML + "<coral-shell-homeanchor-label> - Scarif DEV P47527</coral-shell-homeanchor-label>"
    }, 3500);
}
