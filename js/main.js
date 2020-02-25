(function(){
  document.addEventListener('DOMContentLoaded', init, false);

  var creative = {};
  var timer = {};

  function init () {
      creative.banner                         = document.getElementById("banner");
      creative.click_tag                      = document.getElementById("click_tag");
      creative.totalDivs                      = creative.banner.querySelectorAll("*");
      creative.allDivs                        = creative.banner.children;
      creative.tl                             = new TimelineMax();
      creative.preload_counter                = 0;

      creative.width                          = document.getElementById('banner').offsetWidth;
      creative.height                         = document.getElementById('banner').offsetHeight;
      
      timer.banner_startTimer;
      timer.banner_start                      = Date.now();
      timer.banner_end                        = timer.banner_start + 15000;

      creative.phone_img_count                = 11;

      // Start Timer
      // timer.banner_startTimer = setInterval(bannerTime, 100);

      addListeners();
      elements_off();
  }

  function elements_off () {
      // elements opacity off
      for (i = 0; i < creative.allDivs.length; i++) {TweenMax.set(creative.allDivs[i], {opacity:0}); }
      add_preload_class();
  }

  function add_preload_class () {
      //add class for image loader
      addClass(creative.totalDivs, 'load_images');
      imagesLoaded( '#banner', {
        background: '.load_images'
      }, function( imgLoad ) {
        console.log(imgLoad.images.length + "images loaded checking .load_images backgrounds")
        intro_init();
      });        
  }

  function intro_init() {
    TweenMax.set(".bells", {autoAlpha:0});
    TweenMax.to([creative.banner, border], 0.2, {opacity:1});
    TweenMax.set([bg, magentaBg], {opacity:1});
    TweenMax.delayedCall(0.2, introIn);
  }

  function introIn () {
    TweenMax.set([
        t_logo_container,
        bell_container,
        gradient_bg,
    ], {autoAlpha:1, opacity:1});

    var intro_tl = new TimelineMax();

    TweenMax.set([bell_container], {top:"-75px"});
    TweenMax.to([bell_container], 5, {scale:1.1});
    TweenMax.fromTo([bell_container], 3, {y:100}, {y:75});
    TweenMax.to(".bell", 7, {rotation:5});

    intro_tl.staggerFrom([bell_8, bell_9],  0.5, {y:500, rotation:47, ease:Power2.easeOut}, 0.01, "in");
    intro_tl.staggerFrom([bell_0, bell_1, bell_2, bell_6],  0.75, {y:300, rotation:47, ease:Power2.easeOut}, 0.01, "in");
    intro_tl.staggerFrom([bell_5, bell_3, bell_4, bell_7],  0.65, {y:550, rotation:47, ease:Power2.easeOut}, 0.01, "in");
    intro_tl.from([t_logo_container],  0.5, {opacity:0}, "-=0.3");

    TweenMax.delayedCall(3.25, introOut);
  }

  function introOut () {
    TweenMax.to([bell_8, bell_9],  0.5, {opacity:0});
    TweenMax.to([bell_0, bell_1, bell_2, bell_3, bell_4, bell_5, bell_6, bell_7], 0.5, {rotation:1});
    TweenMax.to([bell_container], 1, {x:-300, ease:Power2.easeIn});
    TweenMax.staggerTo([bell_0, bell_1, bell_2, bell_6],  0.5, {x:-400, ease:Power2.easeIn}, -0.01), "out";
    TweenMax.to([t_logo_container],  0.5, {x:-400, ease:Power2.easeIn}, "out");
    TweenMax.staggerTo([bell_5, bell_3, bell_4, bell_7],  0.5, {x:-400, ease:Power2.easeIn}, -0.01), "out";
    
    TweenMax.delayedCall(0.25, frameTwoBells);
  }

  function frameTwoBells (){
    TweenMax.set([
      bell_container_F2,
    ], {autoAlpha:1, opacity:1});

    var bellsF2_tl = new TimelineMax({});

    TweenMax.fromTo([bell_container_F2], 8, {x:15}, {x:0});
    TweenMax.to([bell_container_F2], 8, {scale:1.05});
    TweenMax.to([bellF2_0, bellF2_1, bellF2_2, bellF2_3], 12, {rotation:2});

    bellsF2_tl.staggerFrom([bellF2_2, bellF2_3],  0.75, {x:350, rotation:45, ease:Power2.easeOut}, 0.01, "in");
    bellsF2_tl.staggerFrom([bellF2_0, bellF2_1],  0.95, {x:290, rotation:45, ease:Power2.easeOut}, 0.01, "in");
    TweenMax.delayedCall(0.15, frameTwo);
  }

  function frameTwo() {
    TweenMax.set([textGradient2_2], {x:-800});
    TweenMax.set([
      text2_1,
      text2_2,
      logo2_1,
    ], {opacity:1});

    var tl = new TimelineMax({});
    tl.from([text2_1],  0.5, {x:100, opacity:0, ease:Power2.easeOut},"product");
    tl.to([textGradient2_2], 0.65, {x:0, ease:Power2.easeIn}, "-=0.3");
    
    var frameDelay = 2.75;
    TweenMax.to([text2_1, text2_2, textGradient2_2], 0.5, {
      delay: frameDelay - 0.3,
      x: -300,
      ease: Power2.easeIn,
        onComplete: function () {
          TweenMax.set([textGradient2_2], {
            autoAlpha: 0
          });
        }
    });
    TweenMax.delayedCall(frameDelay+0.2, frameThree);
  }

  function frameThree() {
    TweenMax.set([textGradient3_2], {x:-800});
    TweenMax.set([
      text3_1,
      text3_2
    ], {opacity:1});

    var tl = new TimelineMax();
    tl.from([text3_1],  0.5, {x:100, opacity:0, ease:Power2.easeOut},"product");
    tl.to([textGradient3_2], 0.65, {x:0, ease:Power2.easeIn}, "-=0.3");

    var frameDelay = 2.75;
    TweenMax.to([text3_1, text3_2, textGradient3_2], 0.5, {
      delay: frameDelay - 0.35,
      x: -350,
      ease: Power2.easeIn,
      autoAlpha: 0,
        onComplete: function () {
          TweenMax.set([textGradient3_2], {
            autoAlpha: 0
          });
        }
    });
    TweenMax.to([bellF2_2, bellF2_3],  0.5, {delay:frameDelay-0.35, x:-350, ease:Power2.easeIn});
    TweenMax.to([bellF2_0, bellF2_1],  0.5, {delay:frameDelay-0.3, x:-310, ease:Power2.easeIn});
    TweenMax.set([logo2_1], {delay:frameDelay+0.3, opacity:0});
    TweenMax.set([logo4_1], {delay:frameDelay+0.3, opacity:1});
    TweenMax.delayedCall(frameDelay+0.35, frameFour);
  }

  function frameFour() {
    TweenMax.set([
      bell_container_F4,
      ".phones",
      phoneLogos4_1,
      text4_1,
      text4_2,
      text4_3
    ], {autoAlpha:1, opacity:1, force3D: false, rotation: 0.01});

    var tl = new TimelineMax();
    TweenMax.fromTo([bell_container_F4], 5, {x:10}, {x:0});
    TweenMax.to([bellF4_0, bellF4_1], 5, {rotation:5});

    tl.staggerFrom([bellF4_1],  0.5, {x:350, rotation:45, ease:Power2.easeOut}, 0.01, "in");
    tl.staggerFrom([bellF4_0],  0.85, {x:300, rotation:45, ease:Power2.easeOut}, 0.01, "in");
    tl.from([text4_1, text4_2, text4_3],  0.5, {x:300, ease:Power2.easeOut}, "in");
    tl.from([phone4_1],  0.5, {x:300, ease:Power2.easeOut}, "in");
    tl.from([phone4_2], .4, {x: -25, opacity: 0, ease: Power2.easeOut}, "-=.1")
    tl.from([phone4_3], .4, {x: -55, opacity: 0, ease: Power2.easeOut}, "-=.4")
    tl.from([phone4_4], .4, {x: -75, opacity: 0, ease: Power2.easeOut}, "-=.4")
    tl.from([phoneLogos4_1], .3, {opacity: 0}, "-=.2")
    tl.to([text4_1], 0.3, {scale:1.08, transformOrigin:"85px 84px", ease:Back.easeOut}, "+=0.1");
    tl.to([text4_1], 0.2, {scale:1, transformOrigin:"85px 84px", ease:Back.easeOut});

    var frameDelay = 2.1;
    TweenMax.delayedCall(frameDelay, ctaAnimation);
  }

  function ctaAnimation () {
      TweenMax.set([cta4_1, legal4_1], {opacity:1});

      TweenMax.from([cta4_1],  0.4, {rotationX:90, transformOrigin:"0px 208px", perspective:400});
      TweenMax.from([legal4_1],  0.25, {opacity:0});      

      // Legal
      // creative.legal_overMouse = document.getElementById("legal_hover")
      // creative.legal_overIt = document.getElementById("legal_over")
      // creative.legal_overMouse.addEventListener("mouseover", legal_in); 
  }

  function legal_in () {
      TweenMax.set([legal_over], {opacity:1, y:0});
      TweenMax.from([legal_over],  0.2, {opacity:0, y:creative.height});
      
      creative.legal_overMouse.addEventListener("mouseout", legal_out); 
      creative.legal_overMouse.addEventListener("click", legalStay);
  }

  function legalStay () {
      TweenMax.set([legal_over], {opacity:1, pointerEvents:"auto"});
      
      addClass("#legal_hover", "clicked");

      if(hasClass(creative.legal_overMouse, "clicked")){
          creative.legal_overMouse.removeEventListener("mouseout", legal_out);
          creative.legal_overMouse.removeEventListener("mouseover", legal_in); 
      }

      creative.legal_overIt.addEventListener("click", legal_out);         
  }

  function legal_out () {
      TweenMax.set([legal_over], {pointerEvents:"none"});
      TweenMax.to([legal_over],  0.2, {opacity:0, y:creative.height});
      
      removeClass(creative.legal_overMouse, "clicked")
      creative.legal_overIt.removeEventListener("click", legal_out);
      creative.legal_overMouse.addEventListener("mouseover", legal_in);
      creative.legal_overMouse.addEventListener("mouseout", legal_out);
  }

  function addListeners () {
      creative.click_tag.addEventListener('click', bgExitHandler, false);
  }

  function bgExitHandler () {
      Enabler.exit('Background Exit');
  }

  /*--------------- Snippets --------------------*/

      function bannerTime (){
          timer.banner_start = Date.now();

          if(timer.banner_start > timer.banner_end){
              clearInterval(timer.banner_startTimer);
              // TweenMax.killAll();
              console.log('Banner time = 15 seconds');
          }
      }
      
      function Random (max) {
          return Math.random()*max;
      }

      function random (min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function hasClass(el, className) {
        if (el.classList)
          return el.classList.contains(className)
        else
          return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
      }

      function addClass(elements, myClass) {

        // if there are no elements, we're done
        if (!elements) { return; }

        // if we have a selector, get the chosen elements
        if (typeof(elements) === 'string') {
          elements = document.querySelectorAll(elements);
        }

        // if we have a single DOM element, make it an array to simplify behavior
        else if (elements.tagName) { elements=[elements]; }

        // add class to all chosen elements
        for (var i=0; i<elements.length; i++) {

          // if class is not already found
          if ( (' '+elements[i].className + ' ').indexOf(' '+myClass+' ') < 0 ) {

            // add class
            elements[i].className += ' ' + myClass;
          }
        }
      }

      function removeClass(el, className) {
        if (el.classList)
          el.classList.remove(className)
        else if (hasClass(el, className)) {
          var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
          el.className=el.className.replace(reg, ' ')
        }
      }

      // function replay_banner (){
      //     TweenMax.killAll();
      //     for (i = 0; i < creative.allDivs.length; i++) {
      //         TweenMax.set(creative.allDivs[i], {
      //             x:0,
      //             y:0,
      //             rotation:0,
      //             scale:1,
      //         });
      //     }               
      // } 
  /*--------------- Snippets ^ --------------------*/

  /*--------------- GSAP Snippets --------------------*/

      // Bump
      // TweenMax.from([],  0.3, {scale:0, transformOrigin:"0px 0px", ease:Back.easeOut});    

      //Clip Mask
      // TweenMax.set(element, {clip:"rect(0px, 300px, 0px, 0px);"}); 
      // TweenMax.to(element, 0, {clip:"rect(0px, 300px, 188px, 0px);"});

      // Gsap Css Value
      // console.log(element._gsTransform.scaleX);

      // GLOW-----
      // var glowTimeline = new TimelineMax ({
      //   delay: 2.25
      // });

      // glowTimeline.from([glow],  0.5, {opacity:0});
      // glowTimeline.to([glow],  0.5, {delay:0.2, opacity:0});

  /*--------------- GSAP Snippets ^ --------------------*/

})();
