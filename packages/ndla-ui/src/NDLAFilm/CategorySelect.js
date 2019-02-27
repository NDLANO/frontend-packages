import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import FocusTrapReact from 'focus-trap-react';
import { ChevronDown } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';

const classes = new BEMHelper({
  name: 'film-moviesearch',
  prefix: 'c-',
});

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypesIsOpen: false,
    };
    this.createRef = this.createRef.bind(this);
    this.openSelect = this.openSelect.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  createRef(el, name) {
    this[name] = el;
  }

  openSelect() {
    const { resourceTypeSelected } = this.props;
    this.setState(
      {
        resourceTypesIsOpen: true,
      },
      () => {
        if (resourceTypeSelected && this[resourceTypeSelected.id]) {
          this[resourceTypeSelected.id].focus();
        }
      },
    );
  }

  onSelect(val) {
    this.props.onChangeResourceType(val);
    this.setState({
      resourceTypesIsOpen: false,
    });
  }

  render() {
    const {
      resourceTypes,
      resourceTypeSelected,
      ariaControlId,
      t,
    } = this.props;
    const { resourceTypesIsOpen } = this.state;
    const offsetDropDown = resourceTypeSelected
      ? resourceTypes.findIndex(
          resource => resource.id === resourceTypeSelected.id,
        ) + 1
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
              {(resourceTypeSelected && resourceTypeSelected.name) ||
                t('ndlaFilm.search.categoryFromNdla')}
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
            <div
              id="selectCategory"
              {...classes('dropdown-wrapper')}
              style={{ top: `-${offsetDropDown * 52 + 13}px` }}>
              <button
                aria-controls={ariaControlId}
                type="button"
                onClick={() => this.onSelect()}
                {...classes('dropdown-button')}>
                <span>{t('ndlaFilm.search.categoryFromNdla')}</span>
              </button>
              {resourceTypes.map(resourceType => (
                <button
                  aria-controls={ariaControlId}
                  type="button"
                  ref={el => this.createRef(el, resourceType.id)}
                  onClick={() => this.onSelect(resourceType.id)}
                  {...classes('dropdown-button', {
                    selected:
                      resourceTypeSelected &&
                      resourceTypeSelected.id === resourceType.id,
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

CategorySelect.propTypes = {};

export default injectT(CategorySelect);
