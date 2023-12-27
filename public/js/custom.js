
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });

  //bACK TO TOP
  var backtotop = document.getElementById('backtotop');

   window.addEventListener('scroll',() =>
   {
  
    if(window.pageYOffset > 500)
    {
        visible();
    }
    else
    {
        notvisible();
    }
   })
    


function visible()
{

    var backtotop = document.getElementById('backtotop');

    backtotop.setAttribute('class','backtotop active');
}

function notvisible()
{

    var backtotop = document.getElementById('backtotop');

    backtotop.setAttribute('class','backtotop');
}

notvisible()



//ANIMATIONS
document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector(".heroImg");
    var heroText = document.querySelector(".hero-text");
  
    //Hero image
    var heroObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          image.classList.add("image-reveal");
          //observer.unobserve(entry.target);
        }else{
            image.classList.remove("image-reveal");
        }
      });
    });
    heroObserver.observe(image);

    //Hero texts
    var heroTextObserver  = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
            heroText.classList.add("text-reveal");
            //observer.unobserve(entry.target);
            }else{
                heroText.classList.remove("text-reveal");
            }
        });
    });
    heroTextObserver .observe(heroText);
});


var sections = document.querySelectorAll('section');
var sectionObservers = [];
sections.forEach(function(section) {
  var sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  });

  sectionObservers.push(sectionObserver);
  sectionObserver.observe(section);
});

var textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
// Text elements
var textObservers = [];
textElements.forEach(function(element) {
  var textObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        element.classList.add("activeElem");
      } else {
        element.classList.remove("activeElem");
      }
    });
  });

  textObservers.push(textObserver);
  textObserver.observe(element);
});




  // Hide preloader when content is loaded
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.classList.add('loaded');
  });
  