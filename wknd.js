var homeAnchor = document.getElementsByClassName("spectrum-Shell-logoLabel");
if (homeAnchor.length > 0) {
    setTimeout(function() { 
        homeAnchor[0].innerHTML = homeAnchor[0].innerHTML + "<coral-shell-homeanchor-label> - WKND DEV P24704</coral-shell-homeanchor-label>"
    }, 3500);
}
