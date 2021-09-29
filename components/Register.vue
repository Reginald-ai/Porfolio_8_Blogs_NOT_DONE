<template>
  <b-container class="register">
    <b-row
      class="d-flex align-items-center justify-content-center mx-auto text-center text-lg-left"
    >
      <b-col lg="6" sm="12">
        <h1>
          NEVER MISS A POST. REGISTER FOR YOUR FREE <br />
          ACCOUNT TODAY!
        </h1>
      </b-col>
      <b-col
        lg="4"
        offset-lg="2"
        sm="12"
        class="justify-content-lg-end d-lg-flex mt-3 mt-lg-0"
      >
        <NuxtLink to="#" class="btn-register"> Register for Rexsahvan</NuxtLink>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.register {
  padding: 120px 0;
  .btn-register {
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
    background-color: #23272b;

    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      color: #fff;
      background-color: #49637e;
      border-color: #4f6575;
      text-decoration: none;
    }
  }
}
</style>
