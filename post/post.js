//the is code handles the blog post page, reload the page to shuffle the cards 

  const cards = [
    {
      type: 'big',
      image: '../assets/images/players/player1.png',
      tag: 'Match Report',
      tagColor: 'bg-yellow-400 text-black',
      title: 'Captain Reflects on Derby Day Glory',
      desc: 'After a tense battle, the team captain shares insights on what drove the comeback win.',
      date: 'June 10, 2025',
    },
    {
      type: 'small',
      image: '../assets/images/players/player1.png',
      tag: 'Player Focus',
      tagColor: 'bg-blue-500 text-white',
      title: 'Midfielder’s Magic Moment',
      desc: 'Player of the match dazzled with a goal and 2 assists.',
      date: 'June 8, 2025',
    },
    {
      type: 'small',
      image: '../assets/images/players/player3.png',
      tag: 'Club News',
      tagColor: 'bg-green-500 text-white',
      title: 'Coach’s Tactical Brilliance',
      desc: 'Breaking down smart substitutions and formation shifts.',
      date: 'June 6, 2025',
    },
    {
      type: 'big',
      image: 'assets/images/players/player4.png',
      tag: 'Feature',
      tagColor: 'bg-red-500 text-white',
      title: 'Striker’s Stunning Hat-Trick',
      desc: 'Unstoppable in front of goal with a match-winning performance.',
      date: 'June 12, 2025',
    },
    {
      type: 'small',
      image: 'assets/images/players/player5.png',
      tag: 'Academy',
      tagColor: 'bg-purple-600 text-white',
      title: 'Young Talent Rising',
      desc: 'Academy star promoted to first team.',
      date: 'June 5, 2025',
    }
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const newsGrid = document.getElementById('newsGrid');
  const shuffled = shuffle([...cards]);

  const bigCard = shuffled.find(card => card.type === 'big');
  const smallCards = shuffled.filter(card => card.type === 'small').slice(0, 2);

  // Big card layout (with <a> link)
  newsGrid.innerHTML = `
    <a href="post.html" class="lg:col-span-2 block group relative overflow-hidden rounded-xl shadow-xl">
      <img src="${bigCard.image}" class="w-full h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
        <div class="flex items-center gap-3 mb-3">
          <span class="${bigCard.tagColor} text-xs font-bold px-3 py-1 rounded-full">${bigCard.tag}</span>
          <span class="text-gray-300 text-sm">${bigCard.date}</span>
        </div>
        <h3 class="text-3xl font-extrabold mb-2 group-hover:text-yellow-400 transition">${bigCard.title}</h3>
        <p class="text-gray-200 text-sm max-w-2xl">${bigCard.desc}</p>
      </div>
    </a>
  `;

  // Small cards layout (with <a> links)
  let smallHTML = '<div class="flex flex-col gap-8">';
  smallCards.forEach(card => {
    smallHTML += `
      <a href="post.html" class="block group relative rounded-xl overflow-hidden shadow-lg">
        <img src="${card.image}" class="w-full h-44 object-cover object-center transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
          <div class="flex items-center gap-2 mb-2">
            <span class="${card.tagColor} text-xs font-semibold px-2 py-0.5 rounded">${card.tag}</span>
            <span class="text-sm text-gray-300">${card.date}</span>
          </div>
          <h4 class="text-lg font-semibold group-hover:text-yellow-400 transition">${card.title}</h4>
          <p class="text-sm text-gray-300">${card.desc}</p>
        </div>
      </a>
    `;
  });
  smallHTML += '</div>';

  newsGrid.innerHTML += smallHTML;





    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('animate__animated', 'animate__fadeInRight');
      mobileMenu.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('animate__fadeInRight');
      mobileMenu.classList.add('animate__fadeOutRight');
      setTimeout(() => {
        mobileMenu.style.display = 'none';
        mobileMenu.classList.remove('animate__fadeOutRight');
      }, 500);
    });
    
    // Scroll reveal animation
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const fadeInOnScroll = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Initialize elements as invisible
    fadeElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);
 
  function animateButton(btn) {
    btn.classList.remove('scale-95');
    void btn.offsetWidth; // trigger reflow to restart animation
    btn.classList.add('scale-95');
    setTimeout(() => btn.classList.remove('scale-95'), 150); // remove after animation
  }
