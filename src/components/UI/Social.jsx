import React, { useEffect } from 'react'
import "../style/Hero.css"

const Social = ({ theme }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='hero__section'>
            <div className='container'>
                <div className='hero__wrapper1'>

                    {/* Left Side - Social Media Icons */}
                    <div className='hero__content'>
                        <div className='social-icons'>
                            <h3 className='highlight'>Follow Us</h3>
                            <div className='social-links'>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-reddit"></i>
                                </a>
                                <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-medium"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Social
