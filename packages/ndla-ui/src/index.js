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
import OneColumn from './layout/OneColumn';
import PageContainer from './layout/PageContainer';
import { Hero } from './hero/Hero';
import { Footer, FooterText, FooterRuler, FooterEditor } from './footer/Footer';
import ArticleIntroduction from './article/ArticleIntroduction';
import ArticleFootNotes from './article/ArticleFootNotes';
import ArticleContent from './article/ArticleContent';
import Article from './article/Article';
import { Figure, FigureCaption, FigureDetails } from './article/Figure';
import LicenseIconList from './license/LicenseIconList';
import LicenseByline from './license/LicenseByline';
import ToggleLicenseBox from './license/ToggleLicenseBox';
import ClickableLicenseByline from './license/ClickableLicenseByline';
import ClickToggle from './common/ClickToggle';
import TopicArticle from './topic/TopicArticle';
import TopicBreadcrumb from './topic/TopicBreadcrumb';
import TopicIntroductionList from './topic/TopicIntroductionList';
import TopicMenu from './topicMenu/TopicMenu';
import ResourceList from './resources/ResourceList';
import ResourceWrapper from './resources/ResourceWrapper';
import ResourceSubsetList from './resources/ResourceSubsetList';
import { MediaList, MediaListItem, MediaListItemBody, MediaListItemActions, MediaListItemImage, MediaListItemMeta } from './license/MediaList';


// expose the children to top level exports for ease of use
Footer.Text = FooterText;
Footer.Ruler = FooterRuler;
Footer.Editor = FooterEditor;
Article.Introduction = ArticleIntroduction;
Article.FootNotes = ArticleFootNotes;
Article.Content = ArticleContent;

export {
  Article,
  Aside,
  Button,
  ClickableLicenseByline,
  ClickToggle,
  Footer,
  Figure, FigureCaption, FigureDetails,
  Hero,
  Icon,
  LicenseByline,
  LicenseIconList,
  Logo,
  Masthead,
  MastheadItem,
  MediaList, MediaListItem, MediaListItemBody, MediaListItemActions, MediaListItemImage, MediaListItemMeta,
  OneColumn,
  PageContainer,
  Pager,
  ResourceWrapper,
  ResourceList,
  ResourceSubsetList,
  SiteNav,
  SiteNavItem,
  Table,
  TopicArticle,
  TopicBreadcrumb,
  ToggleLicenseBox,
  TopicIntroductionList,
  TopicMenu,
};
