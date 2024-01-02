/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors } from "@ndla/core";

const Wrapper = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  right: 0;
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.brand.greyLightest};
`;

const Placeholder = styled.div`
  position: absolute;
  display: block;
  height: 100vh;
  width: 100vw;
  margin-top: 86px;
  background-position-x: center;
  background-position-y: 65px;
  background-repeat: no-repeat;
  animation-name: pulseAnimation;
  animation-duration: 1.6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  @media (max-width: 476px) {
    background-size: 280px 609px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyODBweCIgaGVpZ2h0PSI2MDlweCIgdmlld0JveD0iMCAwIDI4MCA2MDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJ0aW55IiBmaWxsPSIjRTZFNkU2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPiAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iMjEiIHdpZHRoPSIxNjQuMzA1NTU2IiBoZWlnaHQ9IjMyIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwLjgzMzMzMzMiIGhlaWdodD0iMTYiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSIxODAiIHdpZHRoPSIyODAiIGhlaWdodD0iMjcwIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iNzAiIHdpZHRoPSIyODAiIGhlaWdodD0iMjUiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI5OCIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyNSI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjEyNSIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyNSI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjQ4MCIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIxOCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjUwOCIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIxOCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjUzNSIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIxOCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjU2MyIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIxOCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjU5MSIgd2lkdGg9IjE5Mi41IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
  }
  @media (min-width: 476px) {
    background-size: 375px 848px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIzNzVweCIgaGVpZ2h0PSI4NDhweCIgdmlld0JveD0iMCAwIDM3NSA4NDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJzbWFsbCIgZmlsbD0iI0U2RTZFNiIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjI3IiB3aWR0aD0iMjIwLjU4ODIzNSIgaGVpZ2h0PSI0MiI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NC4xNDQzODUiIGhlaWdodD0iMjEiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSIyMTUiIHdpZHRoPSIxMTAuMjk0MTE4IiBoZWlnaHQ9IjIxIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMjY0LjcwNTg4MiIgeT0iMjE1IiB3aWR0aD0iMTEwLjI5NDExOCIgaGVpZ2h0PSIyMSI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjI5MCIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIzNTEiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI5MSIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIzMiI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjEyNyIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIzMiI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjE2MyIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIzMiI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjY4MCIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjcxNiIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9Ijc1MiIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9Ijc4OCIgd2lkdGg9IjM3NSIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjgyNCIgd2lkdGg9IjI1Ny42ODcxNjYiIGhlaWdodD0iMjQiPjwvcmVjdD4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);
  }
  @media (min-width: 601px) {
    background-position-y: 95px;
    background-size: 530px 848px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MzBweCIgaGVpZ2h0PSI4NDhweCIgdmlld0JveD0iMCAwIDUzMCA4NDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJhcnRpY2xlLW1lZGl1bSIgZmlsbD0iI0U2RTZFNiIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjI3IiB3aWR0aD0iMzExIiBoZWlnaHQ9IjQyIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iMCIgd2lkdGg9Ijc3IiBoZWlnaHQ9IjIxIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iMjE1IiB3aWR0aD0iMTU2IiBoZWlnaHQ9IjIxIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMzc0IiB5PSIyMTUiIHdpZHRoPSIxNTYiIGhlaWdodD0iMjEiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSIyOTAiIHdpZHRoPSI1MzAiIGhlaWdodD0iMzUxIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iOTEiIHdpZHRoPSI1MzAiIGhlaWdodD0iMzIiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSIxMjciIHdpZHRoPSI1MzAiIGhlaWdodD0iMzIiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSIxNjMiIHdpZHRoPSI1MzAiIGhlaWdodD0iMzIiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI2ODAiIHdpZHRoPSI1MzAiIGhlaWdodD0iMjQiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI3MTYiIHdpZHRoPSI1MzAiIGhlaWdodD0iMjQiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI3NTIiIHdpZHRoPSI1MzAiIGhlaWdodD0iMjQiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI3ODgiIHdpZHRoPSI1MzAiIGhlaWdodD0iMjQiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI4MjQiIHdpZHRoPSIzNjMiIGhlaWdodD0iMjQiPjwvcmVjdD4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);
  }
  @media (min-width: 768px) {
    background-size: 624px 848px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI2MjRweCIgaGVpZ2h0PSI4NDhweCIgdmlld0JveD0iMCAwIDYyNCA4NDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJhcnRpY2xlLWxhcmdlIiBmaWxsPSIjRTZFNkU2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPiAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iMjciIHdpZHRoPSIzMjYiIGhlaWdodD0iNDIiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSIwIiB3aWR0aD0iODEiIGhlaWdodD0iMjEiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSIyMTUiIHdpZHRoPSIxNjMiIGhlaWdodD0iMjEiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSI0NjEiIHk9IjIxNSIgd2lkdGg9IjE2MyIgaGVpZ2h0PSIyMSI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjI5MCIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIzNTEiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiB4PSIwIiB5PSI5MSIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIzMiI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjEyNyIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIzMiI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjE2MyIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIzMiI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjY4MCIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjcxNiIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9Ijc1MiIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9Ijc4OCIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIHg9IjAiIHk9IjgyNCIgd2lkdGg9IjM4MC42NCIgaGVpZ2h0PSIyNCI+PC9yZWN0PiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
  }
`;

const ContentPlaceholder = () => {
  return (
    <Wrapper>
      <Placeholder />
      <Background />
    </Wrapper>
  );
};

export default ContentPlaceholder;
