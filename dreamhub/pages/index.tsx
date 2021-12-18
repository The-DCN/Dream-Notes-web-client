import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Home.module.css";
import Link from "next/link";
import SleepAnalysis from "../public/sleepanalysis.svg";
import Dreamer from "../public/dreamer.svg";
import CountingStars from "../public/counting_stars.svg";
import Footer from "../components/footer"

const Home: NextPage = () => {
  return (

    <div className={styles.container}>
      <title>
        Dream Notes - Sleep now and tells us all about it in the morning
      </title>
      <section className={styles.hero_container}>
       
        <header className={styles.landing_header}>
          <div className={styles.landing_nav}>
            <div className={styles.landing_nav_title_container}>
              <span className={styles.landing_nav_title}>Dream Notes</span>
            </div>
            <div className={styles.landing_nav_links}>
              <div>
                <Link href="/login">
                  <a href="">Login</a>
                </Link>
              </div>
              <div>
                <Link href="register">
                  <a href="">Register</a>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>
        
          <div className={styles.hero_main_container}>
            <div className={styles.hero_main_flexitem_1}>
              <Image src={SleepAnalysis} alt="Sleep Analysis"></Image>
            </div>
            <div className={styles.hero_main_flexitem_2}>
              <span className={styles.hero_main_subtitle}>Sleep now and tell us all about it in the morning</span>
            </div>
          </div>

          <section className={styles.landing_subsection}>
            <div className={styles.landing_subsection_container}>
              <div className={styles.landing_subsection_flexitem}>
                <div className={styles.landing_subsection_flexitem_image}><Image src={Dreamer}></Image></div>
                <div><div className={styles.landing_subsection_text}>Go out and see the world. The world’s waiting on you to explore all that it has to offer.</div></div>
              </div>
              <div id={styles.counting_stars} className={styles.landing_subsection_flexitem}>
                <div><Image height="230px" width="200px"  src={CountingStars} alt="counting stars"></Image></div>
                <div><div className={styles.landing_subsection_text}>Have sweet dreams. Take the chance venture in your dreamland.</div></div>
              </div>
            </div>
            <div className={styles.landing_subsection_subtitle}>
             <div className={styles.landing_subsection_subtitle_text}>You can record the amount you slept that night and write anything that’s on your mind.</div> 
            </div>
          </section>
        </main>
          <Footer/>
      </section>
      
    </div>
  );
};

export default Home;
