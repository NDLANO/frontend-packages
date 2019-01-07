/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { storiesOf } from '@storybook/react';
import {
    Paragraph,
    FactBox,
    Tables,
    FramedText,
    ImagesChoice,
    ImagesTechnical,
    ImagesPlacement,
    ImagesLicenses,
    Multicomponent,
} from '@ndla/guidelines';
import { 
    ModalFullScreen,
} from '@ndla/modal';

storiesOf('Produksjonssystem/Hjelp', module)
.add('Paragraf og avsnitt', () => (
    <ModalFullScreen
            chapters={[
                {
                    name: 'Paragraph',
                    subTitle: 'Bruk av avsnitt',
                    component: <Paragraph />,
                }
            ]}
            title="Innholdskomponenter"
        >
        </ModalFullScreen>
))
.add('Faktabokser', () => (
    <ModalFullScreen
            chapters={[
                {
                    name: 'Faktaboks',
                    subTitle: 'Bruk av Faktaboks',
                    component: <Multicomponent selected="factBox" components={[
                        {
                            name: 'Faktaboks',
                            id: 'factBox',
                            component: <FactBox />,
                        },
                        {
                            name: 'Tekst i ramme',
                            id: 'framedText',
                            component: <FramedText />,
                        },
                    ]} />,
                },
            ]}
            title="Innholdskomponenter"
        >
        </ModalFullScreen>
))
.add('Tabeller', () => (
    <ModalFullScreen
            chapters={[
                {
                    name: 'Tabeller',
                    subTitle: 'For presentasjon av tabulære data',
                    component: <Tables />,
                }
            ]}
            title="Innholdskomponenter"
        >
        </ModalFullScreen>
))
.add('Bilder', () => (
    <ModalFullScreen
            chapters={[
                {
                    name: 'Velg riktig bilde',
                    subTitle: 'Gode bilder forsterker budskapet, pirrer mottakerens nysgjerrighet, skaper forståelse og initierer handling. De er derfor viktige for brukeropplevelsen på NDLA.',
                    component: <ImagesChoice />,
                },
                {
                    name: 'Teknisk kvalitet',
                    subTitle: 'Hvilken teknisk kvalitet et bilde må ha, avhenger av hva bildet skal brukes til. Uavhengig av bruk – bildet må være skarpt!',
                    component: <ImagesTechnical />,
                },
                {
                    name: 'Plasseringer og utsnitt',
                    subTitle: 'Finn riktig plassering og utsnitt',
                    component: <ImagesPlacement />,
                },
                {
                    name: 'Lisenser',
                    subTitle: 'Lisens og rettigheter',
                    component: <ImagesLicenses />,
                },
            ]}
            title="Innholdskomponenter"
        >
        </ModalFullScreen>
))