import React from 'react';

type Props = {
  children: React.ReactNode;
}

const FrontpageInfo: React.FunctionComponent<Props> = ({ children }) => (
  <div className="c-frontpage-info">{children}</div>
);

export default FrontpageInfo;
