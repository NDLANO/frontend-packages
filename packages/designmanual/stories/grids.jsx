import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';

import { colors, spacing } from '@ndla/core';
import {
  Grid, Row, Col,
} from '@ndla/grid';

const StyledBlock = styled.div`
  background: ${colors.brand.light};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${spacing.normal};
`;

storiesOf('Grid', module)
  .add('Grid eksempel', () => (
    <div>
      <Grid>
        <Row>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={2}>
            <StyledBlock />
          </Col>
          <Col size={2}>
            <StyledBlock />
          </Col>
          <Col size={2}>
            <StyledBlock />
          </Col>
          <Col size={2}>
            <StyledBlock />
          </Col>
          <Col size={2}>
            <StyledBlock />
          </Col>
          <Col size={2}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={3}>
            <StyledBlock />
          </Col>
          <Col size={3}>
            <StyledBlock />
          </Col>
          <Col size={3}>
            <StyledBlock />
          </Col>
          <Col size={3}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={4}>
            <StyledBlock />
          </Col>
          <Col size={4}>
            <StyledBlock />
          </Col>
          <Col size={4}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={6}>
            <StyledBlock />
          </Col>
          <Col size={6}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <StyledBlock />
          </Col>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Col offset={11} size={1}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col offset={10} size={2}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={4} offset={8}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={8} offset={4}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledBlock />
          </Col>
          <Col size={1} offset={10}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={2}>
            <StyledBlock />
          </Col>
          <Col size={2} offset={8}>
            <StyledBlock />
          </Col>
        </Row>
        <Row>
          <Col size={4}>
            <StyledBlock />
          </Col>
          <Col size={4} offset={4}>
            <StyledBlock />
          </Col>
        </Row>
      </Grid>
      <h1>
        Responsive
      </h1>
      <Grid>
        <Row padding={100} reversed>
          <Col size={3}>
            <StyledBlock>FIRST</StyledBlock>
          </Col>
          <Col size={3}>
            <StyledBlock />
          </Col>
          <Col size={3}>
            <StyledBlock />
          </Col>
          <Col size={3}>
            <StyledBlock />
          </Col>
        </Row>
      </Grid>
    </div>
  ));
