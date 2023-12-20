import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`shadow-2xl flex flex-row p-6 rounded-3xl  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-green-400`}>
      <img
        src={icon}
        alt="icon"
        className="w-2/4 h-2/4 text-white object-contain"
      />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-[23px] mb-1">
        {title}
      </h4>

      <p className="font-poppins font-normal text-white text-base leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => (
  <section id="about" className={`lg:py-32 ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`text-white ${styles.heading2}`}>
        We convey our commitment to promoting sustainable practices and
        mitigating the carbon footprint to help the world achieve net zero
        greenhouse emissions and carbon neutrality resulting sustainable future
        and prosperous world for all
        <br className="sm:block hidden" />
      </h2>
      {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
