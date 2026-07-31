  $(document).ready(function(){
    $('#nav-toggle').on("click", function() {
      $('#nav-menu-mobile')[0].classList.toggle('hidden');
      $('#hamburger')[0].classList.toggle('hidden');
      $('#cross')[0].classList.toggle('hidden');
    });  
  });

  function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const svg = button.querySelector('svg');
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      svg.style.transform = 'rotate(0deg)';
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      svg.style.transform = 'rotate(180deg)';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-review-carousel]').forEach(function(carousel) {
      const cards = Array.from(carousel.querySelectorAll('[data-review-card]'));
      const dots = Array.from(carousel.querySelectorAll('[data-review-dot]'));
      const prev = carousel.querySelector('[data-review-prev]');
      const next = carousel.querySelector('[data-review-next]');
      let current = 0;
      let intervalId;

      function showReview(index) {
        current = (index + cards.length) % cards.length;
        cards.forEach(function(card, cardIndex) {
          card.classList.toggle('is-active', cardIndex === current);
        });
        dots.forEach(function(dot, dotIndex) {
          dot.classList.toggle('is-active', dotIndex === current);
        });
      }

      function start() {
        intervalId = window.setInterval(function() {
          showReview(current + 1);
        }, 6500);
      }

      function restart() {
        window.clearInterval(intervalId);
        start();
      }

      if (!cards.length) {
        return;
      }

      prev.addEventListener('click', function() {
        showReview(current - 1);
        restart();
      });
      next.addEventListener('click', function() {
        showReview(current + 1);
        restart();
      });
      dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
          showReview(Number(dot.dataset.reviewDot));
          restart();
        });
      });
      start();
    });
  });
