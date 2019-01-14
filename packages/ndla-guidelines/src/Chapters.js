/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { spacing, colors, fonts } from '@ndla/core';
import { Tooltip } from '@ndla/ui';
import { Back, Forward, HamburgerMenu } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';

const CloseGuidelines = styled.button`
    position: absolute;
    padding: ${spacing.small};
    right: ${spacing.normal};
    top: ${spacing.normal};
    z-index: 1;
`;

const ChaptersWrapper = styled.div`
    position: relative;
    min-height: 100%;
    max-height: 100%;
`;

const ChapterContent = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    padding: ${spacing.large};
    max-width: 100%;
    overflow: scroll;
`;

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

export class Chapters extends Component {
    constructor(props) {
        super(props);
        console.log('on init', props.activeChapter);
        this.state = {
            activeChapter: props.activeChapter || 0,
        }
        this.contentRef = React.createRef();
    }

    gotoChapter(activeChapter) {
        console.log('gotoChapter', activeChapter);
        this.setState({
            activeChapter,
        }, () => {
            this.contentRef.current.scrollTop = 0;
        });
    }

    render() {
        const { chapters, onClose } = this.props;
        const { activeChapter } = this.state;
        return (
            <ChaptersWrapper>
                <CloseGuidelines type="button" onClick={onClose}><Cross /></CloseGuidelines>
                <ChapterContent ref={this.contentRef}>
                    {chapters[activeChapter].component}
                </ChapterContent>
                {chapters.length > 1 && <Navigation>
                    <button disabled={activeChapter < 1} onClick={() => this.gotoChapter(activeChapter - 1)}>
                        <Back />
                    </button>
                    <Tooltip tooltip="Se valg"><HamburgerMenu /></Tooltip>
                    <button disabled={activeChapter >= chapters.length - 1} onClick={() => this.gotoChapter(activeChapter + 1)}>
                        <Forward />
                    </button>
                </Navigation>}
            </ChaptersWrapper>
        );
    }
};

Chapters.propTypes = {
    chapters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        subTitle: PropTypes.string,
        component: PropTypes.node.isRequired,
    })).isRequired,
    activeChapter: PropTypes.number,
    onClose: PropTypes.func.isRequired,
};