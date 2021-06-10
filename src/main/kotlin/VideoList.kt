import data.Video
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.p

@JsExport
external interface VideoListProps : RProps {
    var videos: List<Video>
    var selectedVideo: Video?
    var onSelectedVideo: (Video) -> Unit
}

@JsExport
class VideoList : RComponent<VideoListProps, RState>() {
    override fun RBuilder.render() {
        for (video in props.videos) {
            p {
                key = video.id.toString()
                attrs {
                    onClickFunction = {
                        props.onSelectedVideo(video)
                        println("Selected Video: ${video.title}")
                    }

                }
                if (video == props.selectedVideo){
                    println("video == props.video")
                    + "▶ "
                }
                + "${video.speaker}: ${video.videoUrl}"
            }
        }
    }
}

fun RBuilder.videoList(handler: VideoListProps.() -> Unit): ReactElement {
    return child(VideoList::class) {
        this.attrs(handler)
    }
}
