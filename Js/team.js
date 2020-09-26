// const memberName = document.getElementById("member-name");
// const email = document.getElementById("email");

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
  }
}

displayCard();
