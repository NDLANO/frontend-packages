import React from 'react';
import { injectT } from '@ndla/i18n';
import {
  FrontpageHeader,
  OneColumn,
  SubjectSectionTitle,
  BlogPost,
  BlogPostWrapper,
  FFFrontpageHeader,
} from '@ndla/ui';
import { dummyLanguageOptions } from '../../dummydata/index';
import BlogExampleImage1 from '../../images/blog/fagfornyelse-blog.jpg';
import PropTypes from 'prop-types';

const FFFrontpage = ({ t }) => {
  return (
    <>
      <FFFrontpageHeader locale="nb" languageOptions={dummyLanguageOptions} />
      <main>
        <OneColumn extraPadding>
          <section>
            <SubjectSectionTitle>{t('welcomePage.blog')}</SubjectSectionTitle>
            <BlogPostWrapper>
              <BlogPost
                text={t('blogPosts.blog1.text')}
                image={{
                  url: BlogExampleImage1,
                }}
                externalLink={t('blogPosts.blog1.externalLink')}
                linkText={t('blogPosts.blog1.linkText')}
                license={t('blogPosts.blog1.license')}
                licenseAuthor={t('blogPosts.blog1.licenseAuthor')}
                locale="nb"
              />
            </BlogPostWrapper>
          </section>
        </OneColumn>
      </main>
    </>
  );
};

FFFrontpage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(FFFrontpage);
