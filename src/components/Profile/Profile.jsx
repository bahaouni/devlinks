import Snapshot from '../../Pages/Snapshot/Snapshot'

import styles from './Profile.module.css'
import NavbarP from '../../Pages/NavbarP/NavbarP'
import Prof from '../../Pages/Prof/Prof'
export default function Profile() {
  return (
    <>
      <div className={styles.main}>
        <NavbarP />
        <div className={styles.footer} >
          <Snapshot />
          <Prof />
          
        </div>
      </div>
    </>
  )
}
