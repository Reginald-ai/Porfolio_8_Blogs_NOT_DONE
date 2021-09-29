<template>
  <header class="">
    <div
      @scroll="updateScroll"
      id="navbar_top"
      :class="{ sticky: scrollPosition }"
      class="navbars fixed-top"
    >
      <div class="container">
        <div class="brand-left">
          <!-- <img src="../assets/img/Bag_object.svg" alt="" width="50px" height="50px" /> -->
          <h2 class="navbars_brand">Rexsahvan</h2>
        </div>

        <button @click="btn_navbar_toggle" class="navbars_btn_toggle">
          <span></span>
        </button>

        <ul class="navbars_nav">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>
            <NuxtLink to="#">Sources</NuxtLink>
          </li>
          <li><NuxtLink to="#">Gallery</NuxtLink></li>
          <li>
            <NuxtLink to="/Blogs">Blogs</NuxtLink>
          </li>
          <li><NuxtLink to="#">About</NuxtLink></li>
          <!-- <li><NuxtLink to="#">Login</NuxtLink></li> -->
          <NuxtLink to="/Login" class="btn ms-lg-4 btn-custom-nav"
            >Create Account</NuxtLink
          >
          <!-- <b-button pill variant="info" >Login</b-button> -->
        </ul>
      </div>
    </div>
    <div class="header_menu fixed-top">
      <ul :class="{ open: isActive }" class="navbars_nav">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
          <span class="span-bg"> </span>
          <i class="fa fa-home custom-fa" aria-hidden="true"></i>
        </li>
        <li>
          <NuxtLink to="#">Sources</NuxtLink>

          <span class="span-bg heart">
            <i class="fa fa-cog custom-fa" aria-hidden="true"></i>
          </span>
        </li>
        <li>
          <NuxtLink to="#">Gallery</NuxtLink>
          <span class="span-bg book">
            <i class="fa fa-check-square custom-fa" aria-hidden="true"></i>
          </span>
        </li>

        <li>
          <NuxtLink to="#">Blog</NuxtLink>

          <span class="span-bg brain">
            <i class="fa fa-user custom-fa" aria-hidden="true"></i>
          </span>
        </li>
        <li>
          <NuxtLink to="#">About</NuxtLink>
          <span class="span-bg">
            <i class="fa fa-book custom-fa" aria-hidden="true"></i>
          </span>
        </li>
        <!-- <button class="btn btn-secondary btn-custom-nav">Contact</button> -->
        <NuxtLink to="/Login" class="btn ms-lg-4 btn-custom-nav"
          >Create Account</NuxtLink
        >
      </ul>
    </div>
  </header>
</template>

