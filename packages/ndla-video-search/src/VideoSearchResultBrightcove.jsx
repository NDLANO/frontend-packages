/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';
import { ButtonV2 } from '@ndla/button';
import { getLicenseByNBTitle } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import { PanoramaPhotosphere } from '@ndla/icons/common';
import BEMHelper from 'react-bem-helper';
import PreviewVideo from './PreviewVideo';
import { LicenseShape, BrightcoveShape } from './shapes';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

export default function VideoSearchResultBrightcove({
  video,
  onVideoPreview,
  selectedVideo,
  onSelectVideo,
  locale,
  translations,
}) {
  const active = selectedVideo && selectedVideo.id === video.id ? 'active' : '';
  const license =
    video.custom_fields && video.custom_fields.license ? getLicenseByNBTitle(video.custom_fields.license, locale) : '';
  const thumbnailSource = video.images && video.images.thumbnail ? video.images.thumbnail.src : '';
  const is360video = video.projection === 'equirectangular';

  return (
    <div key={video.id} {...classes('list-item', active)}>
      <div {...classes('list-item-inner')}>
        <img role="presentation" alt="presentation" src={thumbnailSource} />
        <div {...classes('information')}>
          <h2 {...classes('header')}>
            {video.name || ''}
            {is360video && <PanoramaPhotosphere />}
          </h2>
          <div {...classes('copyright-author')}>
            {video.custom_fields && video.custom_fields.licenseinfo ? video.custom_fields.licenseinfo : ''}
          </div>
          <div {...classes('license')}>
            {license.rights ? <LicenseByline licenseRights={license.rights} locale={locale} /> : license}
          </div>
          <ButtonV2 {...classes('button')} variant="outline" onClick={() => onVideoPreview(video)}>
            {translations.previewVideo}
          </ButtonV2>
          <ButtonV2 data-testid="use-video" {...classes('button')} onClick={() => onSelectVideo(video)}>
            {translations.addVideo}
          </ButtonV2>
        </div>
      </div>

      {selectedVideo && selectedVideo.id === video.id ? (
        <PreviewVideo onVideoPreview={onVideoPreview} selectedType="brightcove">
          <iframe
            className="c-video-preview__video"
            title={selectedVideo.name}
            src={`//players.brightcove.net/${selectedVideo.account_id}/BkLm8fT_default/index.html?videoId=${selectedVideo.id}`}
            // eslint-disable-next-line react/no-unknown-property
            allowFullScreen
          />
        </PreviewVideo>
      ) : (
        ''
      )}
    </div>
  );
}

VideoSearchResultBrightcove.propTypes = {
  license: LicenseShape,
  video: BrightcoveShape.isRequired,
  onVideoPreview: PropTypes.func.isRequired,
  selectedVideo: BrightcoveShape,
  onSelectVideo: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    addVideo: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
  }),
};
