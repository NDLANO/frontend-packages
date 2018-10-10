import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';
import { spacing, colors } from 'ndla-core';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from 'ndla-modal';

const ContentWrapper = styled.div`
  border-top: 2px solid ${colors.brand.primary};
  margin: -${spacing.small} 0 ${spacing.small} 0;
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.xsmall};
`;

const NotionDialogWrapper = ({ title, children, closeCallback, subtitle }) => (
  <Modal
    backgroundColor="white"
    controllable
    isOpen
    animation="subtle"
    onClose={closeCallback}>
    {onCloseModal => (
      <Fragment>
        <ModalHeader modifier="underline">
          <h1>
            {title}{' '}
            {subtitle ? (
              <small className={cx('subtitle')}>{subtitle}</small>
            ) : null}
          </h1>
          <ModalCloseButton title="Lukk" onClick={onCloseModal} />
        </ModalHeader>
        <ModalBody modifier="no-padding-buttom">
          <ContentWrapper>{children}</ContentWrapper>
        </ModalBody>
      </Fragment>
    )}
  </Modal>
);

NotionDialogWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  closeCallback: PropTypes.func,
  subtitle: PropTypes.string,
};

export default NotionDialogWrapper;
