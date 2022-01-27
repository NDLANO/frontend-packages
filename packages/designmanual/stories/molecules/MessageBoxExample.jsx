import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MessageBox } from '@ndla/ui/lib/MessageBox/MessageBox';
import { useTranslation } from 'react-i18next';
import Tabs from '@ndla/tabs';
import MessageBoxTabs from '../molecules/MessageBoxTabs';
import messages from '@ndla/ui/lib/locale/messages-nb';

import Table from '../molecules/TableExample';
import { Tab } from 'react-tabs';

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const Code = styled.div`
  padding: 20px;
  margin: 10px;
  background: #ccc;
`;

const MiniMesssage = styled.div`
  background-color: #f9f4c8;
  text-align: center;
  display: inline-block;
  padding: 5px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
`;
const MessageHeader = styled.h2``;
const MessageBoxWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: auto%;
`;
const MessageBoxExample = () => {
  return (
    <Wrapper>
      <Tabs
        id="msgTabs"
        tabs={[
          {
            title: 'Komponenter',
            content: (
              <>
                <MessageHeader>Full skjerm variant = trenger mye oppmerksomhet</MessageHeader>
                <p>Brukes i toppen av nettleseren i full skjerm global i systemet.</p>

                <p>
                  <MessageBox sticky={true} type="fullpage" onClose>
                    {messages.messageBoxInfo.updateBrowser}
                  </MessageBox>
                  <br></br> <br></br>
                  <MessageBoxWrapper>
                    <MessageHeader>Gul versjon</MessageHeader>
                    <p>
                      Hoved varianten vi bruker for å gi beskjed til brukeren rundt i systemet. Velg mellom variant som
                      kan klikkes vekk eller ikke.
                    </p>
                    <MessageBox type="medium">
                      <span>{messages.messageBoxInfo.noContent}</span>
                    </MessageBox>
                  </MessageBoxWrapper>
                  <MessageBoxWrapper>
                    <MessageBox type="medium">
                      <span>{messages.messageBoxInfo.outdatedSubject}</span>
                    </MessageBox>
                  </MessageBoxWrapper>
                  <MessageBoxWrapper>
                    <MessageBox
                      links={[
                        { name: 'link1', href: 'www.facebook.com' },
                        { name: 'link2', href: 'www.facebook.com' },
                        { name: 'link3', href: 'www.facebook.com' },
                      ]}>
                      {messages.messageBoxInfo.newVersion}
                    </MessageBox>
                  </MessageBoxWrapper>
                  <MessageHeader>Ghost variant</MessageHeader>
                  <p>
                    Denne er mer nedtonet og brukes f.eks for informasjon om at ressursen kun er for lærere innlogget
                    med feide Informasjonen som er plassert og kan ikke klikkes vekk. Ikonet kan byttes ut med et annet
                    når og hvis behovet dukker opp
                  </p>
                  <MessageBoxWrapper>
                    <MessageBox type="ghost">
                      <span>{messages.messageBoxInfo.feide}</span>
                    </MessageBox>
                  </MessageBoxWrapper>
                  <MessageHeader>Meldingsboks med lenker</MessageHeader>
                  <MessageHeader>Tags</MessageHeader>
                  <MessageBoxWrapper>
                    <MiniMesssage>Beta</MiniMesssage>
                  </MessageBoxWrapper>
                  <MessageBoxWrapper>
                    <MiniMesssage>Utgått</MiniMesssage>
                  </MessageBoxWrapper>
                  <MessageBoxWrapper>
                    <MiniMesssage>Kommer</MiniMesssage>
                  </MessageBoxWrapper>
                </p>
              </>
            ),
          },

          {
            title: 'På side',
            content: <MessageBoxTabs></MessageBoxTabs>,
          },
          {
            title: 'Kode eksempel',
            content: (
              <Wrapper>
                <Code class="demo-content">
                  <h2>Lorem ipsum</h2>
                  <p>
                    <b>Lorem ipsum</b>
                    <br />
                    <span>is simply dummy text of the printing and typesetting industry</span>
                  </p>
                  <p>
                    <b>Lorem ipsum</b>
                    <br />
                    <span>is simply dummy text of the printing and typesetting industry</span>
                  </p>
                  <p>
                    <b>Lorem ipsum</b>
                    <br />
                    <span>is simply dummy text of the printing and typesetting industry</span>
                  </p>
                </Code>
              </Wrapper>
            ),
          },
          {
            title: 'PropTypes',
            content: (
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>type</td>
                    <td>Custom TypeScript Prop</td>
                    <td></td>
                    <td>
                      type kan settes til 'ghost', 'fullpage' eller 'medium' for å toggle mellom de forskjellige boksene
                    </td>
                  </tr>
                  <tr>
                    <td>heading</td>
                    <td>string</td>
                    <td></td>
                    <td>Heading gir en mørkere bold tekst på meldingsboksen</td>
                  </tr>
                  <tr>
                    <td>sticky</td>
                    <td>boolean</td>
                    <td></td>
                    <td>Sticky={true} gjør at meldingsboksen blir sticky og følger etter på scroll.</td>
                  </tr>
                  <tr>
                    <td>onClose</td>
                    <td>function</td>
                    <td></td>
                    <td>Setter på en kryss-knapp som lar brukeren trykke bort meldingsboksen</td>
                  </tr>
                  <tr>
                    <td>children</td>
                    <td>reference</td>
                    <td></td>
                    <td>??</td>
                  </tr>
                  <tr>
                    <td>links</td>
                    <td>list</td>
                    <td></td>
                    <td>list tar inn objekter med to properties. 'name' og 'href'</td>
                  </tr>
                </tbody>
              </Table>
            ),
          },
        ]}
      />
    </Wrapper>
  );
};

export default MessageBoxExample;
