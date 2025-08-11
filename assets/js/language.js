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

// Toggle dropdown menu visibility
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.classList.toggle('hidden');
}

// Change language and update UI
function changeLanguage(langCode, countryCode) {
  // Change Google Translate language
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  }

  // Update the dropdown button to show selected language
  updateLanguageButton(langCode, countryCode);

  // Close the dropdown
  document.getElementById('dropdown-menu').classList.add('hidden');

  // Store the selected language in localStorage
  localStorage.setItem('selectedLanguage', langCode);
  localStorage.setItem('selectedCountryCode', countryCode);
}

// Update the language button with selected language
function updateLanguageButton(langCode, countryCode) {
  const button = document.querySelector('.relative button');
  if (!button) return;

  // Remove all children except the SVG
  while (button.children.length > 1) {
    button.removeChild(button.firstChild);
  }

  // Create flag image
  const flagImg = document.createElement('img');
  flagImg.src = `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags/svg/${countryCode}.svg`;
  flagImg.className = 'h-4 w-auto';
  flagImg.alt = `${countryCode} Flag`;

  // Create language text span
  const langSpan = document.createElement('span');
  langSpan.textContent = langCode.toUpperCase();

  // Insert new elements before the SVG
  button.insertBefore(flagImg, button.firstChild);
  button.insertBefore(langSpan, button.children[1]);

  // Add a space between elements if needed
  button.insertBefore(document.createTextNode(' '), button.children[1]);
}

// Load saved language preference
function loadSavedLanguage() {
  const savedLang = localStorage.getItem('selectedLanguage');
  const savedCountryCode = localStorage.getItem('selectedCountryCode');
  
  if (savedLang && savedCountryCode) {
    updateLanguageButton(savedLang, savedCountryCode);
    
    // Change Google Translate language if it's loaded
    setTimeout(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event('change'));
      }
    }, 1000); // Delay to ensure Google Translate is loaded
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('dropdown-menu');
  const button = document.querySelector('.relative button');
  
  if (!dropdown.classList.contains('hidden') && 
      event.target !== button && 
      !button.contains(event.target) {
    dropdown.classList.add('hidden');
  }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadSavedLanguage();
  
  // Hide Google Translate's default UI
  const style = document.createElement('style');
  style.textContent = `
    .goog-te-banner-frame { display: none !important; }
    .goog-te-combo { opacity: 0; position: absolute; }
    body { top: 0 !important; }
  `;
  document.head.appendChild(style);
});

// Listen for language changes from Google Translate
document.addEventListener('DOMNodeInserted', function(e) {
  if (e.target.className === 'goog-te-combo') {
    const select = e.target;
    select.addEventListener('change', function() {
      const langCode = select.value;
      // Find the matching country code
      const countryCodes = {
        'en': 'gb',
        'fr': 'fr',
        'pt': 'br',
        'es': 'es',
        'ru': 'ru'
      };
      if (countryCodes[langCode]) {
        updateLanguageButton(langCode, countryCodes[langCode]);
        localStorage.setItem('selectedLanguage', langCode);
        localStorage.setItem('selectedCountryCode', countryCodes[langCode]);
      }
    });
  }
});