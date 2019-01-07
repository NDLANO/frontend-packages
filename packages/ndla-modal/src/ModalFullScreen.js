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
import ModalCloseButton from '../lib/ModalCloseButton';

const sideNavWidth = '250px';

const Fullscreen = styled.div`
    background: #fff;
`;

const Wrapper = styled.div`
    display: flex;
    height: calc(100vh - 100px);
    overflow-y: auto;
    padding: ${spacing.medium};
    > aside {
        width: ${sideNavWidth};
        position: absolute;
        > ul {
            margin: 0;
            padding: ${spacing.normal} 0 0;
            list-style-type: none;
            list-style-image: none;
            li {
                padding: 0;
                margin: 1px 0;
            }
        }
        + div {
            margin-left: ${sideNavWidth};
            padding-left: ${spacing.large};
            > section:last-child {
                min-height: calc(100vh - 100px);
            }
        }
    }
    > div {
        > section {
            padding-top: ${spacing.large};
            padding-bottom: calc(${spacing.large} * 2);
            .c-table__wrapper {
                padding-left: 0 !important;
                padding-right: 0 !important;
                position: static !important;
            }
            .c-table__content {
                text-align: left !important;
            }
        }
        flex-grow: 1;
        max-width: 740px;
        &:only-child {
            margin: 0 auto;
        }
    }
`;

const Header = styled.header`
    background: ${colors.brand.greyLighter};
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: ${spacing.normal} ${spacing.medium};
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: box-shadow 200ms ease;
    ${props => props.hasScrolled && css`
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
    `}
`;

const ChapterButton = styled.button`
    background: ${colors.brand.lighter};
    border: 0;
    width: 100%;
    display: flex;
    margin: 0;
    ${fonts.sizes(16, 1.1)} font-weight: ${fonts.weight.semibold};
    padding: ${spacing.small};
    ${props => props.active && css`
        background: ${colors.brand.tertiary};
    `}
`;

const ChapterTitle = styled.h1`
    margin: 0 0 ${spacing.large} 0;
    width: 100%;
    ${fonts.sizes(38, 1.2)} font-weight: ${fonts.weight.semibold};
    small {
        margin: ${spacing.small} 0 0;
        display: block;
        font-style: italic;
        ${fonts.sizes(22, 1.2)} font-weight: ${fonts.weight.semibold};
        color: ${colors.text.light};
    }
`;

class ModalFullScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChapter: 0,
            hasScrolled: false,
        }
        this.chaptersRef = React.createRef();
        this.scrolled = this.scrolled.bind(this);
        this.gotoChapter = this.gotoChapter.bind(this);
    }

    componentDidMount() {
        this.gotoChapter(0);
    }

    gotoChapter(index) {
        this.chaptersRef.current.querySelector(`[data-chapter='${index}']`).scrollIntoView(true);
    }

    scrolled(e) {
        const scrollTop = e.target.scrollTop + 200;
        const children = Array.from(this.chaptersRef.current.childNodes);
        const chapterIndex = children.findIndex(node => scrollTop < node.offsetTop);
        this.setState({
            activeChapter: chapterIndex === -1 ? children.length - 1 : chapterIndex - 1,
            hasScrolled: e.target.scrollTop > 52,
        });
    }

    render() {
        const { chapters, title, onClose, closeButtonLabel } = this.props;
        const { activeChapter, hasScrolled } = this.state;
        return (
            <Fullscreen>
                <Header hasScrolled={hasScrolled}>
                    <h1>{title}</h1>
                    <ModalCloseButton title={closeButtonLabel} onClick={onClose} />
                </Header>
                <Wrapper onScroll={this.scrolled}>
                    {chapters.length > 1 && <aside>
                        <ul>
                            {chapters.map((chapter, index) => (
                                <li key={chapter.name}><ChapterButton active={index === activeChapter} type="button" onClick={() => this.gotoChapter(index)}>{chapter.name}</ChapterButton></li>
                            ))}
                        </ul>
                    </aside>}
                    <div ref={this.chaptersRef}>
                        {chapters.map((chapter, index) => (
                            <section key={chapter.name} data-chapter={index}>
                                <ChapterTitle>{chapter.name}{chapter.subTitle && <small>{chapter.subTitle}</small>}</ChapterTitle>
                                {chapter.component}
                            </section>
                        ))}
                    </div>
                </Wrapper>
            </Fullscreen>
        );
    }
};

ModalFullScreen.propTypes = {
    chapters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        subTitle: PropTypes.string,
        component: PropTypes.node.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    closeButtonLabel: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalFullScreen;
