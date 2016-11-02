/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-disable max-len */

import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';

import SafeLink from '../SafeLink';

const classes = new BEMHelper({
  name: 'logo',
  prefix: 'c-',
});

export const Logo = ({ to, cssModifier, altText }) =>
  <h1 {...classes('', cssModifier)}>
    <SafeLink to={to} {...classes('link')}>
      <svg viewBox="0 0 58 19" version="1.1">
        <title {...classes('title')}>{altText}</title>
        <g id="COLLECTED" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
          <g id="category-B-Expanded" transform="translate(-102.000000, -13.000000)">
            <g id="topNav">
              <image id="Bitmap" x="102" y="13" width="58" height="19" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAA8CAIAAAC8WSwaAAAABGdBTUEAALGPC/xhBQAABWpJREFUeAHtXV9oHEUYz93t5e7ayyXXy11aLdG2KRXbYoihRaRQq2jxRetDWyj0RSxYWop/sVJQwSeffNGXikhAqAhVCoKvCoUooljNX1qTNKVtconNpSl3yd7uOTVw5O7mG7Lb2f1mNl/ysvlm5pvf9/1+2Z2Zm50LVSqVJvpxmIGDh46MT0waRmRlO9M09/b29J3/fKWxen38tZO//PZ7NBqtWthFuWw90rn5x+++CYVCK+3qXxvqQ1QQ4dDw6PzCQiOwa2MTjcZlCyuanpltLJ0rzDca1beE1YeoIMLMhjQXFWRnldNtrdwm7Rm+K25ldYykG3W40AkJ6UYnttTBSrpRhwudkJBu8NnScUpLusHXjXaTcJYy0g2+bnREQLrRkTV8zKQbfA50REC6wWeNxsX4HOiIgMbFOrJGmN1kgJ5TbrJGbUg3+Bqg8Q0+B/4gCIdl/r/pOL4xTpx+c2BoJBKRmYgHJ8+y7DMnTxx+5SWuK3TMN27e5gKTa7zc/+u75z7CooZR8Pyz+z84+w43KOPny/1T+Ty3DNc4Ng7ugfrz74HRq//gwvOh9ztzc4Mjoz50BHWRy7VDReFNG3NQGa69pSUJAejIZqGiINnjsRhuONlMBgKg1uMJQkl21TJAulGNET3wkG704Ek1lKQb1RjRAw/pBp8naN1vyTRxwZVKJQiA6P0pgy0dhEKVJq9ezAs13Xduli0I3BqxQ+t+zdEoowDrjTzbrsTjcYgCkW6+v9DXtXUL1FKKvVgqHXjx0J1CQYo35uTbvi8e7eyU5Y3rhy13vXz0eNnyXO77nn7qSv9PkKq42CQa2V3wjyt/7X3mBeaz7o6YbmsT6WbH9q72zAaJULiu6t6W5dZZvXFPb0+qpWX19V3U7Nq2xZ97QKy5edPGDhcIZTUZGhmF1ldF45v8zIwsBJCfYrHI3pGGSl3Yp6Y8X/uemnbThWXbLsLBbWKaZS6AXHtGpBtuGzLa93/4Yz5WAOWn7lYPVdPFTrpxzFQsFjOMmmMlVuNCMEzRUVKkm9WQXlMnEY+tS4ATjZqqwf2DdOOYW5ONyLyfTDmG5W8D0o3jfBeLJfbruJmGDQSzOdE8XMNIAwX56rWxr76+gBjS9clJqHfSDZQZfPvg8Mhn57/Ex8FDELTnlGDawgtfaVsyuV5ZfEHTjbKJ1nGyLUimlrpZO8trAuZwi7TUDW7KqHeWARoXaymDVDIZidScnuxFGGyZinvcLunGi2z74fPTTz4++NwBr3u6eOmHU2+f5faCfL8JRyJy91FwgwyesTWVSiQSXseVTrdxu2BjfOTxTSTM9rNpdsQ8N5UPYoQ+XRf4LC0uCkplFS0s3INcIevGsmVuvmFBrhEVCmaUENNy7ci6kRsM8yZdiLIQyl2/kXuwgYsYg6abxcUlF1mgJk4zEDTdOI1f0/r0nNKUuLUOG/9+I/fB39qa8prSjpzM0zDcbctnb6J4HSbzL/hgFXn9RnrwA0PDYp+QTJcnYlBp1SerNsP7+rFqBX8uxieuP/7YDk+3HbL16Ju3wOOhgqabY6++7g9zuL288d65t97/0GsMts1/D4b1GzTdeJ1KP/0LBr//vxwteenLUWj44xtHcKmyIhkg3ShChGYwSDeaEaYIXNKNIkRoBoN0oxlhisAN37o9DUGBjiOA6ruw25aVn/2X2/DuXc4Xuy/XzM9yvsCd68Rn4zR8gkc+zz/cQ3B4tD+bJVykiFFm7Hmye3CYf7jy+nWe7wxi+7a6d+8sFOYb0W9++KFG47LliV07zSUT/TPhOnhs2ty9e1edsfpnb083AxyuPZfetuxsFjxbmi0Kb9/m7blVVXiOLhiw/wBARlyo3vQKfwAAAABJRU5ErkJggg==" />
            </g>
          </g>
        </g>
      </svg>
    </SafeLink>
  </h1>
;

Logo.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  altText: PropTypes.string.isRequired,
  cssModifier: PropTypes.string,
};

Logo.defaultProps = {
  to: '/',
};

export default Logo;
