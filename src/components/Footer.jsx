import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <section className={`${styles.flexCenter}  flex-col py-10`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/* <img src={logo} alt="hoobank" className="w-64 h-16 object-contain" /> */}
        <div className="text-white text-4xl lg:text-5xl font-bold font-poppins">
        Going Green In ICT
      </div>
        <p className={`${styles.paragraph} mt-4 max-w-xs`}>
          A new way to make technology easy,clean and reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-40"
          >
            <h4 className="font-poppins font-medium text-lg leading-[27px] text-white">
              {footerLink.title}
            </h4>

            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-base leading-[24px] text-dimWhite hover:text-green-400 cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col py-8 border-t border-t-[#ffffff]">
      <p className="font-poppins font-normal text-center  text-lg leading-[27px] text-white">2023 Going Green In ICT. All Rights Reserved.</p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map ((social, index) => (
            <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-5 h-5 object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}/>
        ))}

      </div>
    </div>
  </section>
);

export default Footer;
