<template>
  <b-col md="6" lg="4" class="mb-5">
    <b-card
      :img-src="require(`../assets/img/blogCards/${post.blogCoverPhoto}.jpg`)"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 bs-card position-relative"
    >
      <div v-show="editPost" class="option-icons">
        <div class="icon-parent">
          <Edit class=" icon  edit" />
        </div>
        <div class="icon-parent">
          <Delete class=" icon delete" />
        </div>
      </div>
      <h1>{{ post.blogTitle }}</h1>
      <!-- <h6>
          Posted on:
          {{
            new Date(post.blogDate).toLocaleString("en-us", {
              dateStyle: "long"
            })
          }}
        </h6> -->
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      <NuxtLink class="link" to="#">
        View The Post
      </NuxtLink>
    </b-card>
  </b-col>
</template>

<script>
import Arrow from "../assets/img/icons/arrow-right-light.svg";
import Edit from "../assets/img/icons/edit-regular.svg";
import Delete from "../assets/img/icons/trash-regular.svg";
export default {
  props: ["post"],
  components: {
    Arrow,
    Edit,
    Delete
  },
  computed: {
    editPost() {
      return this.$store.state.editPost;
    }
  }
};
</script>

<style lang="scss">
.bs-card {
  transition: all 0.15s ease;
  &:hover {
    background: #c5c5c5;
  }
  .option-icons {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    top: 10px;
    right: 0;
    transition: all 0.15s ease;
    .icon-parent {
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      background: #e7e7e7;
      border-radius: 50%;
      padding: 13px;
      margin-right: 5px;
      width: 48px;
      display: flex;
      align-self: center;
      justify-content: center;
      transition: all 0.15s ease;
      &:hover {
        background: #a1a1a1;
      }
      .icon {
        width: 15px;
      }

      .edit {
        width: 19px;
      }
    }
  }
}
</style>
