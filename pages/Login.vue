<template>
  <div class="wrapper-login">
    <b-container fluid>
      <nav class="nav-rlogin">
        <div class="nav-bg">
          <h1 class="nav-rtitle">Rexsahvan</h1>
        </div>
      </nav>

      <div class="wrap-2">
        <b-container fluid class="h-100">
          <b-row class="h-100">
            <b-col sm="12" md="6">
              <div class="svg-cover">
                <MailSvg class="svg-s" />
              </div>
            </b-col>
            <b-col sm="12" md="6" class="align-self-md-center px-0">
              <b-container fluid="sm">
                <div class="login-hero">
                  <div class="login-bg">
                    <h1 class="login-hero-title">Sign-in</h1>
                    <form action="">
                      <div class="i-grp">
                        <span>Email:</span>
                        <input type="email" v-model="email" />
                      </div>
                      <div class="i-grp">
                        <span>Password:</span>
                        <input type="password" v-model="password" />
                      </div>
                      <div class="d-flex">
                        <ErrSvg v-show="error" />
                        <p v-show="error">{{ this.errorMsg }}</p>
                      </div>

                      <div class="no-account">
                        <span>No Account?</span>
                        <NuxtLink to="/RegisterL" class="daw-sa"
                          >Create here</NuxtLink
                        >
                      </div>
                      <NuxtLink to="/ForgotPword" class="forgot-p"
                        >Forgot account?</NuxtLink
                      >
                      <div class="nx-wrapper">
                        <button @click.prevent="signIn" class="nx-login">
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
import MailSvg from "@/assets/img/login/Group 2.svg";
import ErrSvg from "@/assets/img/login/ci_error.svg";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: {
    MailSvg,
    ErrSvg
  },
  layout: "No-nav",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: ""
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "index", query: { page: 2 } });
          this.error = false;
          this.errorMsg = "";
          console.log(firebase.auth().currentUser.uid);
        })
        .catch(err => {
          this.error = true;
          this.errorMsg = err.message;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-login {
  height: 100vh;
  .nav-rlogin {
    padding: 20px 0;
    .nav-bg {
      width: 100%;
      height: 50px;
      background: linear-gradient(
        92.2deg,
        #464646 24.45%,
        rgba(130, 130, 137, 0.96) 104.46%
      );
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
    border-radius: 7px;
    .nav-rtitle {
      width: 147px;
      height: 31px;

      font-family: Quicksand;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
    }
  }
  .wrap-2 {
    width: 100%;
    height: 712px;

    background: linear-gradient(
      165.67deg,
      #c5c5c5 2.4%,
      rgba(80, 90, 115, 0.17) 99.24%
    );
    border-radius: 14px;
    .svg-cover {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 85px;
      .svg-s {
        @include breakpoint-up(medium) {
          width: 569px;
          height: 476px;
        }
      }
    }
    .login-hero {
      // padding: 25px 10px;
      font-size: 12px;
      @include breakpoint-up(medium) {
        font-size: 13px;
      }
      @include breakpoint-up(large) {
        max-width: 510px;
        margin: 0 auto;
        font-size: 14px;
      }
      @include breakpoint-up(xlarge) {
        max-width: 551px;
        font-size: 15px;
      }
      .login-bg {
        width: 100%;
        height: 329px;
        background: linear-gradient(
          148.45deg,
          rgba(84, 84, 84, 0.71) 19.02%,
          rgba(11, 11, 12, 0.9) 101.89%
        );
        border-radius: 23px;

        .login-hero-title {
          font-family: Quicksand;
          font-style: normal;
          font-weight: bold;
          font-size: 2.5em;
          line-height: 30px;
          text-align: center;
          padding: 25px 0px;
          color: #ffffff;
        }
        form {
          .i-grp {
            position: relative;
            margin: 0px 25px;
            margin-bottom: 20px;
            span {
              position: absolute;
              left: 0;
              top: 0;
              font-family: Quicksand;
              font-style: normal;
              font-weight: bold;
              font-size: 1em;
              line-height: 15px;
              color: #ffffff;
              padding: 10px 10px;
            }
            input {
              width: 100%;
              height: 36px;
              background: transparent;
              border: 1px solid rgba(255, 255, 255, 0.62);
              box-sizing: border-box;
              outline: none;
              color: #ffffff;
            }
          }
          .i-grp:nth-child(1) {
            input {
              padding-inline-start: 43px;
              @include breakpoint-up(medium) {
                padding-inline-start: 45px;
              }
              @include breakpoint-up(large) {
                padding-inline-start: 48px;
              }
              @include breakpoint-up(xlarge) {
                padding-inline-start: 51px;
              }
            }
          }
          .i-grp:nth-child(2) {
            margin-bottom: 10px;
            input {
              padding-inline-start: 66px;
              @include breakpoint-up(medium) {
                padding-inline-start: 71px;
              }
              @include breakpoint-up(large) {
                padding-inline-start: 75px;
              }
              @include breakpoint-up(xlarge) {
                padding-inline-start: 80px;
              }
            }
          }
          .d-flex {
            margin-left: 27px;
            svg {
              margin-right: 5px;
            }
            p {
              font-family: Quicksand;
              font-style: normal;
              font-weight: bold;
              font-size: 1em;
              line-height: 15px;

              color: #ffffff;
            }
          }
          .no-account {
            display: flex;
            font-family: Quicksand;
            font-style: normal;
            font-weight: bold;
            font-size: 1em;
            line-height: 15px;
            margin-left: 27px;
            margin-bottom: 15px;
            color: #ffffff;
            position: relative;
            span {
              margin-right: 5px;
            }
            .daw-sa {
              position: relative;
              color: #ffffff;
              &::after {
                content: "";
                position: absolute;
                display: block;
                width: 70px;
                height: 2px;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
                background: #11bfda;
              }
              &:hover {
                text-decoration: none;
                color: #dbdbdb;
              }
            }
          }
          .forgot-p {
            font-family: Quicksand;
            font-style: normal;
            font-weight: bold;
            font-size: 1em;
            line-height: 15px;
            margin-left: 27px;
            margin-bottom: 15px;
            transition: all 0.15s ease;
            color: #ff49ed;
          }
        }
        .nx-wrapper {
          display: flex;
          flex-direction: row-reverse;
          margin-right: 27px;
          .nx-login {
            color: #ffffff;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.62);
            box-sizing: border-box;
            padding: 10px 20px;
            font-size: 1em;
            &:hover {
              text-decoration: none;
              background: #3e3e3ed9;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
