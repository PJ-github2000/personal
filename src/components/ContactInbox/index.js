import {useRef, useState} from 'react'

import emailjs from '@emailjs/browser'

import {NotificationContainer, NotificationManager} from 'react-notifications'

import 'react-notifications/lib/notifications.css'

import './index.css'

const ContactInbox = () => {
  const form = useRef()

  const [errorForm, setError] = useState({
    nameError: '',
    mailError: '',
    messageError: '',
  })

  const sendEmail = e => {
    e.preventDefault()
    console.log(form.current[0].value)

    if (
      !form.current[0].value ||
      !form.current[1].value ||
      !form.current[2].value
    ) {
      setError({
        nameError: !form.current[0].value ? 'Required*' : '',
        mailError: !form.current[1].value ? 'Required*' : '',
        messageError: !form.current[2].value ? 'Required*' : '',
      })
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_MY_SERVICE_ID,
          process.env.REACT_APP_MY_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_MY_PUBLIC_KEY,
        )
        .then(
          result => {
            console.log(result)
            NotificationManager.success('Message sent', 'Success')
            form.current[0].value = ''
            form.current[1].value = ''
            form.current[2].value = ''
          },
          error => {
            console.log(error)
            NotificationManager.error('Failed to send', 'Try again')
          },
        )
    }
  }

  return (
    <form
      ref={form}
      className="contact-form"
      onFocus={() =>
        setError({
          nameError: ' ',
          mailError: ' ',
          messageError: ' ',
        })
      }
      onSubmit={sendEmail}
    >
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          className="message-input"
          id="name"
          type="text"
          name="from_name"
          placeholder="Your name"
        />
        <p className="error-text">{errorForm.nameError}</p>
      </div>
      <div className="input-container">
        <label htmlFor="mail">Email</label>
        <input
          className="message-input"
          id="mail"
          type="mail"
          name="from_email"
          placeholder="Your mail"
        />
        <p className="error-text">{errorForm.mailError}</p>
      </div>
      <div className="input-container">
        <label htmlFor="message">Message</label>
        <textarea
          rows="8"
          id="message"
          name="message"
          placeholder="Message"
          className="message-input"
        />
        <p className="error-text">{errorForm.messageError}</p>
      </div>
      <input className="message-input submit-btn " type="submit" value="Send" />
      <NotificationContainer />
    </form>
  )
}

export default ContactInbox