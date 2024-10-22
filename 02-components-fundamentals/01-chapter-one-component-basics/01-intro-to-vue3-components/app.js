Vue.createApp()
  .component("click-counter", {
    template: `
        <button @click="count++">
            Clicked me {{ count }} times.
        </button>
    `,
    data() {
      return {
        count: 0,
      };
    },
  })
  .mount("#app");
