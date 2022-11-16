import React from "react";

import styles from './TweetItem.module.css'

// const DUMMY_TWEET = {
//   id: "t1",
//   text: "#allcraft what do you think about instead of reinventing the wheel each time, wow combines different systems from previous expansions where all or atleast the best ones stay and work together? Like PoE's leagues.",
//   date: "12:32 AM · Jun 5, 2020",
//   user: "Galin Malchev",
// };

const TweetItem = (props) => {
  return (
    <div className={styles.main}>
      <div>
        <p>{props.user}</p>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
      <div>
        <date>{props.date}</date>
      </div>
    </div>
  );
};

export default TweetItem;
