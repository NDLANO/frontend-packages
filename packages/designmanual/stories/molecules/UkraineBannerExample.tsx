import React from 'react';
import { BannerCard } from '@ndla/ui';

const UkraineBannerExample = () => {
  return (
    <BannerCard
      link="/"
      title="Lær om det norske samfunn - på ukrainsk"
      content="Дізнайтеся про норвезьке суспільство – українською"
      linkText="Learn about Norwegian society - in Ukrainian"
      image={{
        imageAlt: 'Ukrainian flag',
        imageSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png',
      }}></BannerCard>
  );
};

export default UkraineBannerExample;
