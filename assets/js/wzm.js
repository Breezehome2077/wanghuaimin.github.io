//https://jekyllcodex.org/without-plugin/new-window-fix/
function external_new_window() {
    try {
        for(let c = document.getElementById('SingleContent').getElementsByTagName("a"), a = 0; a < c.length; a++) {
            const b = c[a];
            if(b.getAttribute("href") && b.hostname !== location.hostname) {
                b.target = "_blank";
                b.rel = "noopener";
            }
        }
    }
    catch(err) {

    }
}
external_new_window();