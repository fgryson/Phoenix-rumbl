// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"
import "phoenix_html"
import Player from "./player"

let video = document.getElementById("video")

if(video) {
    Player.init(video.id, video.getAttribute("data-player-id"), () => {
        console.log("player ready!")
    })
}
