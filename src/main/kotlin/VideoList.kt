
import data.Video
import kotlinx.browser.window
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.p

class VideoList : RComponent<VideoListProps, RState>() {
    override fun RBuilder.render() {
        for (video in props.videos) {
            p {
                key = video.id.toString()
                attrs {
                    onClickFunction = {
                        setState {
                            props.onSelectedVideo(video)
                        }
                        window.alert(video.title)
                    }
                }
                if (video == props.selectedVideo){
                    + "▶ "
                }
                + "${video.speaker}: ${video.videoUrl}"
            }
        }
    }


}
external interface VideoListProps: RProps{
    var videos: List<Video>
    var selectedVideo: Video?
    var onSelectedVideo: (Video) -> Unit

}
external interface AppState: RState{
    var currentVideo: Video?
}