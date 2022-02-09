import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import FocusTrapReact from 'focus-trap-react';
import { ChevronDown } from '@ndla/icons/common';
import { WithTranslation, withTranslation } from 'react-i18next';
import { MovieResourceType } from './types';

const classes = new BEMHelper({
  name: 'film-moviesearch',
  prefix: 'c-',
});

interface Props extends WithTranslation {
  resourceTypes: MovieResourceType[];
  resourceTypeSelected?: MovieResourceType;
  ariaControlId?: string;
  onChangeResourceType: (resourceId?: string) => void;
}

interface State {
  resourceTypesIsOpen: boolean;
}
class CategorySelect extends Component<Props, State> {
  references: Record<string, HTMLButtonElement | null>;
  constructor(props: Props) {
    super(props);
    this.state = {
      resourceTypesIsOpen: false,
    };
    this.references = {};
    this.createRef = this.createRef.bind(this);
    this.openSelect = this.openSelect.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  createRef(el: HTMLButtonElement | null, name: string) {
    this.references[name] = el;
  }

  openSelect() {
    const { resourceTypeSelected } = this.props;
    this.setState(
      {
        resourceTypesIsOpen: true,
      },
      () => {
        if (resourceTypeSelected && this.references[resourceTypeSelected.id]) {
          this.references[resourceTypeSelected.id]?.focus();
        }
      },
    );
  }

  onSelect(val?: string) {
    this.props.onChangeResourceType(val);
    this.setState({
      resourceTypesIsOpen: false,
    });
  }

  render() {
    const { resourceTypes, resourceTypeSelected, ariaControlId, t } = this.props;
    const { resourceTypesIsOpen } = this.state;
    const offsetDropDown = resourceTypeSelected
      ? resourceTypes.findIndex((resource) => resource.id === resourceTypeSelected.id) + 1
      : 0;

    return (
      <div {...classes('dropdown-container', '', 'u-12/12')}>
        <button
          aria-expanded={!resourceTypesIsOpen}
          aria-controls="selectCategory"
          type="button"
          {...classes('dropdown-button', 'toggleButton')}
          tabIndex={resourceTypesIsOpen ? -1 : 0}
          onClick={this.openSelect}>
          <div>
            <span>{t('ndlaFilm.search.chooseCategory')}</span>
            <small>
              {(resourceTypeSelected && resourceTypeSelected.name) || t('ndlaFilm.search.categoryFromNdla')}
            </small>
          </div>
          <div>
            <ChevronDown className="c-icon--22" />
          </div>
        </button>
        {resourceTypesIsOpen && (
          <FocusTrapReact
            active={resourceTypesIsOpen}
            focusTrapOptions={{
              onDeactivate: () => {
                this.setState({ resourceTypesIsOpen: false });
              },
              clickOutsideDeactivates: true,
              escapeDeactivates: true,
            }}>
            <div id="selectCategory" {...classes('dropdown-wrapper')} style={{ top: `-${offsetDropDown * 52 + 13}px` }}>
              <button
                aria-controls={ariaControlId}
                type="button"
                onClick={() => this.onSelect()}
                {...classes('dropdown-button')}>
                <span>{t('ndlaFilm.search.categoryFromNdla')}</span>
              </button>
              {resourceTypes.map((resourceType) => (
                <button
                  aria-controls={ariaControlId}
                  type="button"
                  ref={(el) => this.createRef(el, resourceType.id)}
                  onClick={() => this.onSelect(resourceType.id)}
                  {...classes('dropdown-button', {
                    selected: !!resourceTypeSelected && resourceTypeSelected.id === resourceType.id,
                  })}
                  data-id={resourceType.id}
                  key={resourceType.id}>
                  <span>{resourceType.name}</span>
                </button>
              ))}
            </div>
          </FocusTrapReact>
        )}
      </div>
    );
  }
}

export default withTranslation()(CategorySelect);
