import "./Projects.css";
import portfolio from "../../assets/portfolio.jpeg";
import cow from "../../assets/cow.jpg"
import weather from "../../assets/weather.jpg";
import rent from "../../assets/rent.jpg"
import news from "../../assets/news.jpg";
import crypto from "../../assets/cryptochart.jpg"
import dash from "../../assets/dashboard.jpg"



function Projects() {
  return (
    <div id="projects">
      <div className="pro-heading">
        <h2 className="works-title">Project Showcase</h2>
        <span className="works-description">
        Showcasing diverse projects from Magento-integrated e-commerce platforms and dynamic tourism websites to watch shop management systems, dynamic to-do planning applications, news apps,
         and robust NestJS projects, my portfolio reflects a commitment to creating customized, user-friendly,
          and efficient solutions tailored to meet varied business needs.
        </span>
      </div>
      <Project
        title="Real-Time Cryptocurrency Price Data"
        desc="This project is a mini-website that collects and displays real-time price data for selected cryptocurrencies. The backend polls data from an API every few seconds and stores it in a MongoDB database. The frontend fetches and displays the most recent 20 data entries in a dynamic table that updates in real-time."
        img={crypto}
        git="https://github.com/skyshetty720/Crypto-tracker"
        link="https://github.com/skyshetty720/Crypto-tracker"
      />
       <Project
        title="Streamlit-Dashboard"
        desc=" I developed an interactive dashboard using Streamlit to explore the GitHub repositories dataset provided via Kaggle. The dashboard includes insightful visualizations and highlights key patterns and trends within the dataset, showcasing my ability to effectively analyze and communicate data."
        img={dash}
        git="https://github.com/skyshetty720/Streamlit-Dashboard"
        link="https://app-dashboard-xe6mg3cbr5hy2luuwkctaz.streamlit.app/"
      />

      <Project
        title="Portfolio(This Website)"
        desc="Developed a modern React JS portfolio showcasing skill showcases, detailed project descriptions, and a user-friendly Contact Me section.
Integrated direct email functionality to facilitate seamless communication, allowing visitors to easily reach out for inquiries or collaborations.
Ensured the portfolio is responsive and mobile-friendly, optimizing the viewing experience across a wide range of devices."
        img={portfolio}
        git="https://github.com/skyshetty720/Portfolio"
        link="https://skyshetty720.github.io/React-portfolio-website/"
      />
     <Project
        title="ML - Cow Disease Prediction"
        desc="I developed a machine learning project, **ML-Cow Disease Prediction**, to detect foot-and-mouth disease in cattle. The model leverages advanced algorithms to analyze symptoms and provide accurate predictions. This project aims to assist in early diagnosis and improve livestock health management."
        img={cow}
        git="https://github.com/skyshetty720/ML-Cow_Disease_Prediction"
        link="https://github.com/skyshetty720/ML-Cow_Disease_Prediction"
      />
    <Project
        title="Weather App - Android"
        desc="I developed an Android project called a **Weather App** that allows users to check the weather conditions of any city. The app integrates with a weather API to fetch real-time data seamlessly in the background. It provides detailed weather information, including temperature, humidity, and weather conditions, displayed in a user-friendly interface. The app ensures efficient data handling and smooth performance for an enhanced user experience. This project demonstrates my skills in Android development, API integration, and creating dynamic applications."
        img={weather}
        git="https://github.com/skyshetty720/Android-WeatherApp"
        link="https://github.com/skyshetty720/Android-WeatherApp"
      />
<Project
        title="Ninja-Sky Dealers"
        desc="I developed an e-commerce website from scratch using PHP, designed for buying and selling second-hand cars and bikes. The website incorporates Bootstrap as the CSS framework for a responsive and user-friendly interface. MySQL is used as the database for efficient storage and management of listings and user data. This project highlights my skills in PHP development, frontend design, and database integration."
        img={rent}
        git="https://github.com/skyshetty720/bootstrap-with-php"
        link=""
      />
       <Project
        title="ML-PegasusTextSummarization"
        desc="I developed a machine learning project utilizing the Pegasus model to summarize news articles effectively. The system takes multiple lines from news content and generates concise, meaningful summaries. This project showcases advanced NLP capabilities and ensures accurate context retention in the summaries. It highlights my skills in machine learning and working with state-of-the-art language models."
        img={news}
        git="https://github.com/skyshetty720/ML-PegasusTextSummarization"
        link="https://github.com/skyshetty720/ML-PegasusTextSummarization "
      />
    </div>
  );
}

function Project(props) {
  return (
    <div className="project">
      <div className="project-image">
        <a href={props.link} className="w-inline-block">
          <img src={props.img} alt="" className="p-img"></img>
        </a>
      </div>
      <div className="div-block">
        <h1 className="heading-2">{props.title}</h1>
        <p className="paragraph">{props.desc}</p>
        <div>
          <a
            href={props.git}
            className="btn-project"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="btn-link"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a href={props.link} className="btn-project">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="btn-link"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
