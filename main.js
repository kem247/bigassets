// let options = {
//   root: document.querySelector("target"),
//   rootMargin: "0px, 0px, 100px, 0px"
// };
// console.log(options);
for (let i = 1; i < 100; i++) {
  // let images = [...document.querySelectorAll(".images")];

  // const callback = entries => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       isI;
  //     }
  //   });
  // };

  // images.forEach(image => {
  //   observer.observe(image);
  //   }))

  fetch(`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
    .then(function(r) {
      return r.json();
    })
    .then(function(data) {
      document.getElementById("images").innerHTML += `
        <img class="target" src="${data.sprites.front_default}" alt="sprite">
      `;
    });
}
