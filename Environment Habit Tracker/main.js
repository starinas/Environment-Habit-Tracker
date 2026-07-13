tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    
    // Remove active class from all tab contents
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    
    // Remove active class from all tabs
    tabs.forEach(t => {
      t.classList.remove('active');
    });
    
    // Add active class to the clicked tab and target content
    tab.classList.add('active');
    target.classList.add('active');
  });
});
