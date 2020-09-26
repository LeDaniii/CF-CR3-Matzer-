// const memberName = document.getElementById("member-name");
// const email = document.getElementById("email");

function displayCard() {
  for (let i = 0; i <= 4; i++) {
    let teamSection = document.getElementById("team");
    teamSection.innerHTML += `<div class="member-card" id="member-card${i}"></div>`;
    let memberCard = document.getElementById(`member-card${i}`);
    memberCard.innerHTML += `<img src="../img/placeholder1.png">`;
    memberCard.innerHTML += `<h4 id="member-name">Daniel Matzer</h4>`;
    memberCard.innerHTML += `<p id="email">daniel.matzer@piagroup.com</p>`;
  }
}

displayCard();
