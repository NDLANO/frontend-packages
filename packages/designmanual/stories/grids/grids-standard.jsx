import React from 'react';

import {
  Grid, Row, Col,
} from '@ndla/grid';

import GridBlock from './gridBlock';
import { cssRow } from './styles';

const GridStandard = () => (
  <div>
    <Grid reverse={'lg'}>
      <Row css={cssRow}>
        <Col size={1}>
          <GridBlock>
            1
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            2
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            3
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            4
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            5
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            6
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            7
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            8
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            9
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            10
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            11
          </GridBlock>
        </Col>
        <Col size={1}>
          <GridBlock>
            12
          </GridBlock>
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={2}>
          <GridBlock>
            1
          </GridBlock>
        </Col>
        <Col size={2}>
          <GridBlock>
            2
          </GridBlock>
        </Col>
        <Col size={2}>
          <GridBlock>
            3
          </GridBlock>
        </Col>
        <Col size={2}>
          <GridBlock>
            4
          </GridBlock>
        </Col>
        <Col size={2}>
          <GridBlock>
            5
          </GridBlock>
        </Col>
        <Col size={2}>
          <GridBlock>
            6
          </GridBlock>
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={3}>
          <GridBlock>
            1
          </GridBlock>
        </Col>
        <Col size={3}>
          <GridBlock>
            2
          </GridBlock>
        </Col>
        <Col size={3}>
          <GridBlock>
            3
          </GridBlock>
        </Col>
        <Col size={3}>
          <GridBlock>
            4
          </GridBlock>
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={4}>
          <GridBlock>
            1
          </GridBlock>
        </Col>
        <Col size={4}>
          <GridBlock>
            2
          </GridBlock>
        </Col>
        <Col size={4}>
          <GridBlock>
            3
          </GridBlock>
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={6}>
          <GridBlock>
            1
          </GridBlock>
        </Col>
        <Col size={6}>
          <GridBlock>
            2
          </GridBlock>
        </Col>
      </Row>
      <Row css={cssRow}>
        <Col size={12}>
          <GridBlock>
            1
          </GridBlock>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default GridStandard;