<script>
import MenuBurger from "@/assets/img/icons/bars-regular.svg";
export default {
  components: {
    MenuBurger
  },
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windownWidth: null,
      isActive: false,
      scrollPosition: null
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    btn_navbar_toggle() {
      this.isActive = !this.isActive;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>

<style lang="scss">
// header {
//   font-family: "Open Sans", sans-serif;
//   .navbar {
//     border-bottom: #dcdcdc 1px solid;
//     .navbar-br {
//       .navbar-title {
//         color: #3a3a32;
//         font-size: 30px;
//         transition: all 0.15s ease;
//         &:hover {
//           text-decoration: none;
//           color: #575757;
//         }
//       }
//     }
//     .menu-burger {
//       width: 25px;
//       cursor: pointer;
//     }
//     .navbar-nav {
//       //   font-family: "Quicksand", sans-serif;

//       flex-direction: row;
//       .nav-link {
//         padding-left: 15px;
//         // color: #504f5a;
//         font-size: 17px;
//       }
//     }
//   }
//   .mobile-nav {
//     padding: 20px;
//     width: 70%;
//     max-width: 250px;
//     display: flex;
//     flex-direction: column;
//     position: fixed;
//     height: 100%;
//     background: #3a3a32;
//     list-style-type: none;
//     top: 0;
//     left: 0;
//   }
// }

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

header {
  position: relative;
  font-family: "poppins";

  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    // width: 83% !important;
  }

  .navbars {
    display: flex;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
    opacity: 0.9;
    .solid {
      background-color: #fff;
      padding-top: 10px;
      padding-bottom: 10px;
      // box-shadow: 0 0 10px rgba(0 0 0 / 15%);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 15%);
    }

    .brand-left {
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
      }
    }

    &_brand {
      margin: 0;
      font-size: 1.25rem;
      text-decoration: none;
      white-space: nowrap;
      padding-left: 20px;
      color: #fff;
    }

    &_btn_toggle {
      display: block;
      outline: none;
      border: none;
      background: none;
      color: #fff;
      font-size: 28px;

      span {
        background: #fff;
        width: 25px;
        height: 3px;
        display: block;
      }

      span::after {
        content: "";
        transform: translateY(-11px);
        background: #fff;
        width: 25px;
        height: 3px;
        display: block;
      }

      span::before {
        content: "";
        background: #fff;
        width: 25px;
        height: 3px;
        display: block;
        transform: translateY(8px);
      }

      &.opens span {
        transform: translateX(-50px);
        background: transparent;
      }

      &.opens span::before {
        transform: rotate(45deg) translate(37px, -35px);
        transition: all 0.3s ease;
      }

      &.opens span::after {
        transform: rotate(-45deg) translate(37px, 35px);
        transition: all 0.3s ease;
      }

      @include breakpoint-up(medium) {
        display: none;
      }
    }

    &_nav {
      // display: flex;
      // margin: 0;
      // flex-direction: column;
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, 8%);
      // background: white;
      // width: 85%;
      // padding: 20px;
      // text-align: center;
      // justify-content: center;
      // // opacity: 0;
      // margin-top: -520px;

      display: none;

      @include breakpoint-up(medium) {
        display: flex;
        align-items: center;
        margin: 0;
      }

      li {
        border: none;
        position: relative;
        list-style: none;

        // width: 100%;
        @include breakpoint-up(medium) {
          padding: 12px;
        }

        a {
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;

          @include breakpoint-up(medium) {
            &::after {
              content: "";
              position: absolute;
              width: 0px;
              height: 5px;
              left: 50%;
              bottom: 0;
              background-color: white;
              transition: all ease-in-out 0.2s;
            }

            &:hover::after {
              width: 100%;
              left: 0;
            }
          }

          @include breakpoint-up(medium) {
            padding: 0;
            border: none;
            width: 0%;
            color: #fff;
          }

          // :hover{

          // }
        }
      }

      .btn-custom-nav {
        @include breakpoint-up(medium) {
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
        }

        &:hover {
          background-color: #f84cc2;
        }

        // margin-top: 20px;
      }
    }
  }

  .sticky {
    background: white;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
    .navbars_brand {
      margin: 0;
      font-size: 1.25rem;
      text-decoration: none;
      white-space: nowrap;
      padding-left: 20px;
      color: rgb(92, 86, 86);
    }

    li {
      a {
        color: rgb(92, 86, 86);
        font-size: 16px;
        font-weight: 500;

        &::after {
          content: "";
          position: absolute;
          width: 0px;
          height: 5px;
          left: 50%;
          bottom: 0;
          background-color: rgb(92, 86, 86);
          transition: all ease-in-out 0.2s;
        }

        &:hover::after {
          width: 100%;
          left: 0;
        }
      }
    }

    .navbars_btn_toggle span,
    span::after,
    span::before {
      background-color: rgb(26, 26, 26);
    }

    .navbars_btn_toggle.opens span {
      height: 0;
      background-color: black;
    }
  }

  .header_menu {
    .navbars_nav {
      display: flex;
      margin: 0;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20%);
      background: white;
      width: 85%;
      padding: 20px;
      text-align: center;
      justify-content: center;
      opacity: 0;
      z-index: 999;
      transition: opacity 0.3s ease;
      border-radius: 0px 0px 20px 20px;
      margin-top: -700px;

      @include breakpoint-up(large) {
        opacity: 0;
        margin: 0;
        margin-top: -700px;
      }

      &.open {
        opacity: 100;
        margin-top: 0px;

        @include breakpoint-up(large) {
          opacity: 0;
          margin-top: 0px;
        }
      }

      li {
        text-decoration: none;
        position: relative;
        background-color: white;
        box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.3);
        border-radius: 30px 30px 30px 0;
        width: 100%;
        display: block;
        padding: 20px;
        // border: 1px solid;
        margin-top: 8px;
        list-style: none;
        // width: 100%;

        a {
          // text-decoration: none;

          // color: rgb(92, 86, 86);
          // box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.06);
          // border-radius: 30px 30px 30px 0;
          // width: inherit;
          // display: block;
          // padding: 20px;
          // border: 1px solid;
          // margin-top: 8px;
          color: rgb(92, 86, 86);
          z-index: 999;
        }

        &:nth-of-type(5) {
          margin-bottom: 12px;
        }

        .span-bg {
          background-color: #ffa000;
          width: 120px;
          height: 64px;
          float: right;
          position: absolute;
          border-radius: 30px 30px 30px 0;
          right: 0px;
          top: 0px;
          transition: all 0.3s;

          &::after {
            content: "";
            width: 0;
            height: 0;
            border-top: 65px solid #fff;
            border-right: 55px solid transparent;
            position: absolute;
            top: 0px;
            left: -2px;
          }
        }

        .custom-fa {
          position: absolute;
          right: 25px;
          font-size: xx-large;
          top: 15px;
          color: #fff;
        }

        &:hover a {
          z-index: 999;
          position: relative;
          color: white;
        }

        &:hover .span-bg {
          width: 100%;
          // border-radius: 30px;
          color: white;
        }

        &:hover .span-bg::after {
          display: none;
          opacity: 0.1;
        }
      }
    }
  }
}
.heart {
  background-color: #ff586b !important;
}

.book {
  background-color: #00b7c4 !important;
}

.brain {
  background-color: #8bc34a !important;
}
</style>
