/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ButtonV2 } from '@ndla/button';
import PreviewVideo from './PreviewVideo';
import { YouTubeShape } from './shapes';
import { setLocaleDate, setYouTubeDuration } from './videoHelpers';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

export default function VideoSearchResultYouTube({
  video,
  onVideoPreview,
  selectedVideo,
  onSelectVideo,
  translations,
  locale,
}) {
  const videoData = video?.pagemap?.videoobject?.[0];
  const activeVideo = selectedVideo?.pagemap?.videoobject?.[0]?.videoid === videoData?.videoid;

  if (videoData) {
    return (
      <div {...classes('list-item', activeVideo ? 'active' : '')}>
        <div {...classes('list-item-inner')}>
          <img role="presentation" alt="presentation" src={videoData.thumbnailurl} />
          <div {...classes('information')}>
            <h2>{videoData.name}</h2>
            <div>{`${translations.publishedDate}: ${setLocaleDate(videoData.datepublished, locale)}`}</div>
            <div>{`${translations.duration}: ${setYouTubeDuration(videoData.duration)}`}</div>
            <div>{`${translations.interactioncount}: ${videoData.interactioncount}`}</div>
            <div>{videoData.description}</div>
            <ButtonV2 {...classes('button')} variant="outline" onClick={() => onVideoPreview(video)}>
              {translations.previewVideo}
            </ButtonV2>
            <ButtonV2 data-testid="use-video" {...classes('button')} onClick={() => onSelectVideo(video)}>
              {translations.addVideo}
            </ButtonV2>
          </div>
        </div>

        {activeVideo ? (
          <PreviewVideo onVideoPreview={onVideoPreview} selectedType="youtube">
            <iframe
              className="c-video-preview__video"
              title={selectedVideo.title}
              src={selectedVideo.pagemap.videoobject[0].embedurl}
              // eslint-disable-next-line react/no-unknown-property
              allowFullScreen
            />
          </PreviewVideo>
        ) : (
          ''
        )}
      </div>
    );
  } else {
    return <div />;
  }
}

VideoSearchResultYouTube.propTypes = {
  video: YouTubeShape.isRequired,
  onVideoPreview: PropTypes.func.isRequired,
  selectedVideo: YouTubeShape,
  onSelectVideo: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    addVideo: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
  }),
};
