<template>
  <div class="semai_hero">
    <div class="overlay"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-12 col-md-6 text-center text-md-start mb-5 mb-md-0">
          <div v-if="post.welcomeScreen">
            <h3 class="text-light big-font">{{ post.title }}</h3>
            <p class="text-light">{{ post.blogPost }}</p>
          </div>
          <div v-else class="text-light pb-2">
            <h1>{{ post.title }}</h1>
            <p>{{ post.blogHtml }}</p>
          </div>
          <NuxtLink v-if="post.welcomeScreen" class="link-blog" to="#"
            >Get Started</NuxtLink
          >
          <NuxtLink v-else class="link-blog" to="#">View the post</NuxtLink>
          <!-- Grow your business and increase your sales with a strengthened
            online presence. -->
        </div>
        <div class="col-sm-12 col-md-6 pb-5">
          <SvgBg class="w-100" v-if="post.welcomeScreen" />
          <PostSvg class="w-100" v-else />
        </div>
      </div>
    </div>
    <!-- <img
      class="w-100 position-relative"
      src="@/assets/img/home/shape-h2.webp"
      alt=""
    /> -->
  </div>
</template>

<script>
import PostSvg from "@/assets/img/home/undraw_Post_re_mtr4.svg";
import Coni from "@/assets/img/home/coni.svg";
import SvgBg from "@/assets/img/home/undraw_Outer_space_re_u9vd.svg";
// import SvgBg from "@/assets/img/home/undraw_Outer_space_re_u9vd.svg";
export default {
  components: {
    //bg
    Coni,
    SvgBg,
    PostSvg
    //bg end
  },
  props: ["post"]
};
</script>

<style lang="scss">
.semai_hero {
  background-position: center;
  background-repeat: no-repeat;
  background: url("~assets/img/home/Wave-100s-1504px.svg?inline");
  position: relative;
  padding-top: 150px;
  background-size: cover;

  .overlay {
    background: linear-gradient(
      234deg,
      rgba(20, 51, 100, 0.3) 19%,
      #653af0 100%
    );
    opacity: 0.9;
    padding-top: 150px;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .container {
    position: relative;
    z-index: 99;
    .link-blog {
      color: #fff;
      transition: all 0.15s ease;
      padding: 10px;
      border: 1px solid white;
      &:hover {
        background: #653af0;
        text-decoration: none;
      }
    }
  }

  .btn-hero {
    font-size: 12px;
    font-weight: 500;
    border-radius: 3px;
    min-width: 110px;
    height: 38px;
    text-align: center;
    font-family: Poppins, sans-serif;
    transition: 0.15s ease-in-out;
    background-color: #d4269e;
    color: white;
    border: none;

    &:hover {
      background-color: #f84cc2;
    }
  }

  .big-font {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.32;
    margin-bottom: 0.55em;
  }

  .small-font {
    display: block;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: white;
  }

  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
  }
}
.semai_hero:nth-child(even) {
  .container {
    .row {
      flex-direction: row-reverse;
    }
  }
}
</style>
