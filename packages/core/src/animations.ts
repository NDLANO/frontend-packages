import spacing from './spacing';

const DURATION_DEFAULT = '400ms';

export default {
  durations: {
    superFast: '100ms',
    fast: '200ms',
    normal: DURATION_DEFAULT,
    slow: '600ms',
  },
  fadeInLeftFromZero: (duration?: string) => `
  animation-duration: ${duration || DURATION_DEFAULT};
    width: 0;
    overflow: hidden;
    animation-name: fadeInLeft;
    animation-fill-mode: forwards;
        @keyframes fadeInLeft {
            0% {
              transform: translateX(-${spacing.small});
              opacity: 0;
              width: inherit;
              overflow: inherit;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
              width: inherit;
              overflow: inherit;
            }
          }`,
  fadeInLeft: (duration?: string) => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeInLeft;
        @keyframes fadeInLeft {
            0% {
              transform: translateX(-${spacing.small});
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }`,
  fadeInBottom: (duration?: string, distance?: string) => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeInBottom;
        @keyframes fadeInBottom {
            0% {
              transform: translateY(${distance || spacing.small});
              opacity: 0;
            }
            100% {
                transform: translateY(0);
              opacity: 1;
            }
          }`,
  fadeInTop: (duration?: string, distance?: string) => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeInTop;
        @keyframes fadeInTop {
            0% {
              transform: translateY(-${distance || spacing.small});
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }`,
  fadeInScaled: (duration?: string) => `
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
  fadeOut: (duration?: string) => `
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
  fadeIn: (duration?: string) => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: fadeIn;
        @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }`,
};
