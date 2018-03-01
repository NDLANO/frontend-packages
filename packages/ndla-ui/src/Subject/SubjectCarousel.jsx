import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Play } from 'ndla-icons/common';
import Slider from 'react-slick';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-subject-carousel');

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToScroll: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5}
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 4}
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3}
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 2}
      },
    ]
};

class SubjectCarousel extends Component {
    render() {
        const { subjects } = this.props;
        const slides = subjects.map((subject, index) => {
            let styleAttr = {};
            if (subject.image) {
              styleAttr['backgroundImage'] = 'url(' + subject.image + ')';
            }
            return (
                <div { ...classes('subject') } key={'slide-' + subject.id}>
                    <div { ...classes('image') } style={styleAttr}>
                        <span { ...classes('type') }>{ subject.type }</span>
                        { subject.type === 'film' ?
                          <Play />
                        : null }
                    </div>
                    <SafeLink to={ subject.linkTo} {...classes('link')}>
                      <h4 { ...classes('title') }>{ subject.title }</h4>
                      <p { ...classes('description') }>{ subject.text }</p>
                    </SafeLink>
                </div>
            )
        });

        return (
            <Slider {...classes()} {...settings}>
                { slides }
            </Slider>
        );
    }
}

SubjectCarousel.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string,
      linkTo: PropTypes.string.isRequired,
    })
  )
};

SubjectCarousel.defaultProps = {
  subjects: []
};

export default SubjectCarousel;
