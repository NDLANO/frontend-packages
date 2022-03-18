/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core';
import { MessageBoxTag, messagesNB, MessageBox, MessageBoxType } from '@ndla/ui';
import MessageBoxTabs from '../molecules/MessageBoxTabs';
import ComponentInfo from '../ComponentInfo';
const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  ${mq.range({ until: breakpoints.mobileWide })} {
    width: calc(100% - 40px);
  }
`;

const MessageHeader = styled.h2`
  border-bottom: #a5bcd3 2px solid; ;
`;
const MessageBoxWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: auto;
`;

const MessageBoxExample = () => {
  return (
    <>
      <Wrapper>
        <ComponentInfo
          status={3}
          components={
            <>
              <MessageHeader>Full bredde topp</MessageHeader>
              <p>Brukes i toppen av nettleseren når noe trenger mye oppmerksomhet globalt i systemet.</p>
              <p>
                <MessageBox type={MessageBoxType.fullpage} showCloseButton>
                  {messagesNB.messageBoxInfo.updateBrowser}
                </MessageBox>

                <MessageBoxWrapper>
                  <MessageHeader>Gul versjon</MessageHeader>
                  <p>
                    Hovedvarianten vi bruker for å gi beskjed til brukeren rundt i systemet. Velg mellom variant som kan
                    klikkes vekk eller ikke.
                  </p>
                  <MessageBox type={MessageBoxType.medium} showCloseButton>
                    <span>{messagesNB.messageBoxInfo.noContent}</span>
                  </MessageBox>
                </MessageBoxWrapper>
                <MessageBoxWrapper>
                  <MessageBox type={MessageBoxType.medium}>
                    <span>{messagesNB.messageBoxInfo.outdatedSubject}</span>
                  </MessageBox>
                </MessageBoxWrapper>
                <MessageBoxWrapper>
                  <MessageBox
                    links={[
                      { text: 'link1', href: 'www.facebook.com' },
                      { text: 'link2', href: 'www.facebook.com' },
                      { text: 'link3', href: 'www.facebook.com' },
                    ]}
                    showCloseButton>
                    {messagesNB.messageBoxInfo.newVersion}
                  </MessageBox>
                </MessageBoxWrapper>
                <MessageHeader>Ghost variant</MessageHeader>
                <p>
                  Denne er mer nedtonet og brukes f.eks for informasjon om at ressursen kun er for lærere innlogget med
                  feide.
                </p>
                <MessageBoxWrapper>
                  <MessageBox type={MessageBoxType.ghost}>
                    <span>{messagesNB.messageBoxInfo.feide}</span>
                  </MessageBox>
                </MessageBoxWrapper>
                <MessageHeader>Tags</MessageHeader>
                <MessageBoxWrapper>
                  <MessageBoxTag tagMessage="Beta" />
                </MessageBoxWrapper>
                <MessageBoxWrapper>
                  <MessageBoxTag tagMessage="Utgått" />
                </MessageBoxWrapper>
                <MessageBoxWrapper>
                  <MessageBoxTag tagMessage="Kommer" />
                </MessageBoxWrapper>
              </p>
            </>
          }
          onSite={[<MessageBoxTabs></MessageBoxTabs>]}
          reactCode={`import { MessageBoxTag, messagesNB, MessageBox, MessageBoxType } from '@ndla/ui';
  
//Direkte kall på fullpage sticky meldingsboks
<MessageBox type={MessageBoxType.fullpage} showCloseButton sticky={true}>
{messagesNB.messageBoxInfo.updateBrowser}
</MessageBox>

//Direkte kall på standard meldingsboks
<MessageBox type={MessageBoxType.medium} showCloseButton>
<span>{messagesNB.messageBoxInfo.noContent}</span>
</MessageBox>

//Direkte kall på meldingsboks med lenker
<MessageBox
links={[
  { text: 'link1', href: 'www.facebook.com' },
  { text: 'link2', href: 'www.facebook.com' },
  { text: 'link3', href: 'www.facebook.com' },
]}>
{messagesNB.messageBoxInfo.newVersion}
</MessageBox>

//Meldingsboks tag
<MessageBoxTag tagMessage="Beta"/>

//Aktivere meldingsboks på programside
<Programme
messageBoxText={'Dette emnet hører til et fag som ikke er oppdatert etter gjeldende læreplan.'}
heading={programme.label}
grades={programme.grades}
image={programme.image}
/>

//Aktivere meldingsboks i artikkel 
<Article

messages={{
  label: 'Fagstoff',
  messageBox: 'Dette emnet hører til et fag som ikke er oppdatert etter gjeldende læreplan.',
}}
messageBoxLinks={[
  { text: 'link1', href: 'www.facebook.com' },
  { text: 'link2', href: 'www.facebook.com' },
  { text: 'link3', href: 'www.facebook.com' },
]}
article={{
  title: 'Artikkel fagstoff',
  introduction:
    'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
  published: '24.04.2018',
  content: () => ()}}></article>

//Aktivere meldingsboks og tag på fagside
<SubjectPage
messagebox={'Dette emnet hører til et fag som ikke er oppdatert etter gjeldende læreplan.'}
messageBoxTagMessage="Beta"
/>
                `}
          usesPropTypes={[
            {
              name: 'type',
              type: 'WrapperProps["boxType"]',
              default: 'undefined',
              description:
                'Enum som kan settes til "ghost", "fullpage" eller "medium" for å toggle mellom de forskjellige boksene',
            },
            {
              name: 'sticky',
              type: 'boolean',
              default: 'false',
              description: 'Sticky gjør at meldingsboksen blir sticky og følger etter på scroll.',
            },
            {
              name: 'showCloseButton',
              type: 'boolean',
              default: 'undefined',
              description: 'Setter på en kryss-knapp som lar brukeren trykke bort meldingsboksen',
            },
            {
              name: 'children',
              type: 'reference',
              default: 'undefined',
              description: 'Innholdet i meldingsboksen',
            },
            {
              name: 'links',
              type: 'LinkProps[]',
              default: 'undefined',
              description: 'list tar inn objekter med to streng properties, text og href',
            },
            {
              name: 'Tag meldingsboks',
              type: '',
              default: '',
              description: '',
            },
            {
              name: 'tagMessage',
              type: 'string',
              default: 'Required',
              description: 'kort tekst som blir satt inne i tag',
            },
          ]}></ComponentInfo>
      </Wrapper>
    </>
  );
};

export default MessageBoxExample;
