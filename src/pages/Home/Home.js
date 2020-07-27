import React from 'react';
import Pagebase from '../../components/layouts/Pagebase';
import SectionService from '../../components/elements/SectionService';
import SectionAbout from '../../components/elements/SectionAbout';
import SectionFeature from '../../components/elements/SectionFeature';
import SectionVideo from '../../components/elements/SectionVideo';
import SectionFeedback from '../../components/elements/SectionFeedback';
import SectionPrice from '../../components/elements/SectionPrice';
import SectionFaq from '../../components/elements/SectionFaq';
import SectionSource from '../../components/elements/SectionSource';

export default function Home() {

  const sectionServiceProps = {
    heading: 'Latest News from all categories',
    subheading: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut <br /> labore  et dolore magna aliqua.</p>,
    items: [
      {
        title: 'Maintenance',
        description: 'inappropriate behavior is often laughed off as “boys will be boys,' +
          '" women face higher conduct standards especially in the workplace. That’s why.',
        style: { marginTop: 23 }
      },
      {
        title: 'Residental Service',
        description: 'inappropriate behavior is often laughed off as “boys will be boys,' +
          '" women face higher conduct standards especially in the workplace. That’s why.',
      },
      {
        title: 'Commercial Service',
        description: 'inappropriate behavior is often laughed off as “boys will be boys,' +
          '" women face higher conduct standards especially in the workplace. That’s why.',
      }
    ]
  };

  const sectionFeatureProps = {
    heading: 'Some Features that Made us Unique',
    subheading: 'Who are in extremely love with eco friendly system',
    items: [
      {
        image: 'f1.png',
        title: 'Expert Technicians',
      },
      {
        image: 'f2.png',
        title: 'Professional Service',
      },
      {
        image: 'f3.png',
        title: 'Great Support',
      },
      {
        image: 'f4.png',
        title: 'Expert Technicians',
      },
      {
        image: 'f5.png',
        title: 'Professional Service',
      },
      {
        image: 'f6.png',
        title: 'Great Support',
      },
    ]
  };

  const sectionFeedbackProps = {
    heading: 'Some Features that Made us Unique',
    subheading: 'Who are in extremely love with eco friendly system'
  };

  return (
    <Pagebase>
      <SectionService {...sectionServiceProps} />
      <SectionAbout />
      <SectionFeature {...sectionFeatureProps} />
      <SectionVideo />
      <SectionFeedback {...sectionFeedbackProps} />
      <SectionPrice />
      <SectionFaq />
      <SectionSource />
    </Pagebase>
  );
}
