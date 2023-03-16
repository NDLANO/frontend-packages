/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import FocusTrapReact from 'focus-trap-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { ChevronDown } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import { MovieResourceType } from './types';

const zoomInSelect = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: flex;
    transform: scale3d(0.95, 0.95, 0.95);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  margin: 0 0 ${spacing.normal};
`;

const DropdownButton = styled.button`
  border-radius: 4px;
  ${fonts.sizes('22px', '26px')};
  border: 0;
  text-transform: uppercase;
  background: ${colors.ndlaFilm.filmColorBright};
  color: ${colors.white};
  padding: ${spacing.small} ${spacing.nsmall};
  font-weight: ${fonts.weight.semibold};
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  width: 100%;
  letter-spacing: 0.05em;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.small} ${spacing.normal};
  }
  div:first-child {
    ${mq.range({ until: breakpoints.tablet })} {
      display: flex;
      flex-direction: column;
      small {
        padding: 0;
      }
    }
  }
  small {
    text-transform: none;
    padding-left: ${spacing.small};
    font-weight: normal;
  }
`;

interface DropdownWrapperProps {
  offsetDropdown: number;
}

const DropdownWrapper = styled.div<DropdownWrapperProps>`
  top: -${(props) => props.offsetDropdown * 52 + 13}px;
  ${DropdownButton} {
    border-radius: 0;
    text-transform: none;
    letter-spacing: 0;
  }
  display: flex;
  flex-direction: column;
  padding: $spacing--small 0;
  background: ${colors.brand.lighter};
  border-radius: 4px;
  left: 0;
  right: 0;
  animation: ${zoomInSelect} 200ms ease;
  box-shadow: 0 0 30px rgba(${colors.black}, 0.6);
  position: absolute;
  z-index: 9999;
  button,
  a {
    color: ${colors.text.primary};
    border: 0;
    outline: 0;
    text-align: left;
    background: transparent;
    padding: ${spacing.small};
    padding-left: ${spacing.normal};
    font-weight: ${fonts.weight.semibold};
    text-decoration: none;
    box-shadow: none;
    transition: background 200ms ease;
    &:hover,
    &:focus {
      color: ${colors.brand.primary};
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

interface Props {
  resourceTypes: MovieResourceType[];
  resourceTypeSelected?: MovieResourceType;
  ariaControlId?: string;
  onChangeResourceType: (resourceId?: string) => void;
}

const CategorySelect = ({ resourceTypes, resourceTypeSelected, ariaControlId, onChangeResourceType }: Props) => {
  const { t } = useTranslation();
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [resourceTypesIsOpen, setResourceTypesIsOpen] = useState<boolean>(false);

  const updateRef = (el: HTMLButtonElement | null, name: string) => {
    refs.current[name] = el;
  };

  useEffect(() => {
    if (resourceTypeSelected && refs.current[resourceTypeSelected.id]) {
      refs.current[resourceTypeSelected.id]?.focus();
    }
  }, [resourceTypesIsOpen, resourceTypeSelected]);

  const onSelect = (val?: string) => {
    onChangeResourceType(val);
    setResourceTypesIsOpen(false);
  };

  const offsetDropDown = resourceTypeSelected
    ? resourceTypes.findIndex((resource) => resource.id === resourceTypeSelected.id) + 1
    : 0;

  return (
    <DropdownContainer className="u-12/12">
      <DropdownButton
        aria-expanded={!!resourceTypesIsOpen}
        aria-controls="selectCategory"
        type="button"
        tabIndex={resourceTypesIsOpen ? -1 : 0}
        onClick={() => setResourceTypesIsOpen(true)}
      >
        <div>
          <span>{t('ndlaFilm.search.chooseCategory')}</span>
          <small>{(resourceTypeSelected && resourceTypeSelected.name) || t('ndlaFilm.search.categoryFromNdla')}</small>
        </div>
        <div>
          <ChevronDown className="c-icon--22" />
        </div>
      </DropdownButton>
      {resourceTypesIsOpen && (
        <FocusTrapReact
          active={resourceTypesIsOpen}
          focusTrapOptions={{
            onDeactivate: () => setResourceTypesIsOpen(false),
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
          }}
        >
          <DropdownWrapper id="selectCategory" offsetDropdown={offsetDropDown}>
            <DropdownButton aria-controls={ariaControlId} type="button" onClick={() => onSelect()}>
              <span>{t('ndlaFilm.search.categoryFromNdla')}</span>
            </DropdownButton>
            {resourceTypes.map((resourceType) => (
              <DropdownButton
                aria-controls={ariaControlId}
                type="button"
                ref={(el) => updateRef(el, resourceType.id)}
                onClick={() => onSelect(resourceType.id)}
                data-id={resourceType.id}
                key={resourceType.id}
              >
                <span>{resourceType.name}</span>
              </DropdownButton>
            ))}
          </DropdownWrapper>
        </FocusTrapReact>
      )}
    </DropdownContainer>
  );
};

export default CategorySelect;
