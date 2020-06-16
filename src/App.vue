<template>
  <div id="app" class="comment-container flex">
    <AuthorImage :imgHash="imgHash" />
    <div>
      <CommentHeader
        :dataFetched="dataFetched"
        :profile="profile"
        :isAuthor="isAuthor"
        :commentDate="commentDate"
      />

      <div class="comment-body">{{ commentBody }}</div>

      <CommentFooter
        :repliesCount="repliesCount"
        :upvotes="upvotes"
        :downvotes="downvotes"
        @handleVote="handleVote"
      />
    </div>
  </div>
</template>

<script>
import { sanitizeString, getMD5, handleError } from "./utilities";
import AuthorImage from "./components/AuthorImage.vue";
import CommentHeader from "./components/CommentHeader.vue";
import CommentFooter from "./components/CommentFooter.vue";
import mockData from "./data";

const {
  replies,
  upvotes,
  downvotes,
  commentDate,
  userEmail,
  commentBody,
} = mockData;

export default {
  name: "App",

  async created() {
    const sanitizedEmail = await sanitizeString(userEmail).catch(handleError);
    this.imgHash = await getMD5(sanitizedEmail).catch(handleError);
    this.profile = (
      await this.getProfile(this.imgHash).catch(handleError)
    ).entry[0];
    this.dataFetched = true;
  },

  components: {
    CommentHeader,
    CommentFooter,
    AuthorImage,
  },

  data() {
    return {
      commentBody,
      imgHash: "",
      profile: {},
      isAuthor: true,
      replies,
      commentDate,
      upvotes,
      downvotes,
      dataFetched: false,
    };
  },

  computed: {
    repliesCount() {
      return this.replies.length;
    },
  },

  methods: {
    async getProfile(imgHash) {
      return await (await fetch(`https://en.gravatar.com/${imgHash}.json`))
        .json()
        .catch(handleError);
    },
    handleVote(type) {
      this[type]++;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
}

.comment-container {
  max-width: 550px;
  margin: auto;
}

.comment-body {
  margin-top: 5px;
  line-height: 1.25;
}

.aligned {
  align-items: center;
  justify-content: center;
}
</style>
