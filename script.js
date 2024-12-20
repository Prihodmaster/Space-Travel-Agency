// cards
const tripsData = [
  {
    planetImage: "images/planets/mars.png",
    landscapeImage: "images/planet-landscape/mars.jpg",
    smallTitle: "Weekend on Mars",
    smallDescription: "Explore the Red Planet's canyons and breathtaking alien landscapes.",
    middleDescription: "Embark on an unforgettable journey to the Red Planet, where cosmic dreams become reality. Over three days, immerse yourself in Mars' captivating landscapes and ancient canyons, experiencing adventures you can't find anywhere else in the universe.",
    duration: "3 days",
    flightTime: "6 hours"
  },
  {
    planetImage: "images/planets/venus.png",
    landscapeImage: "images/planet-landscape/venus.jpg",
    smallTitle: "Journey to Venus",
    smallDescription: "Discover Venus' mysterious clouds and golden horizons.",
    middleDescription: "Step into the dense, golden clouds of Venus for an adventure like no other. Over four days, uncover the secrets of this shrouded planet, from its volcanic terrain to its rich atmospheric phenomena that captivate explorers.",
    duration: "4 days",
    flightTime: "7 hours"
  },
  {
    planetImage: "images/planets/jupiter.png",
    landscapeImage: "images/planet-landscape/jupiter.jpg",
    smallTitle: "Adventures on Jupiter",
    smallDescription: "Experience the might and majesty of Jupiter's storms.",
    middleDescription: "Travel to the largest planet in the Solar System and witness its awe-inspiring storms and swirling clouds. Over four days, get up close to Jupiter's Great Red Spot and enjoy unparalleled views of its mesmerizing atmosphere.",
    duration: "4 days",
    flightTime: "10 hours"
  },
  {
    planetImage: "images/planets/titan.png",
    landscapeImage: "images/planet-landscape/titan.jpg",
    smallTitle: "Expedition to Titan",
    smallDescription: "Explore Titan's lakes, methane rivers, and hazy skies.",
    middleDescription: "Discover the wonders of Titan, Saturn's largest moon, with its lakes of liquid methane and ethereal, hazy atmosphere. Over six days, immerse yourself in an alien world unlike anything you've ever seen.",
    duration: "6 days",
    flightTime: "14 hours"
  },
  {
    planetImage: "images/planets/io.png",
    landscapeImage: "images/planet-landscape/io.jpg",
    smallTitle: "Volcanic Tour of Io",
    smallDescription: "Witness Io's erupting volcanoes and vibrant landscapes.",
    middleDescription: "Journey to Io, the most volcanically active body in the Solar System. Over four days, marvel at its dramatic, fiery eruptions and stunningly colorful surface, a true testament to cosmic power.",
    duration: "4 days",
    flightTime: "10 hours"
  },
  {
    planetImage: "images/planets/europa.png",
    landscapeImage: "images/planet-landscape/europa.jpg",
    smallTitle: "Adventure on Europa",
    smallDescription: "Discover Europa's icy surface and hidden ocean mysteries.",
    middleDescription: "Explore Europa's vast icy plains and delve into the mysteries of its hidden subsurface ocean. Over seven days, uncover the secrets of one of Jupiter's most fascinating moons and imagine life beyond Earth.",
    duration: "7 days",
    flightTime: "16 hours"
  },
  {
    planetImage: "images/planets/pluto.png",
    landscapeImage: "images/planet-landscape/pluto.jpg",
    smallTitle: "Flight to Pluto",
    smallDescription: "Visit the icy heart of Pluto and its distant wonders.",
    middleDescription: "Embark on a journey to the farthest reaches of the Solar System. Over ten days, experience Pluto's icy mountains, vast plains, and its famous heart-shaped glacier, a symbol of cosmic wonder.",
    duration: "10 days",
    flightTime: "20 hours"
  },
  {
    planetImage: "images/planets/neptune.png",
    landscapeImage: "images/planet-landscape/neptune.jpg",
    smallTitle: "Blue Horizons of Neptune",
    smallDescription: "Explore Neptune's azure skies and icy rings.",
    middleDescription: "Discover the serene beauty of Neptune, the blue giant. Over eight days, explore its dynamic weather systems, icy rings, and distant allure, offering a glimpse into the outermost reaches of our Solar System.",
    duration: "8 days",
    flightTime: "18 hours"
  },
  {
    planetImage: "images/planets/saturn.png",
    landscapeImage: "images/planet-landscape/saturn.jpg",
    smallTitle: "Rings of Saturn",
    smallDescription: "Marvel at Saturn's majestic rings and golden hues.",
    middleDescription: "Witness the iconic beauty of Saturn and its ethereal rings. Over four days, enjoy breathtaking views of the golden planet, explore its atmospheric wonders, and feel the awe of its cosmic grandeur.",
    duration: "4 days",
    flightTime: "12 hours"
  },
  {
    planetImage: "images/planets/ganymede.png",
    landscapeImage: "images/planet-landscape/ganymede.jpg",
    smallTitle: "Ganymede: The Icy Giant",
    smallDescription: "Discover Ganymede's icy surface and cosmic vistas.",
    middleDescription: "Explore Ganymede, the largest moon in the Solar System. Over nine days, traverse its icy landscapes, marvel at its cratered surface, and uncover the mysteries of this celestial giant.",
    duration: "9 days",
    flightTime: "17 hours"
  },
  {
    planetImage: "images/planets/moon.png",
    landscapeImage: "images/planet-landscape/moon.jpg",
    smallTitle: "The Moon",
    smallDescription: "Walk the lunar surface and relive historic landings.",
    middleDescription: "Experience the magic of Earth's natural satellite. Over ten days, explore the Moon's craters, walk in the footsteps of astronauts, and enjoy unparalleled views of Earth from space.",
    duration: "10 days",
    flightTime: "2 hours"
  },
  {
    planetImage: "images/planets/mercury.png",
    landscapeImage: "images/planet-landscape/mercury.jpg",
    smallTitle: "Mercury",
    smallDescription: "Witness Mercury's extremes of heat and stunning craters.",
    middleDescription: "Venture to Mercury, the closest planet to the Sun. Over three days, marvel at its sun-scorched surface, dramatic craters, and the stark beauty of this small but mighty world.",
    duration: "3 days",
    flightTime: "4 hours"
  }
];

