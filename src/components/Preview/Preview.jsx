import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Pages/contexts/UserContext.js'; // Import the UserContext

import styles from './Preview.module.css';

export default function Preview() {
  const { user } = useUserContext(); // Access the user data from the context

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.up}>
          <Link to='/home'>
            <button className={styles.btn1}>Back to Editor</button>
          </Link>
          <button className={styles.btn2}>Share Link</button>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.image}>
          {/* Display the user image */}
       <img src={user.imgSrc} alt="User" />
        </div>
        <div className={styles.ccenter}>
          {/* Display the user's first name, last name, and email */}
          <h3 className={styles.x}>
            {user.firstname} {user.lastname}
          </h3>
          <p className={styles.e}>{user.email}</p>
        </div>
        <div className={styles.cfoot}>
          <button className={styles.fbtn1}></button>
          <button className={styles.fbtn2}></button>
          <button className={styles.fbtn3}></button>
        </div>
      </div>
    </div>
  );
}
