<template>
  <div class="blog-card-wrap">
    <b-container>
      <!-- <b-form-checkbox switch size="lg">Large</b-form-checkbox> -->
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input v-model="editPost" type="checkbox" />
      </div>
      <b-row class="blog-cards ">
        <BlogCards
          :post="post"
          v-for="(post, index) in sampleBlogCards"
          :key="index"
          class="bsw-cards"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rexsahvan || Blogs"
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      }
    }
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false);
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  padding-top: 150px;
  background: #909090;
  .toggle-edit {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin-bottom: 20px;

    span {
      margin-right: 16px;
      color: #fff;
      font-size: 18px;
      padding-left: 10px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 65px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: rgb(226, 225, 225);
      left: 38px;
    }
  }
}
</style>
