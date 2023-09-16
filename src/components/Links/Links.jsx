import Navbar from '../../Pages/Navbar/Navbar'
import Snapshot from '../../Pages/Snapshot/Snapshot'
import Custom from '../../Pages/Custom/Custom'
import { useUserContext } from '../../Pages/contexts/UserContext.js';

import styles from './Links.module.css'
export default function Links() {
  const { user } = useUserContext();

  return (
    <>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.footer} >
          <Snapshot />
          <Custom />
        </div>
   
      </div>
    </>
  )
}
