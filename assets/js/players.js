
  const players = [
    {
      id: 1,
      name: "Reece James",
      number: 24,
      position: "defender",
      positionDisplay: "Right Back",
      nationality: "England",
      flag: "gb",
      age: 23,
      height: "1.82m",
      stats: "32 Apps",
      rating: 7.8,
      image: "../assets/images/players/player1.png"
    },
    {
      id: 2,
      name: "Alex Silva",
      number: 9,
      position: "forward",
      positionDisplay: "Striker",
      nationality: "Brazil",
      flag: "br",
      age: 25,
      height: "1.85m",
      stats: "18 Goals",
      rating: 8.2,
      image: "../assets/images/players/player3.png"
    },
    {
      id: 3,
      name: "Luka Petrov",
      number: 7,
      position: "midfielder",
      positionDisplay: "Midfielder",
      nationality: "Croatia",
      flag: "hr",
      age: 28,
      height: "1.78m",
      stats: "12 Assists",
      rating: 7.5,
      image: "../assets/images/players/player1.png"
    },
    {
      id: 4,
      name: "Tariq Bello",
      number: 6,
      position: "defender",
      positionDisplay: "Centre Back",
      nationality: "Nigeria",
      flag: "ng",
      age: 26,
      height: "1.91m",
      stats: "87% Tackles",
      rating: 7.9,
      image: "../assets/images/players/player3.png"
    },
    {
      id: 5,
      name: "Jin Woo",
      number: 10,
      position: "forward",
      positionDisplay: "Winger",
      nationality: "South Korea",
      flag: "kr",
      age: 24,
      height: "1.80m",
      stats: "63 Dribbles",
      rating: 7.6,
      image: "../assets/images/players/player1.png"
    },
    {
      id: 6,
      name: "Carlos Mendes",
      number: 8,
      position: "midfielder",
      positionDisplay: "Midfielder",
      nationality: "Portugal",
      flag: "pt",
      age: 27,
      height: "1.83m",
      stats: "5 Goals",
      rating: 7.4,
      image: "../assets/images/players/player3.png"
    },
    {
      id: 7,
      name: "Samuel Osei",
      number: 11,
      position: "forward",
      positionDisplay: "Forward",
      nationality: "Ghana",
      flag: "gh",
      age: 22,
      height: "1.79m",
      stats: "8 Goals",
      rating: 7.3,
      image: "../assets/images/players/player1.png"
    },
    {
      id: 8,
      name: "Marco Rossi",
      number: 4,
      position: "goalkeeper",
      positionDisplay: "Goalkeeper",
      nationality: "Italy",
      flag: "it",
      age: 30,
      height: "1.92m",
      stats: "15 Clean Sheets",
      rating: 8.0,
      image: "../assets/images/players/player3.png"
    },
    {
      id: 9,
      name: "David Kim",
      number: 5,
      position: "midfielder",
      positionDisplay: "Centre Mid",
      nationality: "USA",
      flag: "us",
      age: 26,
      height: "1.84m",
      stats: "4 Goals",
      rating: 7.2,
      image: "../assets/images/players/player1.png"
    },
    {
      id: 10,
      name: "Oscar Lopez",
      number: 3,
      position: "defender",
      positionDisplay: "Left Back",
      nationality: "Mexico",
      flag: "mx",
      age: 25,
      height: "1.81m",
      stats: "4 Assists",
      rating: 7.1,
      image: "../assets/images/players/player3.png"
    },
    {
      id: 11,
      name: "Niko Hansen",
      number: 13,
      position: "midfielder",
      positionDisplay: "Defensive Mid",
      nationality: "Denmark",
      flag: "dk",
      age: 29,
      height: "1.86m",
      stats: "92% Pass Accuracy",
      rating: 7.7,
      image: "../assets/images/players/player1.png"
    },
    {
      id: 12,
      name: "Ivan Novak",
      number: 17,
      position: "forward",
      positionDisplay: "Right Wing",
      nationality: "Serbia",
      flag: "rs",
      age: 24,
      height: "1.82m",
      stats: "7 Goals",
      rating: 7.4,
      image: "../assets/images/players/player3.png"
    }
  ];

  // DOM references
  const playersGrid = document.getElementById('playersGrid');
  const playerSearch = document.getElementById('playerSearch');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sortPlayers');
  const playerCount = document.getElementById('playerCount');
  const avgAge = document.getElementById('avgAge');
  const squadSize = document.getElementById('squadSize');
  const nationalities = document.getElementById('nationalities');
  const topScorer = document.getElementById('topScorer');

  function renderPlayers(playersToRender) {
    playersGrid.innerHTML = '';
    playersToRender.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.className = 'bg-[#022e55] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group relative';
      playerCard.innerHTML = `
        <div class="relative">
          <img src="${player.image}" alt="${player.name}" class="w-full h-64 object-cover object-center" />
          <div class="absolute bottom-2 right-2 bg-[#011e3c] bg-opacity-90 text-white px-2 py-1 rounded text-xs font-bold flex items-center">
            <span class="text-yellow-400 mr-1">★</span> ${player.rating}
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold group-hover:text-yellow-400 transition">${player.name}</h3>
            <span class="text-sm bg-yellow-400 text-[#002B5C] font-bold px-2 py-1 rounded">#${player.number}</span>
          </div>
          <p class="text-sm text-gray-300">Position: ${player.positionDisplay}</p>
          <div class="mt-2">
            <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags/svg/${player.flag}.svg" class="h-4 w-auto inline mr-1" alt="${player.nationality}" />
            <span class="text-sm text-gray-400">${player.nationality}</span>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-700 flex justify-between text-xs">
            <div><div class="text-gray-400">Age</div><div>${player.age}</div></div>
            <div><div class="text-gray-400">Height</div><div>${player.height}</div></div>
            <div><div class="text-gray-400">${player.stats.includes('%') ? '' : player.position === 'goalkeeper' ? 'Clean Sheets' : player.position === 'forward' ? 'Goals' : player.stats.includes('Assists') ? 'Assists' : 'Apps'}</div><div>${player.stats}</div></div>
          </div>
        </div>

        </div>
      `;
      playersGrid.appendChild(playerCard);
    });
    playerCount.textContent = `${playersToRender.length} Players`;
  }

  function sortPlayers(players, sortBy) {
    return [...players].sort((a, b) => {
      switch(sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'position': return a.positionDisplay.localeCompare(b.positionDisplay);
        case 'nationality': return a.nationality.localeCompare(b.nationality);
        case 'number':
        default: return a.number - b.number;
      }
    });
  }

  function filterPlayers() {
    const searchTerm = playerSearch.value.toLowerCase();
    const positionFilter = document.querySelector('.filter-btn.active').dataset.position;
    const sortValue = sortSelect.value;

    let filteredPlayers = players.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm) ||
        player.positionDisplay.toLowerCase().includes(searchTerm) ||
        player.nationality.toLowerCase().includes(searchTerm);

      const matchesPosition = positionFilter === 'all' || player.position === positionFilter;
      return matchesSearch && matchesPosition;
    });

    filteredPlayers = sortPlayers(filteredPlayers, sortValue);
    renderPlayers(filteredPlayers);
    updateStats(filteredPlayers);
  }

  function updateStats(players) {
    const totalAge = players.reduce((sum, p) => sum + p.age, 0);
    avgAge.textContent = (players.length > 0 ? (totalAge / players.length).toFixed(1) : 0);
    squadSize.textContent = players.length;
    nationalities.textContent = new Set(players.map(p => p.nationality)).size;

    const forwards = players.filter(p => p.position === 'forward');
    if (forwards.length > 0) {
      const topScorerPlayer = forwards.reduce((top, p) => {
        const goals = parseInt(p.stats) || 0;
        const topGoals = parseInt(top.stats) || 0;
        return goals > topGoals ? p : top;
      }, forwards[0]);

      topScorer.textContent = topScorerPlayer.name;
      topScorer.nextElementSibling.textContent = `${parseInt(topScorerPlayer.stats) || 0} Goals`;
    } else {
      topScorer.textContent = "N/A";
      topScorer.nextElementSibling.textContent = "No forwards";
    }
  }

  playerSearch.addEventListener('input', filterPlayers);
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelector('.filter-btn.active').classList.remove('active');
      this.classList.add('active');
      filterPlayers();
    });
  });
  sortSelect.addEventListener('change', filterPlayers);

  renderPlayers(players);
  updateStats(players);

  // Formation Injection
  const formation = document.getElementById("formation");
  const formationPlayers = [
     { name: "John Keeper", number: 1, image: "../assets/images/players/player1.png", position: "GK", top: "75%", left: "50%" },
      { name: "Defender A", number: 2, image: "../assets/images/players/player3.png", position: "DEF", top: "65%", left: "15%" },
      { name: "Defender B", number: 3, image: "../assets/images/players/player1.png", position: "DEF", top: "65%", left: "35%" },
      { name: "Defender C", number: 4, image: "../assets/images/players/player3.png", position: "DEF", top: "65%", left: "65%" },
      { name: "Defender D", number: 5, image: "../assets/images/players/player1.png", position: "DEF", top: "65%", left: "85%" },
      { name: "Midfielder A", number: 6, image: "../assets/images/players/player3.png", position: "MID", top: "45%", left: "30%" },
      { name: "Midfielder B", number: 7, image: "../assets/images/players/player1.png", position: "MID", top: "45%", left: "50%" },
      { name: "Midfielder C", number: 8, image: "../assets/images/players/player3.png", position: "MID", top: "45%", left: "70%" },
      { name: "Forward A", number: 9, image: "../assets/images/players/player1.png", position: "FWD", top: "25%", left: "35%" },
      { name: "Forward B", number: 10, image: "../assets/images/players/player3.png", position: "FWD", top: "25%", left: "50%" },
      { name: "Forward C", number: 11, image: "../assets/images/players/player1.png", position: "FWD", top: "25%", left: "65%" }
  ];

  formationPlayers.forEach(p => {
    const el = document.createElement("div");
    el.className = `absolute player group`;
    el.style.top = p.top;
    el.style.left = p.left;
    el.innerHTML = `
      <div class="relative group">
        <img src="${p.image}" alt="${p.name}" class="w-14 h-14 rounded-full border-4 border-yellow-400 shadow-lg object-cover" />
        <div class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          ${p.name} • #${p.number} • ${p.position}
        </div>
      </div>
    `;
    formation.appendChild(el);
  });

