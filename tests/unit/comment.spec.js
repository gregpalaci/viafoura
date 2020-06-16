import { shallowMount } from "@vue/test-utils";
import AuthorImage from "@/components/AuthorImage.vue";
import CommentFooter from "@/components/CommentFooter.vue";
import CommentHeader from "@/components/CommentHeader.vue";

import mockData from "@/data";

const { replies, upvotes, downvotes, commentDate } = mockData;

describe("AuthorImage.vue", () => {
  it("renders the correct gravatar source", () => {
    const expected =
      "https://www.gravatar.com/avatar/cfba5caac2948ea97d9ab49a509601bf?s=100";
    const imgHash = "cfba5caac2948ea97d9ab49a509601bf";
    const wrapper = shallowMount(AuthorImage, {
      propsData: { imgHash },
    });

    expect(wrapper.find("img").attributes().src).toBe(expected);
  });
});

describe("CommentFooter.vue", () => {
  it("renders comment footer correctly", () => {
    const wrapper = shallowMount(CommentFooter, {
      propsData: {
        repliesCount: replies.length,
        upvotes,
        downvotes,
      },
    });

    expect(wrapper.find(".count").text()).toBe("21");
    expect(wrapper.find("#upvoteCount").text()).toBe("126");
    expect(wrapper.find("#downvoteCount").text()).toBe("0");
    wrapper.vm.handleUpvote();
    expect(wrapper.emitted()).toEqual({ handleVote: [["upvotes"]] });
  });
});

describe("CommentHeader.vue", () => {
  it("renders comments header correctly", () => {
    const dataFetched = true;
    const isAuthor = true;
    const profile = {
      id: "5665411",

      profileUrl: "http://gravatar.com/gregbenner",
      preferredUsername: "gregbenner",
      name: {
        givenName: "Greg",
        familyName: "Benner",
        formatted: "Greg Benner",
      },
      displayName: "gregbenner",
    };
    const wrapper = shallowMount(CommentHeader, {
      propsData: { commentDate, dataFetched, isAuthor, profile },
    });
    const username = wrapper.find(".username");
    expect(username.text().toLowerCase()).toMatch("greg benner");
  });
});
