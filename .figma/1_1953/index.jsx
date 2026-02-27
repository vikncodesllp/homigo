import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame1000006230}>
      <div className={styles.navbar}>
        <img
          src="../image/mm35w2uk-3erghzb.png"
          className={styles.whatsAppImage2026012}
        />
        <div className={styles.frame7}>
          <p className={styles.services}>Services</p>
          <p className={styles.services}>About Us</p>
          <p className={styles.services}>Contact</p>
          <p className={styles.services}>Blog</p>
        </div>
        <div className={styles.frame10}>
          <div className={styles.frame8}>
            <div className={styles.button}>
              <p className={styles.getAQuote}>Get a Quote</p>
            </div>
          </div>
        </div>
        <div className={styles.language}>
          <img src="../image/mm35w2u6-zo71qmm.svg" className={styles.eN} />
          <div className={styles.autoWrapper}>
            <img
              src="../image/mm35w2u6-en51gjh.png"
              className={styles.arrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
