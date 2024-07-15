// JavaScript for Modal 
  
      function openModal(blogId) {
          const modal = document.getElementById('modal');
          const modalTitle = document.getElementById('modalTitle');
          const modalContent = document.getElementById('modalContent');

          if (!modal || !modalTitle || !modalContent) {
              console.error('Modal elements not found.');
              return;
          }

          modal.classList.remove('hidden');

          // Example content for demonstration
          if (blogId === 'blog1') {
              modalTitle.textContent = 'Blog Title 1';
              modalContent.innerHTML = `
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                  <p>Suspendisse potenti. Duis feugiat lacus nec leo tristique.</p>
              `;
          } else if (blogId === 'blog2') {
              modalTitle.textContent = 'Blog Title 2';
              modalContent.innerHTML = `
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              `;
          }
          // Add more conditions for other blog IDs as needed
      };

      function closeModal() {
          const modal = document.getElementById('modal');
          if (modal) {
              modal.classList.add('hidden');
          } else {
              console.error('Modal element not found.');
          }
      };
  
  
  

  // javascriptfor collapse menu of small screen sizes
    document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.querySelector('button');
        const menuItems = document.querySelector('.lg\\:flex');

        menuButton.addEventListener('click', () => {
            menuItems.classList.toggle('hidden');
        });
    })
  