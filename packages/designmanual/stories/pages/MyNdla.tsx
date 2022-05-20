/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { ResourcesView } from '@ndla/ui';

export const MyNdla = () => (
  <ResourcesView
    folders={[
      { title: 'name', link: 'hey' },
      { title: 'Ny mappe', link: '' },
      { title: 'Eldre mappe', link: '' },
      { title: 'Eldre mappe', link: '' },
    ]}
    resources={[
      {
        title: 'My Resource',
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
  />
);

export default MyNdla;
