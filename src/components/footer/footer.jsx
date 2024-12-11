import Container from '../container/container';
import Line from '../elements/line/line';
import './footer.css';
import logo from '../../assets/images/Logo.svg'

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__top">
                    <div className="footer__phone">
                        <h3>Phone</h3>
                        <a href="tel:+3250312832">+32 50 31 28 32</a>
                    </div>
                    <div className="footer__аddress">
                        <h3>Address</h3>
                        <p>491 Merlin Crest Suite 963</p>
                    </div>
                </div>
                <Line color='line-grey' />
                <div className="footer__middle">
                    <div className="footer__column">
                        <h3>Services</h3>
                        <a href="#">Strategy Design</a>
                        <a href="#">Product Design</a>
                        <a href="#">Content Strategy</a>
                        <a href="#">Brand Strategy</a>
                        <a href="#">Development</a>
                    </div>
                    <div className="footer__column">
                        <h3>Help And Advice</h3>
                        <a href="#">How it works</a>
                        <a href="#">Contact Support</a>
                        <a href="#">Privacy Policyy</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div className="footer__column">
                        <h3>Company</h3>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                        <a href="#">Jobs</a>
                    </div>
                    <div className='footer__vert-line'></div>
                    <div className="footer__column">
                        <h3>Get in Touch</h3>
                        <span>Feel free to get in touch with <br /> us vai email</span>
                        <p>info.webovio@gmail.com</p>
                        <div className="footer__social">
                            <a href='#'>
                                <svg className='footer__icon' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                            </a>
                            <a href='#'>
                                <svg className='footer__icon' viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" /></svg>
                            </a>
                            <a href='#'>
                                <svg className='footer__icon' viewBox="0 0 512 512"><path d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z" /></svg>
                            </a>
                            <a href='#'>
                                <svg className='footer__icon' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>                            </a>
                        </div>
                    </div>
                </div>
                <Line color='line-grey' />
                <div className="footer__bottom">
                    <a className='footer__logo' href="#">
                        <img src={logo} alt="" />
                    </a>
                    <span className='footer__bottom-text'>
                        © 2020@webovio. All Rights Reserved.
                    </span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;