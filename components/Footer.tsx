import { footerLinks, socials } from '@/constants';
import Image from 'next/legacy/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="bg-primary_black relative padding" id="contact">
        <div className="footer">
          {/*Footer Left */}
          <div className="flex flex-col justify-start items-start gap-6 lg:w-1/3">
            <h1 className="font-bold sm:text-2xl text-xl">iDSGadgets</h1>
            <p className="text-primary_gray">
              Elevate your tech game with top-tier gadgets, where innovation
              meets quality.
            </p>
            <div className="flex gap-3">
              {socials.map((icon) => (
                <Image
                  key={icon.label}
                  src={icon.iconLogo}
                  alt={icon.label}
                  width={25}
                  height={25}
                  className="green_gradient rounded p-1"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              ))}
            </div>
          </div>

          {/*Links */}
          <div className="flex lg:gap-32 gap-10 flex-wrap">
            {footerLinks.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold">{item.title}</h3>
                <div className="flex flex-col mt-5 gap-3">
                  {item.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-secondary_gray"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div
        className="bg-primary_black flex items-center justify-center py-6 
   border-t-2 border-secondary_gray"
      >
        <p className="text-secondary_gray max-sm:text-sm">
          Copyright By Doward Caparas &copy; 2024 All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
