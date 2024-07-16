import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const ReactPopUp = props => {
  const {item} = props
  const {ContactType, ContactIcon, ContactScanner, ContactLink} = item

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div className="contact-item">
            <div className="cont-icon">{ContactIcon}</div>
            <p className="contact-name">{ContactType}</p>
          </div>
        }
      >
        <>
          <img className="scanner" src={ContactScanner} alt="scanner" />
          <span className="or">OR</span>
          <a
            className="contact-link"
            target="_blank"
            rel="noreferrer"
            href={ContactLink}
          >
            CLICK HERE
          </a>
        </>
      </Popup>
    </div>
  )
}
export default ReactPopUp