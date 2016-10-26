/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import Button from './button/Button';
import Logo from './logo/Logo';
import Pager from './pager/Pager';
import { Masthead, MastheadItem } from './masthead/Masthead';
import { SiteNav, SiteNavItem } from './siteNav/SiteNav';
import { OneColumn } from './layout/OneColumn';
import { Footer, FooterText, FooterRuler, FooterEditor } from './footer/Footer';

// expose the children to top level exports for ease of use
Footer.Text = FooterText;
Footer.Ruler = FooterRuler;
Footer.Editor = FooterEditor;

export {
  Button,
  Footer,
  Logo,
  Masthead,
  MastheadItem,
  OneColumn,
  Pager,
  SiteNav,
  SiteNavItem,
};
