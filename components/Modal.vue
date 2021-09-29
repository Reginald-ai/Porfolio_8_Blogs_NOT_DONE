<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMsg }}</p>
      <button @click="modalClose">Close</button>
    </div>
  </div>

  <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal> -->
</template>

<script>
export default {
  props: ["modalMsg"],
  methods: {
    modalClose() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style lang="scss">
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }
}
</style>
