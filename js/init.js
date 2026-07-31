  document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('nav-menu-mobile');
    const hamburger = document.getElementById('hamburger');
    const cross = document.getElementById('cross');

    if (navToggle && mobileMenu && hamburger && cross) {
      navToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        hamburger.classList.toggle('hidden');
        cross.classList.toggle('hidden');
      });
    }
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

  function setupReviewCarousel(carousel) {
      const cards = Array.from(carousel.querySelectorAll('[data-review-card]'));
      const dots = Array.from(carousel.querySelectorAll('[data-review-dot]'));
      let prev = carousel.querySelector('[data-review-prev]');
      let next = carousel.querySelector('[data-review-next]');
      let current = 0;
      let intervalId;

      if (carousel.reviewSetup) {
        const prevClone = prev.cloneNode(true);
        const nextClone = next.cloneNode(true);
        prev.replaceWith(prevClone);
        next.replaceWith(nextClone);
        prev = prevClone;
        next = nextClone;
      }

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
        carousel.reviewIntervalId = intervalId;
      }

      function restart() {
        window.clearInterval(intervalId);
        start();
      }

      if (!cards.length) {
        return;
      }

      window.clearInterval(carousel.reviewIntervalId);
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
      carousel.reviewSetup = true;
  }

  function renderReviewCarousel(carousel, reviews) {
    const track = carousel.querySelector('.reviews-track');
    const dotsWrap = carousel.querySelector('[data-review-dots]');
    if (!track || !dotsWrap || !reviews.length) {
      return;
    }

    track.innerHTML = reviews.map(function(review, index) {
      const author = review.author_name || 'Google Maps';
      const date = review.relative_time_description || '';
      const text = review.text || '';
      return [
        '<article class="review-card' + (index === 0 ? ' is-active' : '') + '" data-review-card>',
        '<div class="reviews-stars" aria-label="' + Number(review.rating || 5) + ' stars">' + '★'.repeat(Number(review.rating || 5)) + '</div>',
        '<p class="review-text">“' + escapeHtml(text) + '”</p>',
        '<div class="review-meta">',
        '<span class="review-author">' + escapeHtml(author) + '</span>',
        date ? '<span>' + escapeHtml(date) + '</span>' : '',
        '<span>' + escapeHtml(carousel.dataset.googleSource || 'Google Maps') + '</span>',
        '</div>',
        '</article>'
      ].join('');
    }).join('');

    dotsWrap.innerHTML = reviews.map(function(_, index) {
      return '<button class="reviews-dot' + (index === 0 ? ' is-active' : '') + '" type="button" data-review-dot="' + index + '" aria-label="Show review ' + (index + 1) + '"></button>';
    }).join('');

    setupReviewCarousel(carousel);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  window.initGoogleReviews = function() {
    document.querySelectorAll('[data-review-carousel][data-google-place-id]').forEach(function(carousel) {
      const placeId = carousel.dataset.googlePlaceId;
      if (!placeId || !window.google || !google.maps || !google.maps.places) {
        return;
      }

      const serviceContainer = document.createElement('div');
      const service = new google.maps.places.PlacesService(serviceContainer);
      service.getDetails({
        placeId: placeId,
        fields: ['reviews', 'rating', 'user_ratings_total', 'url']
      }, function(place, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !place || !place.reviews || !place.reviews.length) {
          return;
        }
        renderReviewCarousel(carousel, place.reviews);
      });
    });
  };

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-review-carousel]').forEach(setupReviewCarousel);
  });
