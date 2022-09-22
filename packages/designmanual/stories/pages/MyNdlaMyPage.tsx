/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import MyNdlaLayoutExample from '../molecules/MyNdlaPages/MyNdlaLayoutExample';
import MyNdlaMyPageContent from '../molecules/MyNdlaPages/MyNdlaMyPageContent';

const MyNdlaMyPage = () => {
  return (
    <MyNdlaLayoutExample>
      <MyNdlaMyPageContent
        headerPic={{
          src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
          alt: '',
        }}
        recentFavorites={[
          {
            id: 'f8260d00-33e5-4ace-8f41-73aa47410a80',
            title: 'My Resource',
            link: '',
            topics: ['Oppgave', 'Norsk', 'Muntlig'],
            tags: [
              { tag: 'tag', encoded: 'tag' },
              { tag: 'tag', encoded: 'tag' },
              { tag: 'tag', encoded: 'tag' },
            ],
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
            resourceImage: {
              src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
              alt: 'alt',
            },
          },
          {
            id: 'ccc46e49-7d79-470c-8223-d7b2f9147aaf',
            title: 'My Resource',
            link: '',
            topics: ['Oppgave', 'Norsk', 'Muntlig'],
            tags: [
              { tag: 'tag', encoded: 'tag' },
              { tag: 'tag', encoded: 'tag' },
              { tag: 'tag', encoded: 'tag' },
            ],
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
            resourceImage: {
              src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
              alt: 'alt',
            },
          },
        ]}
        name={{ firstName: 'Peter', lastName: 'Rolfsen' }}
        title="utvikler"
        courses={['Matte', 'Gym']}
        school="Charlottenlund VGS"
      />
    </MyNdlaLayoutExample>
  );
};

export default MyNdlaMyPage;
