<template>
  <div>
    <Blog :post="welcomeScreen" />
    <Blog :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <b-container>
        <h3>View More Recent Blogs</h3>
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
    <Register />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rexsahvan || Home"
    };
  },

  data() {
    return {
      welcomeScreen: {
        title: "Websitesss Designed to Help Your Business Succeed!",
        blogPost:
          "Grow your business and increase your sales with a strengthened online presence.",
        welcomeScreen: true,
        photo: "undraw_Outer_space_re_u9vd"
      },
      sampleBlogPost: [
        {
          title: "This is a filter title",
          blogHtml: "This is filter blog post title",
          blogCoverPhoto: "dd"
        },
        {
          title: "This is a filter title",
          blogHtml: "This is filter blog post title",
          blogCoverPhoto: "dd"
        }
      ]
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>
<style lang="scss">
body {
  font-family: "Poppins", sans-serif;
  font-family: "Quicksand", sans-serif;
}
.blog-card-wrap {
  background: rgba(207, 207, 207, 0.933);
  h3 {
    padding: 40px 0;
  }
  .bsw-cards {
    transition: all 0.15s ease;
  }
  .bsw-cards:nth-child(even) {
    &:hover {
      transform: rotateZ(-2deg);
    }
  }
  .bsw-cards:nth-child(odd) {
    &:hover {
      transform: rotateZ(2deg);
    }
  }
}
</style>
