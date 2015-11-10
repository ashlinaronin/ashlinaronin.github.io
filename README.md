greensock doesn't like animating percentage padding-bottom.
it works with pixel values...


/* line 26, ../sass/pages/_splash.scss */
div#projects #music-content, div#projects #video-content, div#projects #projects-content, div#music #music-content, div#music #video-content, div#music #projects-content, div#video #music-content, div#video #video-content, div#video #projects-content {
  display: none;
  width: 400px;
  height: 400px;
}

/* line 32, ../sass/pages/_splash.scss */
#projects, #music, #video {
  border: 1px solid black;
  /*width: 15%;
  padding-bottom: 15%;*/
  width: 150px;
  padding-bottom: 150px;
}
