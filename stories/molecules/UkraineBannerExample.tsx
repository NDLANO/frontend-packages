import { BannerCard } from '@ndla/ui';

const UkraineBannerExample = () => {
  return (
    <BannerCard
      link="/"
      title={{ title: 'Lær om det norske samfunn - på ukrainsk', lang: 'nb' }}
      content={{ content: 'Дізнайтеся про норвезьке суспільство – українською', lang: 'uk' }}
      linkText={{ text: 'Learn about Norwegian society - in Ukrainian', lang: 'en' }}
      image={{
        altText: 'Ukrainian flag',
        imageSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png',
      }}
    ></BannerCard>
  );
};

export default UkraineBannerExample;
