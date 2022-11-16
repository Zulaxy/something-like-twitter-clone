import React from "react";

import styles from "./Profile.module.css";

const DUMMY_USER = {
  name: "Galin Malchev",
  handle: "@galin",
  img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  bgImage:
    "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  dateJoined: "June 2022",
};

const Profile = (props) => {
  return (
    <React.Fragment>
      <section>
        <div className={styles.profilemain}>
          <img
            src={DUMMY_USER.img}
            alt={DUMMY_USER.img}
            className={styles.profilemain__image}
          ></img>
          <div className={styles.profile__info}>
            <p>{DUMMY_USER.name}</p>
            <p>{DUMMY_USER.handle}</p>
            <p>{DUMMY_USER.dateJoined}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Profile;
