/* GLOBAL CONSTANTS AND VARIABLES */

/* assignment specific globals */
const WIN_Z = 0;  // default graphics window z coord in world space
const WIN_LEFT = 0; const WIN_RIGHT = 1;  // default left and right x coords in world space
const WIN_BOTTOM = 0; const WIN_TOP = 1;  // default top and bottom y coords in world space
const GRID = "grid.png";

/* webgl globals */
var gl = null; // the all powerful gl object. It's all here folks!

// ASSIGNMENT HELPER FUNCTIONS

// set up the webGL environment
function setupWebGL() {
  var imageCanvas = document.getElementById("myImageCanvas"); // create a 2d canvas
  var cw = imageCanvas.width, ch = imageCanvas.height; 
  imageContext = imageCanvas.getContext("2d"); 
  var bkgdImage = new Image(); 
  bkgdImage.crossOrigin = null;
  bkgdImage.src = GRID;
  bkgdImage.onload = function(){
    var iw = bkgdImage.width, ih = bkgdImage.height;
    imageContext.drawImage(bkgdImage,0,0,iw,ih,0,0,cw,ch);   
  }

  // Get the canvas and context
  var canvas = document.getElementById("myWebGLCanvas"); // create a js canvas
  gl = canvas.getContext("webgl"); // get a webgl object from it
  
  try {
    if (gl == null) {
      throw "unable to create gl context -- is your browser gl ready?";
    } else {
      gl.clearColor(0.0, 0.0, 0.0, 0.0); // use black when we clear the frame buffer
      gl.clearDepth(1.0); // use max when we clear the depth buffer
      gl.enable(gl.DEPTH_TEST); // use hidden surface removal (with zbuffering)
    }
  } // end try
  
  catch(e) {
    console.log(e);
  } // end catch
} // end setupWebGL

function render() {
  window.requestAnimationFrame(render); // set up frame render callback
    
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // clear frame/depth buffers
}

/* MAIN -- HERE is where execution begins after window load */

function main() {
  setupWebGL(); // set up the webGL environment
  render();
} // end main