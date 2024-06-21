import styles from './ProjectsStyles.module.css';
import airplane from '../../assets/airplane.png'
import calculator from '../../assets/calculator.png';
import tictactoe from '../../assets/strategic-plan.png';
import taskmanager from '../../assets/task.png';
import ProjectCard from '../../common/ProjectCard';
import portfolio from '../../assets/professional-portfolio.png';
import weathericon from '../../assets/weather-app.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tictactoe}
          link="https://tic-tac-toe-c1876.web.app/"
          h3="Tic-tac-toe"
          p="Traditinal tic-tac-toe"
        />
        <ProjectCard
          src={taskmanager}
          link="https://to-do-list-3909d.web.app/"
          h3="Task manager"
          p="Your personalized work manager"
        />
        <ProjectCard
          src={airplane}
          link="https://hope-rm6q.onrender.com/"
          h3="Wanderlust"
          p="Your personal travelling app"
        />
        <ProjectCard
          src={calculator}
          link="https://investmentcalculator-4f426.web.app/"
          h3="InvestPro"
          p="Your Personal Investment Calculator"
        />
        <ProjectCard
          src={portfolio}
          h3="Mohit Singh"
          p="My own portfolio website"
        />
        <ProjectCard
          src={weathericon}
          link="https://weather-app-eosin-eight-12.vercel.app/"
          h3="WeatherApp: Your Personal Weather Companion"
          p="WeatherApp is a sleek and intuitive weather forecasting application designed to keep you informed about the latest weather conditions in your location and around the world. "
        />
      </div>
    </section>
  );
}

export default Projects;
