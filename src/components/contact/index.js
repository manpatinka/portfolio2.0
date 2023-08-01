import './index.scss'
import { Triangle } from 'react-loader-spinner'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8piv1rb', 'template_kwaswvr', form.current, '6ijRi64rg6PKmmfm9')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    };


    return (
        <>
            <div className="contact-container">
                <h1>Contact me</h1>
                <div className="structure">
                    <div className="left-side">
                        <div class="description">
                            <h3>Let's Work Together:</h3>
                            <p>Whether you're a small business owner, a startup enthusiast, or anyone seeking to establish a strong online presence, I am here to help. I welcome the opportunity to discuss your project requirements and provide tailored solutions that align with your goals.
                            </p></div>
                        <div className="links">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/evgeniayurkova/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="anchor-icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/evgenia.yurkova"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            className="anchor-icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/manpatinka"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="anchor-icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:eyurkv@gmail.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGoogle}
                                            className="anchor-icon"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="right-side">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <p>Send me email directly:</p>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

            <Triangle
                color="#b90e75"
                height={150}
                width={150}
                wrapperClass='loader'
            />
        </>
    );
}

export default Contact;