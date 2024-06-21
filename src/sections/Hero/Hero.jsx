import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import codelight from '../../assets/code2.png'
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import code from "../../assets/code.png"
import ninja from "../../assets/ninja.png"

import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const codeicon=theme=== 'light'? code :codelight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mohit
          <br />
          Singh
        </h1>
        <h2>Final Year student at NIT kurukshetra</h2>
        <span>
          <a href="https://leetcode.com/u/infinite_void_17/" target="_blank">
            <img src={codeicon} alt="leetcode" />
          </a>
          <a href="https://www.naukri.com/code360/profile/mark53" target="_blank">
            <img src={ninja} alt="coding ninjas" />
          </a>
          <a href="https://github.com/a1d3f4/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/mohit-singh-02234923a/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.info}>
          Hi!! you are looking at the personalised portfolio website for Mr. Mohit Singh a bonafide student of Nit Kurukshetra.

        </p>
      </div>
    </section>
  );
}

export default Hero;
