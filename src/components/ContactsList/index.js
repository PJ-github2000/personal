import {
    BsInstagram,
    BsTwitter,
    BsSnapchat,
    BsGithub,
    BsLinkedin,
  } from 'react-icons/bs'
  
  const ContactsList = [
    {
      id: 1,
      ContactType: 'LinkedIn',
      ContactIcon: <BsLinkedin size={40} />,
      ContactScanner:
        'https://res.cloudinary.com/reddyimgs/image/upload/v1691398881/qrcode_www.linkedin.com_dn68xe.png',
      ContactLink: 'https://www.linkedin.com/in/bandam-harshith-reddy-26725b232/',
    },
    {
      id: 2,
      ContactType: 'Instagram',
      ContactIcon: <BsInstagram size={40} />,
      ContactScanner:
        'https://res.cloudinary.com/reddyimgs/image/upload/v1691397402/_bandam_harshith_reddy__qr_vz6fqb.png',
      ContactLink:
        'https://instagram.com/_bandam_harshith_reddy_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
    },
    {
      id: 3,
      ContactType: 'Twitter',
      ContactIcon: <BsTwitter size={40} />,
      ContactScanner:
        'https://res.cloudinary.com/reddyimgs/image/upload/v1691399332/qrcode_twitter.com_paw48x.png',
      ContactLink: 'https://twitter.com/HARSHITH_1629',
    },
    {
      id: 4,
      ContactType: 'Snapchat',
      ContactIcon: <BsSnapchat size={40} />,
      ContactScanner:
        'https://res.cloudinary.com/reddyimgs/image/upload/v1691399524/365485398_669469625039240_8338569899578386088_n_tpvbdj.jpg',
      ContactLink:
        'https://www.snapchat.com/add/harshith1629?sender_web_id=852ae6ae-5485-4843-8bed-a76cdeff7801&device_type=desktop&is_copy_url=true',
    },
    {
      id: 5,
      ContactType: 'Github',
      ContactIcon: <BsGithub size={40} />,
      ContactScanner:
        'https://res.cloudinary.com/reddyimgs/image/upload/v1691399682/qrcode_github.com_ilwqqf.png',
      ContactLink: 'https://github.com/PJ-github2000',
    },
    //   {
    //     id: 6,
    //     ContactType: 'Gmail',
    //     ContactIcon: <BiLogoGmail size={40} />,
    //     ContactScanner: '',
    //     ContactLink: '',
    //   },
  ]
  
  export default ContactsList