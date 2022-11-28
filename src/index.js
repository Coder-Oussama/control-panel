import './assets/sass/style.scss';
import "normalize.css/normalize.css";

console.log("Hello from webpack");

// (function () {
//   const closeBanner = document.querySelectorAll(".c-banner__close");
//   closeBanner.forEach((closeBanner) => {
//     closeBanner.addEventListener("click", (e) => {
//       const banner = e.target.parentNode;
//         banner.classList.add("collapse");
        
//         banner.addEventListener('transitionend', function (e) {
//             if (e.target === this) {
//                 this.remove()
//             }
//         })
//     });
//   });
// })();