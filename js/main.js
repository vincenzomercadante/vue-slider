// recover of createApp method
const { createApp } = Vue;

// app creation
const app = createApp({
  data() {
    return {
      allImages: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
      activeImage: 0,
      interval: false,
    };
  },

  methods: {
    goToSlide(index) {
      this.activeImage = index;
    },

    nextSlide() {
      if (this.activeImage >= this.allImages.length - 1) this.activeImage = 0;
      else {
        this.activeImage++;
      }
    },

    prevSlide() {
      if (this.activeImage <= 0) this.activeImage = this.allImages.length - 1;
      else {
        this.activeImage--;
      }
    },

    startInterval() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopInterval() {
      clearInterval(this.interval);
      this.interval = false;
    },
  },

  mounted() {
    this.startInterval();
  },
});

// running the app
app.mount("#app");
