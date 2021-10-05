import "fslightbox"
fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');


// //import _ from 'lodash';


// import {suma} from "./operaciones";
// import {saludo} from "./operaciones";
// import Swal from 'sweetalert2'


// document.write (`<h1>${suma(1, 2)}</h1`)
// document.write (`<h2>${saludo(1, 2)}</h2`)


// /*document.write (`<h2>${}</h2`) */
// console.log (suma (1, 2));
// console.log (saludo);

// Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool'
// })

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());