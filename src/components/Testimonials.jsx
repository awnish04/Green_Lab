import { card } from '../assets';
import {feedback} from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () =>  (
    <section id='services' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className='absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:md-16 mb-6 relative z-10'>
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden' />saying about us
        </h1>

        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-md`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center w-full feedback-container relative z-10'>
        {feedback.map ((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )


export default Testimonials