const createCard = (trip) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
      <div class="upper-part">
          <div class="upper-part-face">
              <img src="${trip.planetImage}" alt="planet">
              <div class="small-description-trip">
                  <h3>${trip.smallTitle}</h3>
                  <p>${trip.smallDescription}</p>
              </div>
          </div>
          <div class="upper-part-back">
              <div class="middle-description-trip">
                  <h3>${trip.smallTitle}</h3>
                  <p>${trip.middleDescription}</p>
              </div>
          </div>
      </div>
      <div class="lower-part">
          <div class="lower-part-face">
              <div class="trip-duration">
                  <p><strong>Duration:</strong><span class="trip-duration-total"> ${trip.duration}</span></p>
                  <p><strong>Flight Time:</strong><span class="trip-duration-total"> ${trip.flightTime}</span></p>
              </div>
          </div>
          <div class="lower-part-back">
              <img src="${trip.landscapeImage}" alt="planet landscape">
              <button type="button" class="btn-see-more-trip">see more</button>
          </div>
      </div>
  `;
  return card;
}

const renderCards = () => {
  const container = document.getElementById('tour-cards'); 
  tripsData.forEach(trip => {
      const card = createCard(trip);
      container.appendChild(card);
  });
}
renderCards();


// reviews
const reviewsData = [
  {
    image: "images/reviews/review-1.jpg",
    name: "John Carter",
    shortReview: "The view of Saturn's rings takes your breath away! This unforgettable trip left vivid impressions.",
    fullReview: "The journey to Saturn exceeded all my expectations. The most incredible part was seeing its rings from the spacecraft window. Huge and mysterious, they looked like a living painting from an astronomy textbook. These moments will remain in my memory forever. The tour organization was top-notch, and every day was filled with amazing discoveries."
  },
  {
    image: "images/reviews/review-2.jpg",
    name: "Emma Johnson",
    shortReview: "Mars amazed me with its stunning landscapes. It's another world where time stands still.",
    fullReview: "The tour to Mars was one of the best adventures of my life. The red sands, ancient canyons, and vast valleys create a unique atmosphere. Every step on the planet's surface reminds you of humanity's great past and future. The sunset walk, when Mars' sky turns golden, was especially memorable. I highly recommend this tour to all space exploration enthusiasts!"
  },
  {
    image: "images/reviews/review-3.jpg",
    name: "James Anderson",
    shortReview: "The Venus tour surprised me with contrasts. The dense atmosphere and landscapes are pure magic!",
    fullReview: "Visiting Venus was a truly extraordinary experience. Despite its dense atmosphere and extreme conditions, the beauty of this planet is awe-inspiring. The landscapes look like sets from a science fiction movie. The most striking moment was the view of the volcanoes and the sunrise through the clouds. This tour turned into an unforgettable adventure and was worth every penny."
  }
];

const createReview =(review) => {
  const reviewDiv = document.createElement('div');
  reviewDiv.classList.add('review');

  reviewDiv.innerHTML = `
      <div class="review-content">
          <div class="front-review">
              <div class="title-review">
                  <img src="${review.image}" alt="${review.name}">
                  <p>${review.name}</p>
              </div>
              <p class="subtitle-review">${review.shortReview}</p>
          </div>
          <div class="back-review">
              <p class="description-review">" ${review.fullReview} "</p>
          </div>
      </div>
  `;

  return reviewDiv;
}

const  renderReviews = () => {
  const container = document.getElementById('review-list'); 
  reviewsData.forEach(review => {
      const reviewElement = createReview(review);
      container.appendChild(reviewElement);
  });
}
renderReviews();


// carousel
const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const leftButton = document.querySelector('.button-carousel.left');
const rightButton = document.querySelector('.button-carousel.right');

let isAnimating = false;
let autoScrollInterval;
const getContainerWidth = () => carouselContainer.offsetWidth;
carousel.style.transform = `translateX(-${getContainerWidth()}px)`;

const moveRight = () => {
  if (isAnimating) return;
  isAnimating = true;
  const containerWidth = getContainerWidth();

  carousel.style.transition = 'transform 2s ease-in-out';
  carousel.style.transform = `translateX(-${containerWidth * 2}px)`;

  setTimeout(() => {
    carousel.style.transition = 'none';
    const firstImage = carousel.firstElementChild;
    carousel.appendChild(firstImage); 
    carousel.style.transform = `translateX(-${containerWidth}px)`; 
    isAnimating = false;
  }, 2000);
};
const moveLeft = () => {
  if (isAnimating) return;
  isAnimating = true;
  const containerWidth = getContainerWidth();

  carousel.style.transition = 'none';
  const lastImage = carousel.lastElementChild;
  carousel.prepend(lastImage);
  carousel.style.transform = `translateX(-${containerWidth * 2}px)`; 

  setTimeout(() => {
    carousel.style.transition = 'transform 2s ease-in-out';
    carousel.style.transform = `translateX(-${containerWidth}px)`;
    setTimeout(() => {
      isAnimating = false;
    }, 2000);
  });
};
const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    moveRight();
  }, 7000);
};
const stopAutoScroll = () => {
  clearInterval(autoScrollInterval);
};
leftButton.addEventListener('click', () => {
  stopAutoScroll();
  moveLeft();
  startAutoScroll();
});

rightButton.addEventListener('click', () => {
  stopAutoScroll();
  moveRight();
  startAutoScroll();
});
startAutoScroll();
window.addEventListener('resize', () => {
  stopAutoScroll();
  const containerWidth = getContainerWidth();
  carousel.style.transition = 'none';
  carousel.style.transform = `translateX(-${containerWidth}px)`;
  startAutoScroll();
});


// burger-menu
document.addEventListener('DOMContentLoaded', () => {
  const mainNavbar = document.getElementById('main-navbar');
  const headerButtons = document.querySelector('.header-buttons');
  const slideNavbar = document.getElementById('slide-navbar');
  slideNavbar.innerHTML = mainNavbar.innerHTML;
  const slideHeaderButtons = document.getElementById('slide-header-buttons');
  slideHeaderButtons.innerHTML = headerButtons.innerHTML;
  const checkbox = document.getElementById('checkbox-burger');
  const slideMenu = document.getElementById('nav-menu'); 
  const slideMenuContainer = document.querySelector('.slide-menu'); 
  const burgerLabel = document.querySelector('label[for="checkbox-burger"]');

  checkbox.addEventListener('change', () => checkbox.checked ? slideMenu.classList.add('show') : slideMenu.classList.remove('show'));

  document.addEventListener('click', (event) => {
    const isClickInsideMenu = slideMenuContainer.contains(event.target); 
    const isClickOnCheckbox = event.target === checkbox; 
    const isClickOnBurger = burgerLabel.contains(event.target); 

    if (!isClickInsideMenu && !isClickOnCheckbox && !isClickOnBurger && checkbox.checked) {
      checkbox.checked = false; 
      slideMenu.classList.remove('show'); 
    }
  });

  // input-focus
  const inputField = document.querySelector('.header-buttons .input');
  const iconInput = document.querySelector('.header-buttons .icon-input');
  let isIconClicked = false;
  
  iconInput.addEventListener('mousedown', (event) => {
      isIconClicked = true; 
      if (document.activeElement !== inputField) inputField.focus(); 
  });
  inputField.addEventListener('blur', (event) => {
      if (isIconClicked) {
          isIconClicked = false;
          event.preventDefault();
          inputField.focus();
      }
  });
  inputField.addEventListener('mousedown', (event) => {
      if (document.activeElement === inputField) event.preventDefault();
  });


  const inputFieldInBurger = document.querySelector('#slide-header-buttons .input');
  const iconInputInBurger = document.querySelector('#slide-header-buttons .icon-input');
  let isIconClickedInBurger = false;

  iconInputInBurger.addEventListener('mousedown', (event) => {
    isIconClickedInBurger = true; 
    if (document.activeElement !== inputFieldInBurger) inputFieldInBurger.focus(); 
  });
  inputFieldInBurger.addEventListener('blur', (event) => {
      if (isIconClickedInBurger) {
          isIconClickedInBurger = false;
          event.preventDefault();
          inputFieldInBurger.focus();
      }
  });
  inputFieldInBurger.addEventListener('mousedown', (event) => {
      if (document.activeElement === inputFieldInBurger) event.preventDefault();
  });
});
