async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    return data.members;
  } catch (error) {
    console.error("Error loading members:", error);
    return [];
  }
}

function getMembershipLabel(level) {
  switch(level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "N/A";
  }
}

function displayMembers(members, viewType) {
  const container = document.getElementById("directory");
  container.innerHTML = "";
  container.className = viewType;

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add(viewType === "grid" ? "card" : "list-item");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" />
      <div>
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.url}" target="_blank">Visit Website</a>
        <p><strong>Membership:</strong> ${getMembershipLabel(member.membership)}</p>
        <p><em>Founded: ${member.founded}</em></p>
      </div>
    `;
    container.appendChild(card);
  });
}

async function init() {
  const members = await loadMembers();
  displayMembers(members, "grid");

  document.getElementById("gridView").addEventListener("click", () => displayMembers(members, "grid"));
  document.getElementById("listView").addEventListener("click", () => displayMembers(members, "list"));

  const currentYear = new Date().getFullYear();
  document.getElementById("copyright-year").textContent =
    `© ${currentYear} || Dillan Torres || Ecuador`;

  const lastModif = new Date(document.lastModified);
  document.getElementById("lastModified").textContent =
    `Last Modification: ${lastModif.toLocaleString()}`;
}

init();

const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');  
});