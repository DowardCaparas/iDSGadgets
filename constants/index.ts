import { home, box, info, newspaper, phone, facebook, twitter, linkedin, instagram,    
} from '@/public';

import { camera, cameraBG, drone, gamingPC, headphone, headset, 
         laptop, mouse, speaker, vr, watch, xbox,     
 } from '@/public/images';

export const navLinks = [
  { url: '#home', label: 'Home', imgICON: home },
  { url: '#products', label: 'Products', imgICON: box },
  { url: '#about', label: 'About Us', imgICON: info },
  { url: '#blog', label: 'Blog', imgICON: newspaper },
  { url: '#contact', label: 'Contact Us', imgICON: phone },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { title: 'Gaming', url: '/' },
      { title: 'Drones', url: '/' },
      { title: 'Computers', url: '/' },
      { title: 'Laptops', url: '/' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { title: 'Featured', url: '/' },
      { title: 'Product', url: '/' },
      { title: 'Blog', url: '/' },
      { title: 'Contact Us', url: '/' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { title: '(+021) 254 4458 187', url: '/' },
      { title: 'info@email.com', url: '/' },
      { title: 'Twitter', url: '/' },
      { title: '564 Kingstreate, Mailbourne', url: '/' },
    ],
  },
];

export const socials = [
  { iconLogo: facebook, label: 'facebook icon' },
  { iconLogo: twitter, label: 'twitte icon' },
  { iconLogo: linkedin, label: 'linkedin icon'  },
  { iconLogo: instagram, label: 'instagram icon' },
];

export const gadgets = [
  {
    id: 1,
    details: {
      name: 'Xbox One Game Controllers Mon-ster Hunter',
      currentPrice: 750,
      oldPrice: 830,
      description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer',
    },
    deviceIMG: xbox,
  },

  {
    id: 2,
    details: {
      name: 'Yuneec International Pro aerial vehicle Gimbal',
      currentPrice: 630,
      oldPrice: 840,
      description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer',
    },
    deviceIMG: drone,
  },

  {
    id: 3,
    details: {
      name: 'Blue Beats by  Dr. Dre Beats Studio, Noise-cancelling',
      currentPrice: 480,
      oldPrice: 543,
      description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer',
    },
    deviceIMG: headphone,
  },

  {
    id: 4,
    details: {
      name: 'Apple Watch Series 3 Apple Watch Series 2 SmartWatch',
      currentPrice: 516,
      oldPrice: 595,
      description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer',
    },
    deviceIMG: watch,
  },

  {
    id: 5,
    details: {
      name: 'Xbox 360 Wireless Headset Headphones Bluetooth',
      currentPrice: 322,
      oldPrice: 370,
      description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer',
    },
    deviceIMG: headset,
  },

  {
    id: 6,
    details: {
      name: 'Apple Wireless Mouse Logitech MX Master 2S',
      currentPrice: 460,
      oldPrice: 495,
      description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer',
    },
    deviceIMG: mouse,
  },
];

export const products = [
  { imgurl: speaker, title: 'Speakers' },
  { imgurl: laptop, title: 'Laptops' },
  { imgurl: gamingPC, title: 'Gaming' },
  { imgurl: camera, title: 'Cameras' },
];

export const blogs = [
  {
    imgURL: xbox,
    title: 'Xbox One Game Controllers Mon-sters Hunter',
    date: '24 August 2022',
  },
  {
    imgURL: vr,
    title: 'Virtual Reality',
    date: '28 April 2020',
  },
  {
    imgURL: cameraBG,
    title: 'Camera Nikon AF NIKKOR',
    date: '14 February 2023',
  },
];