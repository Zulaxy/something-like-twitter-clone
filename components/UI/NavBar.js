import classes from "./NavBar.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Twitter Clone</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
          <li>
            <Link href="/new-tweet">Tweet Now</Link>
          </li>
          <li>
            <Link href="/tweets">All Tweets</Link>
          </li>
          <li>
            <Link href="/auth">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
