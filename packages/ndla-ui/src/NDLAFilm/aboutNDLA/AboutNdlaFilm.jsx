import React from 'react';
import PropTypes from 'prop-types';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import Button from '@ndla/button';
import { injectT } from '@ndla/i18n';
import { AboutNDLAFilmNb, AboutNDLAFilmNn, AboutNDLAFilmEn } from './';

const AboutNdlaFilm = ({ aboutNDLAVideo, language, t }) => {
  return (
    <div className="o-wrapper">
      <aside className="c-film-frontpage__about">
        <div>{aboutNDLAVideo}</div>
        <div>
          <h1>{t('ndlaFilm.about.heading')}</h1>
          <p>{t('ndlaFilm.about.text')}</p>
          <Modal
            activateButton={<Button link>{t('ndlaFilm.about.more')}</Button>}>
            {onClose => (
              <>
                <ModalHeader>
                  <ModalCloseButton onClick={onClose} title="Lukk" />
                </ModalHeader>
                <ModalBody>
                  {language === 'nb' && <AboutNDLAFilmNb />}
                  {language === 'nn' && <AboutNDLAFilmNn />}
                  {language === 'en' && <AboutNDLAFilmEn />}
                </ModalBody>
              </>
            )}
          </Modal>
        </div>
      </aside>
    </div>
  );
};

AboutNdlaFilm.propTypes = {
  aboutNDLAVideo: PropTypes.shape({}),
};

export default injectT(AboutNdlaFilm);
