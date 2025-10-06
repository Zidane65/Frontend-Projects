// This is the "pure Tailwind" way to write the JS for tabs.

// Find all the elements that are tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

// Find all the elements that are the tab content panels
const tabContents = document.querySelectorAll('.tab-content');

// Define the classes for the "active" state
// These are the utility classes that make the button look selected
const activeClasses = ['bg-white', 'text-slate-800', 'font-semibold', 'shadow-md'];

// Define the classes for the "inactive" state
const inactiveClasses = ['text-slate-600'];

// For each of the tab buttons...
tabButtons.forEach((button, index) => {
  // ...add a click event listener.
  button.addEventListener('click', () => {
    
    // --- Handle the Tab Buttons ---
    // First, make all buttons inactive
    tabButtons.forEach(btn => {
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
      btn.setAttribute('aria-selected', 'false');
    });
    
    // Then, make the clicked button active
    button.classList.add(...activeClasses);
    button.classList.remove(...inactiveClasses);
    button.setAttribute('aria-selected', 'true');


    // --- Handle the Tab Content ---
    // Get the target content panel using the `data-tab-target` attribute
    const target = document.querySelector(button.dataset.tabTarget);

    // First, hide all content panels
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    // Then, show the target content panel
    if (target) {
      target.classList.remove('hidden');
    }
  });
});