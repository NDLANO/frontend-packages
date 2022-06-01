/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import MyNdlaPageExample from '../molecules/MyNdlaMyPageExample';

const MyNdlaMyPage = () => {
  return (
    <MyNdlaPageExample
      recentFavorites={[
        {
          title: 'My Resource',
          layout: 'list',
          link: '',
          topics: ['Oppgave', 'Norsk', 'Muntlig'],
          tags: ['tag', 'tag', 'tag'],
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
          resourceImage: {
            src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
            alt: 'alt',
          },
        },
        {
          title: 'My Resource',
          link: '',
          layout: 'list',
          topics: ['Oppgave', 'Norsk', 'Muntlig'],
          tags: ['tag', 'tag', 'tag'],
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
          resourceImage: {
            src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
            alt: 'alt',
          },
        },
      ]}
      name={{ firstName: 'Peter', lastName: 'Rolfsen' }}
      title="utvikler"
      courses={['Matte', 'Gym']}
      school="Charlottenlund VGS"
    />
  );
};

export default MyNdlaMyPage;
