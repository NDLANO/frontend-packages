/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Time, User, Additional } from 'ndla-icons/common';
import { Trans } from 'ndla-i18n';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from 'ndla-ui';
import ArticleAuthorContent from './ArticleAuthorContent';

const classes = new BEMHelper({
  name: 'article-byline',
  prefix: 'c-',
});

class ArticleByline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuthor: null,
    };
    this.onSelectAuthor = this.onSelectAuthor.bind(this);
  }

  onSelectAuthor(showAuthor = null) {
    this.setState({
      showAuthor,
    });
  }

  render() {
    const { authors, license, licenseBox, updated, additional } = this.props;
    const { showAuthor } = this.state;
    const authorsLinkable =
      authors.length > 1 || (authors[0].title && authors[0].role);

    return (
      <Trans>
        {({ t }) => (
          <div {...classes()}>
            {authors.length && (
              <span {...classes('flex')}>
                <span {...classes('icon')}>
                  <User />
                </span>
                <span {...classes('authors')}>
                  {authorsLinkable ? (
                    <Modal
                      narrow
                      onClose={this.onSelectAuthor}
                      activateButton={
                        <Button link>
                          {authors.length > 1
                            ? t('article.multipleAuthorsLabel')
                            : authors[0].name}
                        </Button>
                      }>
                      {onClose => (
                        <Fragment>
                          <ModalHeader modifier="no-bottom-padding">
                            <ModalCloseButton
                              onClick={onClose}
                              title={t('article.closeLabel')}
                            />
                          </ModalHeader>
                          <ModalBody>
                            <ArticleAuthorContent
                              showAuthor={showAuthor}
                              onSelectAuthor={this.onSelectAuthor}
                              authors={authors}
                            />
                          </ModalBody>
                        </Fragment>
                      )}
                    </Modal>
                  ) : (
                    `${authors.map(author => author.name).join(', ')} `
                  )}
                </span>
                <span>{` (${license})`}</span>
              </span>
            )}
            <span {...classes('flex')}>
              <span {...classes('icon')}>
                <Time />
              </span>
              <span {...classes('date')}>
                {t('article.lastUpdated')} {updated}
              </span>
            </span>
            {additional && (
              <span {...classes('flex')}>
                <span {...classes('additional')}>
                  <Additional
                    key="additional"
                    className="c-icon--20 u-margin-right-tiny"
                  />
                  {t('article.additionalLabel')}
                </span>
              </span>
            )}
            {licenseBox && (
              <span {...classes('flex')}>
                <Modal
                  activateButton={
                    <Button link>{t('article.useContent')}</Button>
                  }
                  size="medium">
                  {onClose => (
                    <Fragment>
                      <ModalHeader modifier="no-bottom-padding">
                        <ModalCloseButton onClick={onClose} title="Lukk" />
                      </ModalHeader>
                      <ModalBody>{licenseBox}</ModalBody>
                    </Fragment>
                  )}
                </Modal>
              </span>
            )}
          </div>
        )}
      </Trans>
    );
  }
}

ArticleByline.propTypes = {
  id: PropTypes.string,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
      introduction: PropTypes.string,
      role: PropTypes.string,
      urlContributions: PropTypes.string,
      urlAuthor: PropTypes.string,
    }),
  ),
  updated: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  licenseBox: PropTypes.node,
  additional: PropTypes.bool,
};

ArticleByline.defaultProps = {
  id: 'article-line-id',
  additional: false,
};

export default ArticleByline;
