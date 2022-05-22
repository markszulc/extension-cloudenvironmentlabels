var homeAnchor = document.getElementsByClassName("spectrum-Shell-logoLabel");
if (homeAnchor.length > 0) {
    setTimeout(function() { 
        homeAnchor[0].innerHTML = homeAnchor[0].innerHTML + "<coral-shell-homeanchor-label> - Lothal DEV P55117</coral-shell-homeanchor-label>";
        document.querySelector('title').textContent += "- LOTHAL";
    }, 3500);
}
