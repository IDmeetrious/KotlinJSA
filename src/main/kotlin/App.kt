import data.Repository
import kotlinx.browser.document
import kotlinx.css.fontFamily
import react.*
import react.dom.h3
import react.dom.img
import styled.css
import styled.styledDiv
import styled.styledH1

class App : RComponent<RProps, AppState>() {
    private val repository = Repository()
    override fun RBuilder.render() {
        document.bgColor = "black"
        document.fgColor = "white"
        val rootDiv = document.getElementById("root")
        react.dom.render(rootDiv) {
            styledH1 {
                css {
                    fontFamily = "Arial"
                }
                +"Hello, React + Kotlin/JS!"
            }
            styledDiv {
                h3 {
                    +"Videos to watch"
                }
                videoList {
                    videos = repository.unwatchedVideos
                    selectedVideo = state.currentVideo
                    onSelectedVideo = { video ->
                        setState { currentVideo = video }
                    }
                }
                h3 {
                    +"Videos watched"
                }
                videoList {
                    videos = repository.watchedVideos
                    selectedVideo = state.currentVideo
                    onSelectedVideo = { video ->
                        setState { currentVideo = video }
                    }
                }
            }
            styledDiv {
                h3 {
                    +"John Doe: Building and breaking things"
                }
                img {
                    attrs {
                        src = "https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder"
                    }
                }
            }
        }
    }

    private fun RBuilder.videoList(handler: VideoListProps.() -> Unit): ReactElement {
        return child(VideoList::class) {
            this.attrs(handler)
        }
    }
}
