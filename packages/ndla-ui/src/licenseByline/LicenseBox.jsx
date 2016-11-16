/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */


import React, { Component, PropTypes } from 'react';
import BEMHelper from 'react-bem-helper'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import LicenseByline from './LicenseByline';
// import Citation from './Citation';
// import Icon from './icons/Icons';
const classes = new BEMHelper({
  name: 'LicenseBox',
  prefix: 'c-',
});

class LicenseBox extends Component {
  constructor() {
    super();
    this.licenseActionHandler = this.licenseActionHandler.bind(this);
    this.state = {
      licenseAction: 0,
      hideLicenseByline: false,
    };
  }
  licenseBoxHandler() {
    this.setState({
      hideLicenseByline: !this.state.hideLicenseByline,
    });
  }
  licenseActionHandler(index) {
    this.setState({
      licenseAction: index,
    });
  }

  render() {
    const { article, children, licenseType, images, h5p, videos } = this.props;
    const { licenseAction } = this.state;

    return (
      <div {...classes()}>
        {children}
        <h2 {...classes('heading')}>license.heading</h2>
        <p {...classes('body')}>license.body</p>
        <section {...classes('authors')}>
          <ul {...classes('list')}>{article.copyright.authors.length > 1 ? 'Opphavspersoner' : 'Opphavsperson'}:
            {
              article.copyright.authors.map((author, i) => (<li className="license__list-item" key={i}>{author.name} {author.type ? `(${author.type})` : ''}</li>))
            }
          </ul>
        </section>
        <section {...classes('publication-info')}>
          Opprettet {article.created}. Sist oppdatert {article.updated}
        </section>
        <section {...classes('tabs')}>
          <h2 className="license__heading">Sitere eller gjenbruk {article.contentType}:</h2>
          <Tabs
            onSelect={this.licenseActionHandler}
            selectedIndex={licenseAction}
          >
            <TabList>
              {images.length && <Tab>Bilder</Tab>}
              <Tab>Tekst</Tab>
              {/*h5ps.length && <Tab>Interaktivitet</Tab>*/}
              {/*videos.length && <Tab>Video</Tab>*/}
              <Tab>Sitere</Tab>
            </TabList>
            {images.length &&
              <TabPanel>
                bilder
              </TabPanel>
            }
            <TabPanel>Artikkeltekst: Last ned som (word), (txt), (pdf)
            <div>
              <textarea className="license__textarea" name="ArticleText" rows="20" defaultValue={article.content} />
            </div>
            </TabPanel>


          </Tabs>
        </section>
      </div>
    );
  }
}
//
//   render() {

