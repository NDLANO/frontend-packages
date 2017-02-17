/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import Button from './button/Button';
import Logo from './logo/Logo';
import Aside from './aside/Aside';
import Table from './table/Table';
import Pager from './pager/Pager';
import { Masthead, MastheadItem } from './masthead/Masthead';
import { SiteNav, SiteNavItem } from './siteNav/SiteNav';
import Icon from './icons/Icon';
import { OneColumn } from './layout/OneColumn';
import PageContainer from './layout/PageContainer';
import { Hero } from './hero/Hero';
import { Footer, FooterText, FooterRuler, FooterEditor } from './footer/Footer';
import ArticleIntroduction from './article/ArticleIntroduction';
import Article from './article/Article';
import LicenseIconList from './license/LicenseIconList';
import LicenseByline from './license/LicenseByline';
import ClickableLicenseByline from './license/ClickableLicenseByline';
import Modal from './modal/Modal';
import LicenseToggle from './modal/LicenseToggle';

import { enableResponsiveTables } from './table/tables-collapse';

// expose the children to top level exports for ease of use
Footer.Text = FooterText;
Footer.Ruler = FooterRuler;
Footer.Editor = FooterEditor;
Article.Introduction = ArticleIntroduction;

export {
  Article,
  Aside,
  Button,
  ClickableLicenseByline,
  Footer,
  Hero,
  Icon,
  LicenseByline,
  LicenseIconList,
  Logo,
  Masthead,
  MastheadItem,
  OneColumn,
  PageContainer,
  Pager,
  SiteNav,
  SiteNavItem,
  enableResponsiveTables,
  Table,
  Modal,
  LicenseToggle,
};
