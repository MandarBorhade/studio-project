import './contact.css';

const Contact = () => {
    return (

        <>
        <section className="contact-hero">
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

export default Contact;