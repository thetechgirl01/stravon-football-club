// Initialize Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,fr,pt,es,ru',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 
    'google_translate_element'
  );
}

// Toggle dropdown visibility
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.classList.toggle('hidden');
}

// Change language and update UI
function changeLanguage(langCode, countryCode) {
  // Set the selected language in Google Translate
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  }

  // Update the UI to show selected language
  const langButton = document.querySelector('.left-nav-contents button');
  if (langButton) {
    // Get the language name from the selected option
    let langName = 'ENG';
    switch(langCode) {
      case 'fr': langName = 'FRE'; break;
      case 'pt': langName = 'POR'; break;
      case 'es': langName = 'ESP'; break;
      case 'ru': langName = 'RUS'; break;
    }
    
    // Update flag and text
    langButton.innerHTML = `
      <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags/svg/${countryCode.toLowerCase()}.svg" class="h-4 w-auto" alt="${countryCode} Flag"/>
      <span>${langName}</span>
      <svg class="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5.25 7.75L10 12.5l4.75-4.75" stroke="#002B5C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </svg>
    `;
  }

  // Close the dropdown
  toggleDropdown();
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('dropdown-menu');
  const button = document.querySelector('.left-nav-contents button');
  
  if (!button.contains(event.target) {
    dropdown.classList.add('hidden');
  }
});

// Handle Google Translate API load
function loadGoogleTranslate() {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadGoogleTranslate();
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});