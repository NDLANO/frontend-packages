import React from 'react';

import {
  Grid, Row, Col,
} from '@ndla/grid';

import GridBlock from './gridBlock';
import { cssRow } from './styles';

const GridVariants = () => (
  <div>
    <Grid>
      <h1>Reversert</h1>
      <Row reversed css={cssRow}>
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
    </Grid>
    <Grid>
      <h1>Venstrestilt</h1>
      <Row align="left" css={cssRow}>
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
      </Row>
    </Grid>
    <Grid></Grid>
    <Grid>
      <h1>Midtstilt</h1>
      <Row align="center" css={cssRow}>
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
      </Row>
    </Grid>
    <Grid>
      <h1>Høyre justert</h1>
      <Row align="right" css={cssRow}>
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
      </Row>
    </Grid>
  </div>
);

export default GridVariants;