import Education from "../assets/education.jpg";
import Carbonfootprint from "../assets/carbon_footprint.png";
import Donation from "../assets/donation.jpg";
// import styles, { layout } from "../style";
// import Button from "./Button";

const CardDeal = () => {
  return (
    <div
      id="services"
      className="container mx-auto lg:py-32 p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased font-poppins"
    >
      <div className="grid lg:grid-cols-3 2xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 flex-wrap">
        <article className="mx-auto max-w-sm shadow-xl relative overflow-hidden min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={Carbonfootprint}
              alt="Image Description"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-green-800 bg-opacity-20 absolute top-0 left-0 w-full h-full px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-70 transform duration-300">
            <h1 className="text-white text-2xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
            Carbon Footprint
            </h1>
            <div className="w-16 h-2 bg-white rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
            <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 py-4">
            Calculate Digital Carbon Footprint
            </p>
          </div>
        </article>

        <article className="mx-auto max-w-sm shadow-xl relative overflow-hidden min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={Donation}
              alt="Image Description"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-green-800 bg-opacity-20 absolute top-0 left-0 w-full h-full px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-70 transform duration-300">
            <h1 className="text-white text-2xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              Donation
            </h1>
            <div className="w-16 h-2 bg-white rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
            <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 py-4">
              Information about sustainable ICT practices and donation.
            </p>
          </div>
        </article>

        <article className="mx-auto max-w-sm shadow-xl relative overflow-hidden min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={Education}
              alt="Image Description"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-green-800 bg-opacity-20 absolute top-0 left-0 w-full h-full px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-70 transform duration-300">
            <h1 className="text-white text-2xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              Education
            </h1>
            <div className="w-16 h-2 bg-white rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
            <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 py-4">
              We Offer Cources On Sustainable Energy
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CardDeal;
