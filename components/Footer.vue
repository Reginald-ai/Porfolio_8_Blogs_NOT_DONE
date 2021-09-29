<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-12 dd">
          <h1 class="footer-title">Color Pbs</h1>
          <ul class="navbar-nav">
            <li class="navbar-item">
              <a href="#" class="nav-link">
                <!-- //icons -->

                <YouTube class="svg-w" />
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                <!-- //icons -->

                <Twitter class="svg-w" />
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                <!-- //icons -->

                <Instagram class="svg-w" />
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                <!-- //icons -->

                <Linkedin class="svg-w" />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-sm-12">
          <ul class="navbar-nav flex-row flex-lg-column">
            <li class="nav-item pr-3">
              <a href="#" class="nav-link text-white ">Home</a>
            </li>
            <li class="nav-item pr-3">
              <a href="#" class="nav-link text-white ">Blogs</a>
            </li>
            <li class="nav-item pr-3">
              <a href="#" class="nav-link text-white ">Login</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-sm-12">
          <p class="text-light">Copyright 2021 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
//icons
import YouTube from "@/assets/img/icons/youtube-brands.svg";
import Twitter from "@/assets/img/icons/twitter-brands.svg";
import Instagram from "@/assets/img/icons/instagram-brands.svg";
import Linkedin from "@/assets/img/icons/linkedin-brands.svg";
//end icons
export default {
  name: "footer-vue",
  components: {
    //icons

    YouTube,
    Twitter,
    Instagram,
    Linkedin
    //end icons
  }
};
</script>

<style lang="scss">
footer {
  background: rgba(41, 41, 41, 0.867);
  padding: 40px;
  .container {
    .row {
      .dd {
        .footer-title {
          color: #fefefe;
          font-size: 30px;
        }
        .navbar-nav {
          flex-direction: row;
          .nav-link {
            padding-right: 10px;
          }
          .svg-w {
            width: 25px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
