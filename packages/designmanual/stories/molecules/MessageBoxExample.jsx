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
import MessageBoxTag from '@ndla/ui/lib/MessageBox/MessageBoxTag';
import messages from '@ndla/ui/lib/locale/messages-nb';
import { MessageBox } from '@ndla/ui/lib/MessageBox/MessageBox';
import Tabs from '@ndla/tabs';
import MessageBoxTabs from '../molecules/MessageBoxTabs';
import Table from '../molecules/TableExample';

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  ${mq.range({ until: breakpoints.mobileWide })} {
    width: calc(100% - 40px);
  }
`;
const Code = styled.div`
  padding: 20px;
  margin: 10px;
  background: #ccc;
`;

const MessageHeader = styled.h2`
  border-bottom: #a5bcd3 2px solid; ;
`;
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
                <MessageHeader>Full bredde topp</MessageHeader>
                <p>Brukes i toppen av nettleseren når noe trenger mye oppmerksomhet globalt i systemet.</p>
                <p>
                  <MessageBox type="fullpage" onClose>
                    {messages.messageBoxInfo.updateBrowser}
                  </MessageBox>

                  <MessageBoxWrapper>
                    <MessageHeader>Gul versjon</MessageHeader>
                    <p>
                      Hovedvarianten vi bruker for å gi beskjed til brukeren rundt i systemet. Velg mellom variant som
                      kan klikkes vekk eller ikke.
                    </p>
                    <MessageBox type="medium" onClose>
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
                        { text: 'link1', href: 'www.facebook.com' },
                        { text: 'link2', href: 'www.facebook.com' },
                        { text: 'link3', href: 'www.facebook.com' },
                      ]}
                      onClose>
                      {messages.messageBoxInfo.newVersion}
                    </MessageBox>
                  </MessageBoxWrapper>
                  <MessageHeader>Ghost variant</MessageHeader>
                  <p>
                    Denne er mer nedtonet og brukes f.eks for informasjon om at ressursen kun er for lærere innlogget
                    med feide.
                  </p>
                  <MessageBoxWrapper>
                    <MessageBox type="ghost">
                      <span>{messages.messageBoxInfo.feide}</span>
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
