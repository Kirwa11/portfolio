import {FaDownload, FaGithub, FaLinkedin, FaReact} from "react-icons/fa";

function Home(){
    return(
        <div className="home-container">
            <img src="/images/my.JPG" alt="Maxwell Kirwa" width="150" style={{borderRadius: '50%'}} />
            <h1>Kirwa Maxwell</h1>
            <p>
                <FaReact/> ReactJs | <FaReact/> Django | Full-Stack Developer
            </p>
            <p className="intro">
                I'm a junior Software Engineer with 1 year of experience building scalable web app and APIs.

                I'm Maxwell Kirwa Kipchirchir, a passionate full-stack developer with a focus on Android development, web technologies, and UI/UX design. With hands-on experience in both frontend and backend technologies, I build efficient, scalable, and user-friendly applications.

                I’m a proud graduate of eMobilis Mobiel Technology Training , where I gained strong technical skills in JavaScript, Kotlin, Java, React, Firebase, and more. I've worked on several mobile and web-based projects, including a multi-service booking app that handles hotel, conference room, car rental, and taxi bookings.

                I’m fluent in English and Kiswahili,an effective public speaker, and a strong team player. I thrive on continuous learning, building practical solutions, and contributing to real-world projects that make a difference.
            </p>
            <div className="home-buttons">
                <a href="/Maxwell_Kirwa_CV.pdf" download className="btn">
                    <FaDownload/>Download CV
                </a>
                <a href="https://www.linkedin.com/in/maxwell-kirwa-67b656353" target="_blank" rel="noreferrer" className="btn outline">
                    <FaLinkedin/> LinkedIn
                </a>{" "}
                <a href="https://www.github.com/kirwa11" target="_blank" rel="noreferrer" className="btn outline">
                    <FaGithub/> Github
                </a>
                
            </div>
        </div>
    )
}
export default Home;