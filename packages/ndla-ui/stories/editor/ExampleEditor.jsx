/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import {
convertFromRaw,
EditorState,
} from 'draft-js';
import NDLAEditor from './NDLAEditor';

const initialState = {
  entityMap: {
    0: {
      type: 'image',
      mutability: 'IMMUTABLE',
      align: 'right',
      data: {
        src: 'http://cdn.c.photoshelter.com/img-get2/I0000ej7TThAXh1g/sec=wdfsdfoeflwefms1000ed20161218PVDpmOVXSJ8u6zh/fit=1440x1440/.jpg',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'Brukeropplevelse og brukergrensesnitt',
      type: 'header-one',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    }, {
      key: '9gmxs',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    }, {
      key: '9xgmxs',
      text: 'I første rekke handler utvikling av nettsider om å skape en god brukeropplevelse. Det vil si at brukerne av et nettsted skal forstå strukturen og klare å orientere seg, slik at de finner det de leter etter.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    }, {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [{
        offset: 0,
        length: 1,
        key: 0,
      }],
      data: {},
    }, {
      key: 'e23a8',
      text: 'Hva er forskjellen på design av UX, brukeropplevelse, og design av UI, brukergrensesnitt?',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    }],
};

const ExampleEditor = () => {
  const editorState = EditorState.createWithContent(convertFromRaw(initialState));
  return (
    <NDLAEditor editorState={editorState} />
  );
};

ExampleEditor.propTypes = {

};

export default ExampleEditor;
