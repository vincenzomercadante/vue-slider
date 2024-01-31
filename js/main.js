// recover of createApp method
const { createApp } = Vue;

// app creation
const app = createApp({
  data() {
    return {
      allSlides: [
        {
          image: "01.webp",
          title: "Marvel's Spiderman Miles Morales",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeImage: 0,
      interval: false,
    };
  },

  methods: {
    /**
     *
     * @param {number} index clicked thumb's number that will become the new active image
     */
    goToSlide(index) {
      this.activeImage = index;
    },

    // go to the next slide
    nextSlide() {
      if (this.activeImage === this.allSlides.length - 1) this.activeImage = 0;
      else this.activeImage++;
    },

    // go to the previous slide
    prevSlide() {
      if (this.activeImage === 0) this.activeImage = this.allSlides.length - 1;
      else this.activeImage--;
    },

    // start slide change interval
    startInterval() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },

    // stop slide change interval
    stopInterval() {
      clearInterval(this.interval);
      this.interval = false;
    },
  },

  // start slide change interval on the app loading
  mounted() {
    this.startInterval();
  },
});

// running the app
app.mount("#app");
