(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinJSApp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJSApp'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJSApp'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'KotlinJSApp'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJSApp'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'KotlinJSApp'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJSApp'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'KotlinJSApp'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJSApp'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'KotlinJSApp'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJSApp'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'KotlinJSApp'.");
    }root.KotlinJSApp = factory(typeof KotlinJSApp === 'undefined' ? {} : KotlinJSApp, kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var set_fontFamily = $module$kotlin_css.kotlinx.css.set_fontFamily_krvuuu$;
  var Unit = Kotlin.kotlin.Unit;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var getKClass = Kotlin.getKClass;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var H1_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var equals = Kotlin.equals;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function styledH1$lambda(it) {
    return new H1_init(html.emptyMap, it);
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function App() {
    RComponent_init(this);
    this.repository_0 = new Repository();
  }
  function App$render$lambda$lambda$lambda$lambda$lambda(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda$lambda(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.repository_0.unwatchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectedVideo = App$render$lambda$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_0(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda$lambda_0(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.repository_0.watchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectedVideo = App$render$lambda$lambda$lambda$lambda_0(this$App);
      return Unit;
    };
  }
  function App$render$lambda(this$App) {
    return function ($receiver) {
      var $receiver_0 = new StyledDOMBuilder_init(styledH1$lambda);
      set_fontFamily($receiver_0.css, 'Arial');
      $receiver_0.unaryPlus_pdl1vz$('Hello, React + Kotlin/JS!');
      $receiver.child_52psg1$($receiver_0.create());
      var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda);
      var this$App_0 = this$App;
      var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_1.unaryPlus_pdl1vz$('Videos to watch');
      $receiver_0_0.child_52psg1$($receiver_0_1.create());
      this$App_0.videoList_0($receiver_0_0, App$render$lambda$lambda$lambda(this$App_0));
      var $receiver_0_2 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_2.unaryPlus_pdl1vz$('Videos watched');
      $receiver_0_0.child_52psg1$($receiver_0_2.create());
      this$App_0.videoList_0($receiver_0_0, App$render$lambda$lambda$lambda_0(this$App_0));
      $receiver.child_52psg1$($receiver_0_0.create());
      var $receiver_0_3 = new StyledDOMBuilder_init(styledDiv$lambda);
      var $receiver_0_4 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_4.unaryPlus_pdl1vz$('John Doe: Building and breaking things');
      $receiver_0_3.child_52psg1$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(img$lambda(null, null, null));
      $receiver_0_5.attrs.src = 'https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder';
      $receiver_0_3.child_52psg1$($receiver_0_5.create());
      $receiver.child_52psg1$($receiver_0_3.create());
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    document.bgColor = 'black';
    document.fgColor = 'white';
    var rootDiv = document.getElementById('root');
    render(rootDiv, void 0, App$render$lambda(this));
  };
  function App$videoList$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  App.prototype.videoList_0 = function ($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoList), App$videoList$lambda(handler));
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function VideoList() {
    RComponent_init(this);
  }
  function VideoList$render$lambda$lambda$lambda$lambda(this$VideoList, closure$video) {
    return function ($receiver) {
      this$VideoList.props.onSelectedVideo(closure$video);
      return Unit;
    };
  }
  function VideoList$render$lambda$lambda$lambda(this$VideoList, closure$video) {
    return function (it) {
      setState(this$VideoList, VideoList$render$lambda$lambda$lambda$lambda(this$VideoList, closure$video));
      window.alert(closure$video.title);
      return Unit;
    };
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0.key = video.id.toString();
      set_onClickFunction($receiver_0.attrs, VideoList$render$lambda$lambda$lambda(this, video));
      if (equals(video, this.props.selectedVideo)) {
        $receiver_0.unaryPlus_pdl1vz$('\u25B6 ');
      }$receiver_0.unaryPlus_pdl1vz$(video.speaker + ': ' + video.videoUrl);
      $receiver.child_52psg1$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoList',
    interfaces: [RComponent]
  };
  function Repository() {
    this.unwatchedVideos = listOf([new Video(1, 'Building and breaking things', 'John Doe', 'https://youtu.be/PsaFVLr8t4E'), new Video(2, 'The development process', 'Jane Smith', 'https://youtu.be/PsaFVLr8t4E'), new Video(3, 'The Web 7.0', 'Matt Miller', 'https://youtu.be/PsaFVLr8t4E')]);
    this.watchedVideos = listOf_0(new Video(4, 'Mouseless development', 'Tom Jerry', 'https://youtu.be/PsaFVLr8t4E'));
  }
  Repository.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Repository',
    interfaces: []
  };
  function Video(id, title, speaker, videoUrl) {
    this.id = id;
    this.title = title;
    this.speaker = speaker;
    this.videoUrl = videoUrl;
  }
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.id;
  };
  Video.prototype.component2 = function () {
    return this.title;
  };
  Video.prototype.component3 = function () {
    return this.speaker;
  };
  Video.prototype.component4 = function () {
    return this.videoUrl;
  };
  Video.prototype.copy_cgs6fs$ = function (id, title, speaker, videoUrl) {
    return new Video(id === void 0 ? this.id : id, title === void 0 ? this.title : title, speaker === void 0 ? this.speaker : speaker, videoUrl === void 0 ? this.videoUrl : videoUrl);
  };
  Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', speaker=' + Kotlin.toString(this.speaker)) + (', videoUrl=' + Kotlin.toString(this.videoUrl)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.videoUrl, other.videoUrl)))));
  };
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.App = App;
  _.VideoList = VideoList;
  var package$data = _.data || (_.data = {});
  package$data.Repository = Repository;
  package$data.Video = Video;
  _.main = main;
  main();
  Kotlin.defineModule('KotlinJSApp', _);
  return _;
}));

//# sourceMappingURL=KotlinJSApp.js.map
