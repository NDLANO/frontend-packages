/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, LicenseIconList } from 'ndla-ui';
import { getLicenseByNBTitle } from 'ndla-licenses';
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
  const license = getLicenseByNBTitle(video.custom_fields.license, locale);

  return (
    <div key={video.id} {...classes('list-item', active)}>
      <div {...classes('list-item-inner')}>
        <img
          role="presentation"
          alt="presentation"
          src={video.images.thumbnail.src}
        />
        <div {...classes('information')}>
          <h2>
            {video.name}
          </h2>
          <div {...classes('copyright-author')}>
            {video.custom_fields.licenseinfo}
          </div>
          <div {...classes('license')}>
            {license.rights
              ? <LicenseIconList licenseRights={license.rights} noText />
              : license}
          </div>
          <Button
            {...classes('button')}
            outline
            onClick={() => onVideoPreview(video)}>
            {translations.previewVideo}
          </Button>
          <Button {...classes('button')} onClick={() => onSelectVideo(video)}>
            {translations.addVideo}
          </Button>
        </div>
      </div>

      {selectedVideo && selectedVideo.id === video.id
        ? <PreviewVideo
            onVideoPreview={onVideoPreview}
            selectedType="brightcove">
            <iframe
              className="c-video-preview__video"
              title={selectedVideo.name}
              src={`//players.brightcove.net/${selectedVideo.account_id}/BkLm8fT_default/index.html?videoId=${selectedVideo.id}`}
              allowFullScreen
            />
          </PreviewVideo>
        : ''}
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
