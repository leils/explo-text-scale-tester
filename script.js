// Body size slider functionality
(function () {
  const bodySizeSlider = document.getElementById('body-size-slider');
  const bodySizeValue = document.getElementById('body-size-value');
  const root = document.documentElement;

  // Check for saved body size preference or default to 4vh
  const savedBodySize = localStorage.getItem('bodySize') || '4';
  bodySizeSlider.value = savedBodySize;
  updateBodySize(savedBodySize);

  // Update body size on slider change
  bodySizeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    updateBodySize(value);
    localStorage.setItem('bodySize', value);
  });

  function updateBodySize(value) {
    const vhValue = `${value}vh`;
    root.style.setProperty('--body-size', vhValue);
    bodySizeValue.textContent = vhValue;
  }
})();

// Theme toggle functionality
(function () {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  const themeText = themeToggle.querySelector('.theme-text');
  const body = document.body;

  // Check for saved theme preference or default to dark mode
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const isDarkMode = savedTheme === 'dark';

  // Apply initial theme
  if (!isDarkMode) {
    body.classList.add('light-mode');
    updateToggleUI(false);
  } else {
    updateToggleUI(true);
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const isCurrentlyDark = !body.classList.contains('light-mode');
    
    if (isCurrentlyDark) {
      // Switch to light mode
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      updateToggleUI(false);
    } else {
      // Switch to dark mode
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      updateToggleUI(true);
    }
  });

  function updateToggleUI(isDark) {
    if (isDark) {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark';
    } else {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light';
    }
  }
})();

