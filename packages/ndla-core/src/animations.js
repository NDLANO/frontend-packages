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
};
