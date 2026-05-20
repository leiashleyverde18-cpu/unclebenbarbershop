const elements = document.querySelectorAll('.fade-in, .fade-left, .fade-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const items = entry.target.parentElement.children;

      [...items].forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 120); // delay per item
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let scrollAmount = 0;
const scrollStep = 270;

// NEXT
nextBtn.addEventListener('click', () => {
  scrollAmount += scrollStep;

  if (scrollAmount > track.scrollWidth - track.clientWidth) {
    scrollAmount = track.scrollWidth - track.clientWidth;
  }

  track.style.transform = `translateX(-${scrollAmount}px)`;
});

// PREV
prevBtn.addEventListener('click', () => {
  scrollAmount -= scrollStep;

  if (scrollAmount < 0) scrollAmount = 0;

  track.style.transform = `translateX(-${scrollAmount}px)`;
});


// =====================
// IMAGE CLICK ZOOM
// =====================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".slider-track img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// CLOSE MODAL
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// CLOSE WHEN CLICK OUTSIDE
modal.onclick = () => {
  modal.style.display = "none";
};

modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});