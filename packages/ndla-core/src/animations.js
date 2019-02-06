import spacing from './spacing';

const DURATION_DEFAULT = '400ms';

export default {
  durations: {
    superFast: '100ms',
    fast: '200ms',
    normal: DURATION_DEFAULT,
    slow: '600ms',
  },
  fadeInLeft: duration => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeIn;
        @keyframes fadeIn {
            0% {
              transform: translateX(-${spacing.small});
              opacity: 0;
            }
            100% {
                transform: translateX(0);
              opacity: 1;
            }
          }`,
  fadeInBottom: duration => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeInBottom;
        @keyframes fadeInBottom {
            0% {
              transform: translateY(${spacing.small});
              opacity: 0;
            }
            100% {
                transform: translateY(0);
              opacity: 1;
            }
          }`,
  fadeInScaled: duration => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeInScaled;
        @keyframes fadeInScaled {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }`,
  fadeOut: duration => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeOut;
        @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }`,
};
