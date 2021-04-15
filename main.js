let crew_db = [
  {
    name: 'Bill Mahoney',
    role: 'Product owner',
    img_src: './assets/photo1.png'
  },
  {
    name: 'Saba Cabrera',
    role: 'Art director',
    img_src: './assets/photo2.png'
  },
  {
    name: 'Shae Le',
    role: 'Tech Lead',
    img_src: './assets/photo3.png'
  },
  {
    name: 'Skylah Li',
    role: 'UX DESIGNER',
    img_src: './assets/photo4.png'
  },
  {
    name: 'Griff Richards',
    role: 'DEVELOPER',
    img_src: './assets/photo5.png'
  },
  {
    name: 'Stan John',
    role: 'DEVELOPER',
    img_src: './assets/photo6.png'
  }
]

//  return boolean |  true = mobile   /  false = desktop
var mediaqueryList = window.matchMedia("(max-width: 1220px)");
let crew_container = document.getElementById("crew-container");

function renderCrew(mobileView) {
  for (let i = 0; i < crew_db.length; i++) {
    let crew = document.createElement("div");
    if (mobileView) {
      if (i % 2 != 0) {
        crew.className = "crew not-aling";
      } else {
        crew.className = "crew";
      }
    } else {
      if (i === 1 || i === 4) {
        crew.className = "crew not-aling";
      } else {
        crew.className = "crew";
      }
    }
    crew.innerHTML = `
    <div>
      <img src= "${crew_db[i].img_src}">
      <h2>${crew_db[i].name}</h2>
    </div>
    <h4>${crew_db[i].role}</h4>
    `;
    crew_container.append(crew);
  }
}

mediaqueryList.addListener(function (EventoMediaQueryList) {
  crew_container.innerHTML = ``;
  renderCrew(mediaqueryList.matches);
});

renderCrew(mediaqueryList.matches);