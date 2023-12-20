import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-36 h-36 rounded-full bg-green-gradient p-1 cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col  shadow-2xl w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-lg leading-6">
          <span className="text-white mr-2">Get</span>
        </p>
        <img src={arrowUp} className="w-6 h-6 object-contain" alt="" />
      </div>
      <p className="font-poppins font-medium text-lg leading-6">
        <span className="text-white">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
