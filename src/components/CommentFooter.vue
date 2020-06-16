<template>
  <footer class="reply-section">
    <div class="reply">
      <a @click.prevent="handleReply" href="#">REPLY</a>
    </div>
    <div class="replies-count">
      <a href="#" @click.prevent="displayReplies">
        <span class="count">{{ repliesCount }}</span>
        <span>replies</span>
      </a>
    </div>

    <div class="aligned flex">
      <a @click.prevent="handleUpvote" href="#" class="upvote"></a>
      <div id="upvoteCount">{{ upvotes }}</div>
    </div>

    <div class="aligned flex">
      <a @click.prevent="handleDownvote" href="#" class="downvote"></a>
      <div id="downvoteCount">{{ downvotes }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CommentFooter",
  props: {
    repliesCount: Number,
    upvotes: Number,
    downvotes: Number,
  },
  methods: {
    handleUpvote() {
      this.$emit("handleVote", "upvotes");
    },
    handleDownvote() {
      this.$emit("handleVote", "downvotes");
    },
    handleReply() {
      alert("TODO: handling reply");
    },
    displayReplies() {
      alert("TODO: displaying replies");
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin arrow {
  background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMzk2LjYsMzUyIDQxNiwzMzEuMyAyNTYsMTYwIDk2LDMzMS4zIDExNS4zLDM1MiAyNTYsMjAxLjUgIj48L3BvbHlnb24+PC9zdmc+");
  width: 19px;
  height: 19px;
  background-size: contain;
  margin-right: 10px;
  transition: margin 0.25s ease-out;
}
.upvote {
  @include arrow;
  &:hover {
    margin-top: -5px;
  }
}

.downvote {
  @include arrow;
  transform: rotate(180deg);
  &:hover {
    margin-bottom: -5px;
  }
}

.comment-container {
  &:hover {
    footer {
      color: #9b9b9b;
    }
  }
}

.reply-section {
  transition: all 0.25s linear;
  font-size: 0.9rem;
  margin-top: 12px;
  color: #bebebe;
  display: flex;
  justify-content: space-between;
  max-width: 75%;
}

.replies-count {
  text-transform: uppercase;
  margin-right: 10px;
  a {
    color: inherit;
    text-decoration: none;
    &:hover span:nth-of-type(2) {
      text-decoration: underline;
    }
  }
  .count {
    color: #5d5d5d;
    margin-right: 5px;
  }
}

.reply a {
  color: inherit;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
  }
}
</style>
