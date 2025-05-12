import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  png: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    png: '/img/cloudio-small-pc.png',
    description: (
      <>
        cloudocs is a docs website that is easy to use and navigate. It is designed to be user-friendly, with a clean and intuitive interface that makes it easy to find the information you need.
      </>
    ),
  } ,
  {
    title: 'Reliable',
    png: '/img/cloudio-cloud.png',
    description: (
      <>
        The most reliable documentation website for cloud services. It is designed to be fast and responsive, with a focus on performance and reliability.
      </>
    ),
    
  }  ,
  {
    title: 'Informative',
    png: '/img/smallcloudio.png',
    description: (
      <>
        The most informative documentation website for cloud services. It is designed to provide you with all the information you need to get started with cloud services, including tutorials, guides, and reference materials.
      </>
    ),
  }  ,
];

function Feature({title, png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={png} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
