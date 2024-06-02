
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const navLinks = [
    {url: '#home', label: 'Home' , imgICON: '${basePath}/home.svg'},
    {url: '#products', label: 'Products', imgICON: '${basePath}/box.svg'},
    {url: '#about', label: 'About Us', imgICON: '${basePath}/info.svg'},
    {url: '#blog', label: 'Blog', imgICON: '${basePath}/newspaper.svg'},
    {url: '#contact', label: 'Contact Us', imgICON: '${basePath}/phone.svg'},
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

  export const socials =[
    {iconLogo: '${basePath}/facebook.svg', label: 'facebook logo'},
    {iconLogo: '${basePath}/twitter.svg', label: 'twitter logo'},
    {iconLogo: '${basePath}/linkedin.svg', label: 'linkedin logo'},
    {iconLogo: '${basePath}/instagram.svg', label: 'instagram logo'}
  ];

  export const gadgets = [
    {
        id: 1,
        details: {
            name: 'Xbox One Game Controllers Mon-ster Hunter',
            currentPrice: 750,
            oldPrice: 830,
            description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer'
        },
        deviceIMG: '${basePath}/images/xbox.png'
    },

    {
        id: 2,
        details: {
            name: 'Yuneec International Pro aerial vehicle Gimbal',
            currentPrice: 630,
            oldPrice: 840,
            description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer'
        },
        deviceIMG: '${basePath}/images/drone.png'
    },

    {
        id: 3,
        details: {
            name: 'Blue Beats by  Dr. Dre Beats Studio, Noise-cancelling',
            currentPrice: 480,
            oldPrice: 543,
            description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer'
        },
        deviceIMG: '${basePath}/images/headphone.png'
    },

    {
        id: 4,
        details: {
            name: 'Apple Watch Series 3 Apple Watch Series 2 SmartWatch',
            currentPrice: 516,
            oldPrice: 595,
            description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer'
        },
        deviceIMG: '${basePath}/images/watch.png'
    },

    {
        id: 5,
        details: {
            name: 'Xbox 360 Wireless Headset Headphones Bluetooth',
            currentPrice: 322,
            oldPrice: 370,
            description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer'
        },
        deviceIMG: '${basePath}/images/headset.png'
    },

    {
        id: 6,
        details: {
            name: 'Apple Wireless Mouse Logitech MX Master 2S',
            currentPrice: 460,
            oldPrice: 495,
            description: 'wasdwasd wewecawec awecnUWrhvwqr vwernvwer'
        },
        deviceIMG: '${basePath}/images/mouse.png'
    },

];

  export const products = [
    {imgurl: '${basePath}/images/speaker.png', title: 'Speakers'},
    {imgurl: '${basePath}/images/laptop.png', title: 'Laptops'},
    {imgurl: '${basePath}/images/gamingPC.png', title: 'Gaming'},
    {imgurl: '${basePath}/images/camera.png', title: 'Cameras'},
  ];

  export const blogs = [
    {imgURL: '${basePath}/images/xboxBG.png', 
     title: 'Xbox One Game Controllers Mon-sters Hunter',
     date: '24 August 2022'
    },

    {imgURL: '${basePath}/images/vr.png', 
     title: 'Virtual Reality',
     date: '28 April 2020'
    },
    
    {imgURL: '${basePath}/images/cameraBG.png', 
     title: 'Camera Nikon AF NIKKOR',
     date: '14 February 2023'
    },
  ];
