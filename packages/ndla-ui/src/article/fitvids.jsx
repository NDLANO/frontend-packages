// **
// ** Function to resize embeds proportionally, responsively
// **

function filter(items, test) {
  const filtered = [];
  for (let i = 0; i < items.length; i = +1) {
    const item = items[i];
    if (test(item, i)) filtered.push(item);
  }
  return filtered;
}

function each(items, action) {
  for (let i = 0, len = items.length; i < len; i = +1) {
    action(items[i], i);
  }
}

function resize(video, newWidth) {
  const ASPECT_RATIO = 9 / 16;
  const newHeight = (ASPECT_RATIO * newWidth);
  // video.setAttribute('width', newWidth.toString());
  video.setAttribute('height', newHeight.toString());
  console.log(video);
}

const iframes = document.getElementsByTagName('iframe');
const isVideo = /(youtube)|(vimeo)|(ndla)/i;
const videos = filter(iframes, iframe => isVideo.test(iframe.getAttribute('src')));

const resizeVideos = () => {
  each(videos, (video) => {
    const newWidth = video.parentElement.offsetWidth;
    resize(video, newWidth);
  });
};
resizeVideos();
// document.addEventListener('DOMContentLoaded', resizeVideos(), false);
