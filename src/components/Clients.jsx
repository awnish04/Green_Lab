import {clients} from '../constants';
import styles from '../style';

const Clients = () => (
    <section  className={`${styles.flexCenter} `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map ((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <img src={client.logo} alt="client" className='sm:w-48 w-24 object-contain'/>
          </div>
        ))}

      </div>
    </section>
  )


export default Clients