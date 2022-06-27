/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function responsiveMenu() {
    var x = document.getElementById("nav-links");
    x.classList.toggle('active');
  }



  // Include Lightbox 
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#gallery--getting-started',

  // Elements within gallery (slides)
  children: 'a',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
  