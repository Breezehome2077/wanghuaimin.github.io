//文章内部超链接新页面打开
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
    catch(err) {}
}
external_new_window();

window.onload = function move_canvas() {
    const button = document.getElementById("siteNavigationToggleBtn");
    button.addEventListener("click", moveCanvas);
    function moveCanvas() {
        const abc = document.getElementById('siteBusiness').classList.contains('canvas-active');
        if (abc) {
            document.getElementById('siteBusiness').classList.remove('canvas-active');
            document.getElementById('siteNavigation').classList.remove('canvas-active');
        }else {
            document.getElementById('siteBusiness').classList.add('canvas-active');
            document.getElementById('siteNavigation').classList.add('canvas-active');
        }
    }
}