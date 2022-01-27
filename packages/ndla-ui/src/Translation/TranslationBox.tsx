import React, { ReactNode } from 'react';
//@ts-ignore
import { ArticleTabs } from '@ndla/tabs';

interface Props {
  tabs: {
    id: string;
    title: string;
    content: (() => ReactNode) | ReactNode;
  }[];
}
const TranslationBox = ({ tabs }: Props) => (
  <div className="c-translation-box">
    <div className="c-bodybox c-bodybox--translation">
      <ArticleTabs tabs={tabs} />
    </div>
  </div>
);

export default TranslationBox;
