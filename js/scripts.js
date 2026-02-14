window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation()
        
        if (form.checkValidity()) {
            showSuccessMessage(form);
            form.reset();
            form.classList.remove('was-validated');
        } else {
            form.classList.add('was-validated');
        }
      }, false)
    })
    
  function showSuccessMessage(form) {
      const successMessage = form.querySelector('.form-result-primary');
      
      if (successMessage) {
          document.body.style.overflow = 'hidden';
          
          successMessage.classList.remove('d-none');
          successMessage.classList.add('d-flex');
          
          const closeMessage = function() {
              document.body.style.overflow = '';
              
              successMessage.classList.add('d-none');
              successMessage.classList.remove('d-flex');
              
              document.removeEventListener('click', closeMessage);
          };
          
          // Добавляем проверку, чтобы не закрывалось сразу при клике на кнопку
          setTimeout(() => {
              document.addEventListener('click', function handler(e) {
                  // Проверяем, что клик был не по кнопке отправки
                  if (!e.target.closest('#submitButton')) {
                      closeMessage();
                      document.removeEventListener('click', handler);
                  }
              });
          }, 100);
          
          setTimeout(function() {
              if (!successMessage.classList.contains('d-none')) {
                  closeMessage();
              }
          }, 3000);
      } else {
          console.log('Сообщение об успехе не найдено'); // Для отладки
      }
  }
})()
