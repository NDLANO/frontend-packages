import React from 'react';

import {
  Grid, Row, Col,
} from '@ndla/grid';

import { cssRow } from './styles';
import GridBlock from './gridBlock';

const GridOffset = () => (
  <div>
    <Grid>
      <Row css={cssRow}>
        <Col offset={11} size={1}>
          <GridBlock />
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col offset={10} size={2}>
          <GridBlock />
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={4} offset={8}>
          <GridBlock />
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={8} offset={4}>
          <GridBlock />
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={1}>
          <GridBlock />
        </Col>
        <Col size={1} offset={10}>
          <GridBlock />
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={2}>
          <GridBlock />
        </Col>
        <Col size={2} offset={8}>
          <GridBlock />
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={4}>
          <GridBlock />
        </Col>
        <Col size={4} offset={4}>
          <GridBlock />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default GridOffset;