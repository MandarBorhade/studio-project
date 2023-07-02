import hand from '../../assets/waving-hand.png';
import './about.css';
import logo1 from '../../assets/logoipsum-295.svg';
import logo2 from '../../assets/logoipsum-296.svg';
import logo3 from '../../assets/logoipsum-297.svg';
import logo4 from '../../assets/logoipsum-298.svg';
import logo5 from '../../assets/logoipsum-299.svg';




const About = () => {

    return (

        <>
        
            <section className="about-hero">
                <h1>
                    Hey
                    <img src={hand} alt="waving hand" />    
                    I'm Mandar
                </h1>
            </section>

            <section className="profile-gallery">
            </section>

            <section className="about">
                <span>About</span>
                <p>A freelance designer based in the India. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</p>
            </section>

            <section className="clients">
                <span>Clients</span>
                <p>Who I have worked with</p>

                <div className="client-gallery">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                </div>
            </section>

            <section className="contact">

                <div className="text-content">
                    <h2>Let's work together.</h2>
                    <a onClick={(e) => {window.location.href = 'mailto:mandarborhade7@gmail.com';}}>Get in touch</a>
                </div>
            </section>

            <footer>
                <div className="left">
                    <p>Mandar Borhade</p>
                </div>

                <div className="right">
                    <a href="#">Twitter</a>
                    <a href="#">Linkedin</a>
                    <a href="#">Mail</a>
                </div>
            </footer>

        </>
    )
}

export default About;