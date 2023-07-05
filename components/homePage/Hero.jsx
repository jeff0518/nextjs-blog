import Image from "next/image";
import classes from "./Hero.module.css"
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jeff.JPG"
          alt="An image showing jeff"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jeff</h1>
      <p>
        This blog is created using a newly learned technology called Next.js.
      </p>
    </section>
  );
}

export default Hero;
