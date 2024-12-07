import "./Intro.css";
import bg from "../../assets/bg.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Akash</span>
        </span>
        <span>Java Developer</span>
        <p className="intro-para">I am a software engineer aiming to advance my career in a performance-oriented environment where personal growth aligns with organisational success. Ambitious and hardworking, I look forward to challenging my potential and earning the trust and confidence of management.</p>
        <Link>
          <button
            className="btn"
            onClick={() => {
              document
                .querySelector("#contact-page")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={contact} alt="Hire me" className="btn-image"></img>Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg"></img>
    </section>
  );
}

export default Intro;


