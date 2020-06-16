<template>
  <div>
    <img
      alt="profile photo"
      class="profile-photo"
      :src="`https://www.gravatar.com/avatar/${imgHash}?s=100`"
    />
  </div>
</template>

<script>
export default {
  name: "AuthorImage",
  props: {
    imgHash: String,
  },
};
</script>

<style lang="scss" scoped>
.profile-photo {
  width: 100px;
  height: auto;
  margin-right: 20px;
  border-radius: 50%;
}
</style>
