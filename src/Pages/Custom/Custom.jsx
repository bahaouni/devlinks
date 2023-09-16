import styles from './Custom.module.css';

export default function Custom() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.sub}>
                <h3>hasneoui ye mzamer  </h3>
                <p>Add/edit/remove links below and then share all your profiles with the world!</p><br/>
                <div><button className={styles.btnadd}>+Add new link</button></div>
                <div></div>
            </div><div className={styles.hhr}><hr/></div>
            <div className={styles.footer}>
                <button className={styles.btnsave}>Save</button>
            </div>
        </div>
    </>
    )
  }
