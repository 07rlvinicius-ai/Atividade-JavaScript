const grid = document.getElementById("grid");

const countries = [
  { name: "Andonna", flag: "imgs/ad.png" },
  { name: "United Arab Emirates", flag: "imgs/ae.png" },
  { name: "Afghanistan", flag: "imgs/af.png" },
  { name: "Antigua and Barbuda", flag: "imgs/ag.png" },
  { name: "Angulia", flag: "imgs/ai.png" },
  { name: "Albania", flag: "imgs/al.png" },
  { name: "Armenia", flag: "imgs/am.png" },
  { name: "Netherlands Antilies", flag: "imgs/an.png" },
  { name: "Angola", flag: "imgs/ao.png" },
  { name: "Antartica", flag: "imgs/aq.png" },
  { name: "Argentina", flag: "imgs/ar.png" },
  { name: "American Samoa", flag: "imgs/as.png" },
  { name: "Austria", flag: "imgs/at.png" },
  { name: "Australia", flag: "imgs/au.png" },
  { name: "Aruba", flag: "imgs/aw.png" },
  { name: "Âland Islands", flag: "imgs/ax.png" },
  { name: "Azerbaijan", flag: "imgs/az.png" },
  { name: "Bosnia and Herzegovina", flag: "imgs/ba.png" },
  { name: "Barbados", flag: "imgs/bb.png" },
  { name: "Bangladesh", flag: "imgs/bd.png" },
  { name: "Belgium", flag: "imgs/be.png" },
  { name: "Burkina Faso", flag: "imgs/bf.png" },
  { name: "Bulgaria", flag: "imgs/bg.png" },
  { name: "Bahrain", flag: "imgs/bh.png" },
  { name: "Burundi", flag: "imgs/bi.png" },
  { name: "Benin", flag: "imgs/bj.png" },
  { name: "Saint Barthérlrmy", flag: "imgs/bl.png" },
  { name: "Bermuda", flag: "imgs/bm.png" },
  { name: "Brumei Darussalam", flag: "imgs/bn.png" },
  { name: "Bolivia", flag: "imgs/bo.png" }
];

countries.forEach(country => {
  const card = document.createElement("div");
  card.classList.add("card");
  
  card.innerHTML = ` <img src="${country.flag}" alt="${country.name}">
  <p>${country.name}</p>
  `;
  
  grid.appendChild(card);
});