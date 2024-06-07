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