import './home.css';
import img1 from '../../assets/img-1.svg';
import img2 from '../../assets/img-2.svg';
import img3 from '../../assets/img-3.svg';
import img4 from '../../assets/img-4.svg';

import Card from '../card/Card.jsx';


const Home = () => {
    return (

        <>
            <section className="home-hero">
                <h1>
                    A brand and product designer working with clients globally
                </h1>

                <div className="expertise">
                    <p>Expertise</p>
                    <span>Branding</span>
                    <span>Product</span>
                    <span>Design Systems</span>
                </div>            
            </section>

            <section className="project-gallery">
                <Card cardbg = {img1}/>
                <Card cardbg = {img2}/>
                <Card cardbg = {img3}/>
                <Card cardbg = {img4}/>
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
                    <a onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/mandar-borhade/')}} style={{cursor:'pointer'}} >Linkedin</a>
                    <a onClick={(e) => {window.location.href = 'mailto:mandarborhade7@gmail.com';}} style={{cursor:'pointer'}}>Mail</a>
                </div>
            </footer>
        </>
        
    )
}

export default Home;