//     const licenseMap = (licenseId) => {
//       const licenseKey = licenseId.replace(/-/g, '');
//       switch (licenseKey) {
//         case 'byncnd' : return {
//           short: t('license.restrictedUse'),
//           heading: t('license.headingPhrase.byncnd'),
//           img: [<Icon.LicenseBy />, <Icon.LicenseNc />, <Icon.LicenseNd />],
//           body: t('license.bodyPhrase.byncnd') };
//         case 'byncsa' : return {
//           short: t('license.restrictedUse'),
//           heading: t('license.headingPhrase.byncsa'),
//           img: [<Icon.LicenseBy />, <Icon.LicenseNc />, <Icon.LicenseSa />],
//           body: t('license.bodyPhrase.byncsa') };
//         case 'bync' : return {
//           short: t('license.usePhrase.freeUse'),
//           heading: t('license.headingPhrase.bync'),
//           img: [<Icon.LicenseBy />, <Icon.LicenseNc />],
//           body: t('license.bodyPhrase.bync') };
//         case 'bynd' : return {
//           short: t('license.usePhrase.freeUse'),
//           heading: t('license.headingPhrase.bynd'),
//           img: [<Icon.LicenseBy />, <Icon.LicenseNd />],
//           body: t('license.bodyPhrase.bynd') };
//         case 'bysa' : return {
//           short: t('license.usePhrase.freeUse'),
//           heading: t('license.headingPhrase.bysa'),
//           img: [<Icon.LicenseBy />, <Icon.LicenseSa />],
//           body: t('license.bodyPhrase.bysa') };
//         default : return {
//           heading: licenseKey,
//           img: [''],
//           body: licenseKey };
//       }
//     };
//     const license = licenseMap(licenseType);
//
//     const oembedH5p = document.createElement('div');
//     oembedH5p.innerHTML = article.content;
//     const h5ps = [].slice.apply(oembedH5p.querySelectorAll('iframe'));
//
//     const oembedVideos = document.createElement('div');
//     oembedVideos.innerHTML = article.content;
//     const videos = [].slice.apply(oembedVideos.querySelectorAll('video'));
//
//     const oembedImages = document.createElement('div');
//     oembedImages.innerHTML = article.content;
//     const images = [].slice.apply(oembedImages.querySelectorAll('img'));
//
//     /* insert introduction into list if present */
//     /*
//     if (article.introduction.image) {
//       const img = document.createElement('img');
//       img.src = article.introduction.image.src;
//       images.unshift(img);
//     }
//     if (this.state.hideLicenseByline) return false;
//     return (
//       <div>
//         {this.props.children}
//         <h2>{license.heading}</h2>
//         <p>{license.body}</p>
//         <div className="license-section">
//           <ul className="license__list">{article.copyright.authors.length > 1 ? 'Opphavspersoner' : 'Opphavsperson'}:
//             {
//               article.copyright.authors.map((author, i) => (<li className="license__list-item" key={i}>{author.name} {author.type ? `(${author.type})` : ''}</li>))
//             }
//           </ul>
//         </div>
//         <div className="license-section license__publication-info">
//           Opprettet {article.created}. Sist oppdatert {article.updated}
//         </div>
//         <h2 className="license__heading">Sitere eller gjenbruk {article.contentType.toLowerCase()}:</h2>
//
//         <Tabs
//           onSelect={this.licenseActionHandler}
//           selectedIndex={this.state.licenseAction}
//         >
//           <TabList>
//             {images.length > 0 && <Tab>Bilder</Tab>}
//             <Tab>Tekst</Tab>
//             {h5ps.length > 0 && <Tab>Interaktivitet</Tab>}
//             {videos.length > 0 && <Tab>Video</Tab>}
//             <Tab>Sitere</Tab>
//           </TabList>
//           {images.length > 0 && <TabPanel>
//             <div>
//               <h2>{t('license.heading')}</h2>
//               <ul className="license__list">
//                 <li className="license__list-item">
//                   <ul className="license__list">
//                     {
//                       images.map((image, index) => (
//                         <li className="license__list-item Grid" key={index}>
//                           <div className="Grid-cell">
//                             <figure>
//                               <img alt={image.altText} src={image.src} />
//                             </figure>
//                           </div>
//                           <div className="Grid-cell">
//                             <LicenseByline licenseType="by-nc" />
//                             <a href={image.src} download={image.src.split('.')[image.src.length - 1]}>Download</a>
//                           </div>
//                         </li>
//                     ))
//                     }
//                   </ul>
//                 </li>
//               </ul></div>
//           </TabPanel>}
//           <TabPanel>Artikkeltekst: Last ned som (word), (txt), (pdf)
//             <div>
//               <textarea className="license__textarea" name="ArticleText" rows="20" defaultValue={article.content} />
//             </div>
//           </TabPanel>
//           {h5ps.length > 0 && <TabPanel>
//             <ul className="license__list">
//               {h5ps.map((h5p, index) => <li className="license__list-item" key={index}>
//                 <div dangerouslySetInnerHTML={{ __html: h5p.innerHTML }} />
//                 <LicenseByline licenseType="by-nc" />Av Navn</li>)}
//             </ul>
//           </TabPanel> }
//           {videos.length > 0 && <TabPanel><ul className="license__list">{videos.map(video => (
//             <li className="license__list-item Grid">
//               <div className="license__video Grid-cell">
//                 <div dangerouslySetInnerHTML={{ __html: video.outerHTML }} />
//               </div>
//               <div className="Grid-cell">
//                 <LicenseByline licenseType="by-nc" />Av Navn
//               </div>
//             </li>
//           ))}
//           </ul></TabPanel>}
//           <TabPanel><Citation article={article} /></TabPanel>
//         </Tabs>
//       </div>
//     );
//   }
// }
//
LicenseBox.propTypes = {
  licenseType: PropTypes.string.isRequired,
  article: PropTypes.object,
  images: PropTypes.array,
  videos: PropTypes.array,
  h5ps: PropTypes.array,
};

LicenseBox.defaultProps = {
  article: {
    copyright: {
      authors: [
        '',
      ],
    },
  },
  licenseType: '',
  images: [],
  videos: [],
  h5ps: [],
};

export default LicenseBox;
