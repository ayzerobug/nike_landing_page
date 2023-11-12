import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="max-container flex max-lg:flex-col justify-between items-start gap-20 flex-wrap">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
            <p className="font-montserrat mt-6 text-base leading-7 text-white-400 sm:max-w-sm ">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((item) => (
                <div
                  key={item.alt}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img
                    className=""
                    src={item.src}
                    alt={item.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </a>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray"
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-center justify-between text-white-400 mt-24">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>2023 Nike, Inc. All rights reserved | </p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
