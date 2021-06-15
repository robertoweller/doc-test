import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'What is Photon?',
    Svg: require('../../static/img/comecar.svg').default,
    description: (
      <>
	Photon is a programming language aimed at filling the gaps of the Python 
	language with respect to performance and portability. 
      </>
    ),
  }, 
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/test.svg').default,
    description: (
      <>
        I love Python, but I cannot use it anywhere I want because it is not a 
	supported language of the platform, lacks performance or is very 
	cumbersome to actually package it or deploy it.
      </>
    ),
  },
  {
    title: 'Photon also Transpiler',
    Svg: require('../../static/img/cel-bo.svg').default,
    description: (
      <>
         Photon can transpire into many languages, it's simple to do.
      </>
    ),
  },
  {
    title: 'Photon deploy',
    Svg: require('../../static/img/plataformas.svg').default,
    description: (
      <>
        Photon applications can run in any platform. Some examples are: Windows, Linux, MacOS, BSD, Android, IOs, RaspberryPi, HTML5, Xbox, Playstation, etc.
      </>
    ),
  },
  {
    title: 'I want to see it!',
    Svg: require('../../static/img/canal.svg').default, 
    description: (
     <>
        Devlog is available <a href="https://www.youtube.com/watch?v=Seu5q_hc6go&list=PL89TmjrkwpOfteQJRptqmK-y8pr6uJdlc&ab_channel=HashLDashEnglish">here</a>. I also uploaded a video on my portuguese channel comparing it to Python and C, check it out <a href="https://www.youtube.com/watch?v=_8xtTyCTPXI&ab_channel=HashLDash">here</a>.
     </>
    ),
  },	
  {
    title: 'ALPHA Stage',
    Svg: require('../../static/img/alpha.svg').default, 
    description: (
     <>
        Photon is currently in early alpha. If you like this project and want to 
	contribute, please consider donating or subscribing to my youtube <a href="https://www.youtube.com/channel/UChE5M9BAsdtlllOpfhIu8Tw">channel</a>, 
	where I ll post a dev log of this language (<a href="https://www.youtube.com/watch?v=Seu5q_hc6go&list=PL89TmjrkwpOfteQJRptqmK-y8pr6uJdlc&ab_channel=HashLDashEnglish">devlog</a>). Also, join the 
	discussion here on github about the future and your thoughts on the language!

     </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
