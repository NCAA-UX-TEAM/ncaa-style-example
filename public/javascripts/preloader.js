// var preload = document.createElement('div');
// preload.setAttribute("id", "preloader")
// // var preloader = document.getElementById('preloader');
// ps = preload.style;
//
// ps.position = "absolute";
// ps.background = "#000";
// ps.top = 0;
// ps.bottom = 0;
// ps.right = 0;
// ps.left = 0;
// ps.zIndex = 100;
// preloader = preload;
// document.appendChild(preload);
//
// console.log(preload);
// TweenMax.to(preloader, 1, {background: "#fff", opacity: .5});
window.onload = function(){
  console.log(ldr);
  function Loader(name, callback){
    this.name = name;
    this.callback = callback;
    this.animation = function(){
      console.log('hit');
    }
  }

  var Preloader = new Loader("OurPreloader", false);


  Preloader.animation();
  var plr = document.getElementById('preloader');
  Preloader.loader = function(){
      if (ldr == true) {
        TweenMax.to(plr, 2.5,{'opacity': 0, delay: 1, display: 'none'});
        console.log('page has loaded');
      }else if(ldr == false){
        alert('page didn\'t errored');
      }else{
        alert('default error');
      }
  }
  Preloader.loader();
}

// while(document.readyState !== "complete"){
//     Preloader.preloader();
// }
// switch (document.readyState) {
//   case "loading":
//     Preloader.preloader();
//     console.log('hiterino');
//   case "interactive":
//     // The document has finished loading. We can now access the DOM elements.
//     console.log('interactive');
//   case "complete":
//     // The page is fully loaded.
//     // console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
//     console.log('we loaded');
//     break;
// }
