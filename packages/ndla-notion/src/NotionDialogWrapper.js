import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from '@ndla/modal';
import NotionHeader from './NotionHeader';
import NotionBody from './NotionBody';

const NotionDialogWrapper = ({ title, children, closeCallback, subTitle }) => (
  <Modal backgroundColor="white" controllable isOpen animation="subtle" onClose={closeCallback}>
    {(onCloseModal) => (
      <Fragment>
        <NotionHeader title={title} subTitle={subTitle} onClose={onCloseModal} />
        <NotionBody>{children}</NotionBody>
      </Fragment>
    )}
  </Modal>
);

NotionDialogWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  closeCallback: PropTypes.func,
  subTitle: PropTypes.string,
};

export default NotionDialogWrapper;
