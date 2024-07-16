import {BiLogoGmail, BiPhone} from 'react-icons/bi'
import './index.css'
import ReactPopUp from '../ContactBtn'
import ContactInbox from '../ContactInbox'
import ContactsList from '../ContactsList'

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-heading">CONNECT ME ON</h1>
    <ContactInbox />
    <div className="contact-items-container">
      {ContactsList.map(each => (
        <ReactPopUp key={each.id} item={each} />
      ))}
    </div>
    <div className="cont-div">
      <a
        href="mailto:reddybharshith3@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="contact-an"
      >
        <p className="mail">
          <BiLogoGmail size={20} />: reddybharshith3@gmail.com{' '}
        </p>
      </a>
      <a href="tel:6281715949" className="contact-an">
        <p className="mail">
          <BiPhone size={20} /> : 62XXXXXXXX
        </p>
      </a>
    </div>
  </div>
)

export default Contact