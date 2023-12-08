/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import spacing from './spacing';

const DURATION_DEFAULT = '400ms';

const animations = {
  durations: {
    superFast: '100ms',
    fast: '200ms',
    normal: DURATION_DEFAULT,
    slow: '600ms',
  },
  fadeInLeftFromZero: (duration?: string) => `
  animation-duration: ${duration || DURATION_DEFAULT};
    width: 0;
    height: 0;
    overflow: hidden;
    animation-name: fadeInLeft;
    animation-fill-mode: forwards;
      @keyframes fadeInLeft {
          0% {
            transform: translateX(-${spacing.small});
            opacity: 0;
            width: inherit;
            overflow: inherit;
            height: inherit;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
            width: inherit;
            overflow: inherit;
            height: inherit;
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
  fadeOutLeft: (duration?: string) => `
        animation-duration: ${duration || DURATION_DEFAULT};
          animation-name: fadeOutLeft;
            @keyframes fadeOutLeft {
                0% {
                  transform: translateX(0);
                  opacity: 1;
                }
                100% {
                  transform: translateX(${spacing.small});
                  opacity: 0;
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
  fadeOutBottom: (duration?: string, distance?: string) => `
        animation-duration: ${duration || DURATION_DEFAULT};
          animation-name: fadeOutBottom;
            @keyframes fadeOutBottom {
                0% {
                  transform: translateY(0);
                  opacity: 1;
                }
                100% {
                    transform: translateY(${distance || spacing.small});
                  opacity: 0;
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
  fadeOutTop: (duration?: string, distance?: string) => `
        animation-duration: ${duration || DURATION_DEFAULT};
          animation-name: fadeOutTop;
            @keyframes fadeOutTop {
                0% {
                  transform: translateY(${distance || spacing.small});
                  opacity: 1;
                }
                100% {
                  transform: translateY(0);
                  opacity: 0;
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
  fadeOutScaled: (duration?: string) => `
        animation-duration: ${duration || DURATION_DEFAULT};
          animation-name: fadeOutScaled;
            @keyframes fadeOutScaled {
                0% {
                  transform: scale(1);
                  opacity: 1;
                }
                100% {
                  transform: scale(0.5);
                  opacity: 0;
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
  toggledContentWithSwitchAnimation: (duration?: string, animationName = 'toggledContentWithSwitchAnimation') => `
  animation-duration: ${duration || DURATION_DEFAULT};
    animation-name: ${animationName};
      @keyframes ${animationName} {
        0% {
          opacity: 0.5;
        }
        99% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
  `,
};

export default animations;
