if (document.readyState === "complete" || document.readyState === "interactive") {
    domReady()
} else {
    window.addEventListener("DOMContentLoaded", domReady)
}

function allReady()
{
  seeThru.create("#lifeOverlayVideo");

}
function domReady()
{    if (document.readyState === 'complete') {
        allReady()
    } else {
        document.onreadystatechange = function () {
            if (document.readyState === 'complete') {
                allReady()
            }
        }
    }

}