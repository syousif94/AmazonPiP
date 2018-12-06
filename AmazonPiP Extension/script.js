//document.addEventListener("DOMContentLoaded", onPage);

new MutationObserver(onPage).observe(document, {subtree: true, childList: true})

function onPage() {
    if (isAmazon() && getVideoPlayer() && noPipButton()) {
        
        const style = document.createElement("style");
        style.type = "text/css";
        
        const styleText =
        "#pipButton { opacity: 0; position: fixed; height: 20px; width: 40px; top: 5px; right: 5px; z-index: 99999; transition: opacity 0.25s linear; } #pipButton:hover { opacity: 1; }";
        
        style.appendChild(document.createTextNode(styleText));
        document.getElementsByTagName("head")[0].appendChild(style);
        
        const button = document.createElement("button")
        const text = document.createTextNode("PiP")
        button.appendChild(text)
        
        button.id = "pipButton"
        
        button.onclick = enterPiP
        
        document.body.appendChild(button)
    }
    else if (!noPipButton() && noVideoPlayer()) {
        const button = document.getElementById("pipButton")
        document.body.removeChild(button)
    }
}

function noPipButton() {
    return !document.getElementById("pipButton")
}

function isAmazon() {
    const matches = location.href.match("https://www.amazon.com")
    return matches && matches.length > 0
}

function noVideoPlayer() {
    return document.getElementsByTagName("video").length < 2
}

function getVideoPlayer() {
    return document.getElementsByTagName("video")[1]
}

function enterPiP() {
    const videoPlayer = getVideoPlayer()
    if (videoPlayer) {
        videoPlayer.webkitSetPresentationMode('picture-in-picture')
    }
}
