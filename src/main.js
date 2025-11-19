const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const drawCard = () => {
    const containerElement = document.getElementById('card-container');

    for (let i = 0; i < teamMembers.length; i++) {
        containerElement.innerHTML += `
            <div class="card">
                <img src="img/female1.png" class="card-img">
                <div class="card-name">
                    Laura Rossi
                </div>
                <div class="card-role">
                    Front-End Dev
                </div>
                <div class="card-email">
                    laurarossi@team.com
                </div>
            </div>
            `
        
    }
}

drawCard();