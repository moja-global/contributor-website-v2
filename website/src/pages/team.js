import React from 'react';
import Layout from '@theme/Layout';
import JsonDataDisplay from './TeamCard/teamcard';
import styles from './team.module.css';

const Team = () => {
  
  return (
    <Layout>
      <div className={styles.communityBody}>

        <h1 className={styles.communityTitle}>Contributors</h1>

          <h2 className={styles.communitySubtitle}>
          Thanks to everyone involved in Contributing to The Moja-Global.
            </h2>
         
        <JsonDataDisplay />
        </div>
    </Layout>
  );
};

export default Team;