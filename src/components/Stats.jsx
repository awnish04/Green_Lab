import styles from '../style';
import {stats} from '../constants';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-10`}>
          <h4 className='font-poppins font-semibold xs:text-4xl text-3xl xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-xl text-base xs:leading-[26px] leading-[21px] text-gradient uppercase'>{stat.title}</p>
        </div>
      ))}
      
    </section>
  )

export default Stats