import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({ title, imageUrl }) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            {/* <h1>Let's watch movie together</h1> */}
            <h1>{title}</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              facilis a neque nesciunt aliquid aut eligendi, corporis animi
              laudantium? Et tenetur voluptatibus esse minima? Illo alias
              excepturi ratione mollitia beatae.
            </p>
            <Link href="./movie">
              <button>Explore Movie</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image src={imageUrl} alt="hero image" width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Herosection;
