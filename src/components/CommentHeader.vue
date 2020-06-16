<template>
  <header>
    <div v-if="dataFetched" class="username">{{ profile.name.formatted }}</div>
    <div v-if="isAuthor" class="author">AUTHOR</div>
    <div class="time-ago">
      •
      <time :datetime="commentDate">{{ timeAgo }}</time>
    </div>
  </header>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default {
  name: "CommentHeader",
  props: {
    dataFetched: Boolean,
    isAuthor: Boolean,
    commentDate: String,
    profile: Object,
  },
  computed: {
    timeAgo() {
      return dayjs(this.commentDate).fromNow();
    },
  },
};
</script>

<style lang="scss" scoped>
.username {
  font-weight: bold;
  color: #2a2a2a;
  display: inline-block;
  margin-right: 10px;
}

.author {
  font-size: 0.8rem;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
  font-weight: bold;
  background: #333;
  color: #fff;
}

.time-ago {
  color: #888;
  text-transform: uppercase;
  margin: 2px 8px;
  display: inline-block;
  font-size: 0.8rem;
  time {
    margin-left: 5px;
  }
}

header img {
  border-radius: 50%;
}
</style>
