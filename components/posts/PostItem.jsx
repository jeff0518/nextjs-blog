import Link from "next/link";
import Image from "next/image";

import classes from "./PostsItem.module.css";
function PostItem() {
  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image />
        </div>
        <div className={classes.content}>
          <h3></h3>
          <time></time>
          <p></p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
