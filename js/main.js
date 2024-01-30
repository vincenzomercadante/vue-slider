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
    goToSlide() {
      if (this.activeImage === this.allImages.length) {
        this.activeImage = 0;
      } else if (this.activeImage < 0) {
        this.activeImage = this.allImages.length - 1;
      }
    },
  },

  mounted() {},
});

// running the app
app.mount("#app");
