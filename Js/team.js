// --------- Automatic Member-Card generation ----------
var teamJson = JSON.parse(teamMembers);
console.table(teamJson);

function displayCard() {
  for (let i = 0; i < teamJson.length; i++) {
    let teamSection = document.getElementById("team");
    teamSection.innerHTML += `<div class="member-card" id="member-card${i}"></div>`;
    let memberCard = document.getElementById(`member-card${i}`);
    memberCard.innerHTML += `<img src=${teamJson[i].image}>`;
    memberCard.innerHTML += `<h4 id="member-name">${teamJson[i].name}</h4>`;
    memberCard.innerHTML += `<p id="email">${teamJson[i].email}</p>`;
    memberCard.innerHTML += `<p id="profession">${teamJson[i].profession}</p>`;
    memberCard.innerHTML += `<h3>What drives me:</h3><p id="drives">${teamJson[i].drives}</p>`;
  }
}

displayCard();

// i figured out how i can do this with js but i have to rewrite everything so i did the expand thingy in CSS with hover

// --------- Expanding Card ---------
// let memberCard = document.getElementById("member-card0");
// memberCard.addEventListener("click", expand(), false);

// let memberCard2 = document.getElementById("member-card1");
