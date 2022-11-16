import React from "react";

import Profile from "../../components/profile/Profile";
import TweetList from "../../components/tweets/TweetList";

const DUMMY_TWEET = [
  {
    id: "t1",
    text: "#allcraft what do you think about instead of reinventing the wheel each time, wow combines different systems from previous expansions where all or atleast the best ones stay and work together? Like PoE's leagues.",
    date: "12:32 AM · Jun 5, 2020",
    user: "Galin Malchev",
  },
  {
    id: "t2",
    text: "#asdasdasdasdasdasdasdasdasdasdasd he wheel each time, wow combines different systems from previous expansions where all or atleast the best ones stay and work together? Like PoE's leagues.",
    date: "12:32 AM · Jun 5, 2022",
    user: "Galin Malchev",
  },
  {
    id: "t3",
    text: "#asdasdasdasdasdasdasdasdasdasdasd he wheel each time, wow combines different systems from previous expansions where all or atleast the best ones stay and work together? Like PoE's leagues.",
    date: "12:32 AM · Jun 5, 2022",
    user: "Galin Donchev",
  },
  {
    id: "t4",
    text: "THIS IS A TEST OF THE FILTER fferent systems from previous expansions where all or atleast the best ones stay and work together? Like PoE's leagues.",
    date: "12:32 AM · Jun 5, 2022",
    user: "Galin Malchev",
  },
];

const userTweets = DUMMY_TWEET.filter((user) => user.user === "Galin Malchev");

const Tweets = () => {
  return (
    <div>
      <Profile />
      <h2>My Tweets</h2>
      <TweetList tweets={userTweets} />
    </div>
  );
};

export default Tweets;
