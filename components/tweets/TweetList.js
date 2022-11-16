import React from "react";

import TweetItem from "./TweetItem";
import styles from "./TweetList.module.css";

// const DUMMY_TWEET = {
//     id: "t1",
//     text: "#allcraft what do you think about instead of reinventing the wheel each time, wow combines different systems from previous expansions where all or atleast the best ones stay and work together? Like PoE's leagues.",
//     date: "12:32 AM · Jun 5, 2020",
//     user: "Galin Malchev",
//   };

const TweetList = (props) => {
  return (
    <ul className={styles.main}>
      {props.tweets.map((tweet) => (
        <TweetItem
          key={tweet.id}
          id={tweet.id}
          text={tweet.text}
          date={tweet.date}
          user={tweet.user}
        />
      ))}
    </ul>
  );
};

export default TweetList;
