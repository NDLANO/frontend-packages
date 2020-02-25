import React from 'react';
import PropTypes from 'prop-types';
import { injectT } from '@ndla/i18n';
import {
  OneColumn,
  SubjectSectionTitle,
  BlogPost,
  BlogPostWrapper,
  FFFrontpageHeader,
  FFFrontpageInfo,
} from '@ndla/ui';
import BlogExampleImage1 from '../../images/blog/fagfornyelse-blog.jpg';

const FFFrontpage = ({ t }) => {
  return (
    <>
      <FFFrontpageHeader />
      <main>
        <OneColumn extraPadding>
          <FFFrontpageInfo
            heading={t('fagfornyelse.frontpage.heading')}
            text={t('fagfornyelse.frontpage.text')}
            link={{ to: '/', label: 'Se de nye ressursene' }}
          />
          <SubjectSectionTitle>
            {t('fagfornyelse.frontpage.blogHeading')}
          </SubjectSectionTitle>
          <BlogPostWrapper oneColumn>
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
              oneColumn
            />
          </BlogPostWrapper>
        </OneColumn>
      </main>
    </>
  );
};

FFFrontpage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(FFFrontpage);
