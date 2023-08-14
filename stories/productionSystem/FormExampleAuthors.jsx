/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, Fragment } from 'react';
import { ButtonV2 } from '@ndla/button';
import { uuid } from '@ndla/util';
import { FieldHeader, FieldSection, Input, Select, FieldSplitter, FieldRemoveButton, TextArea } from '@ndla/forms';
import { Search as SearchIcon } from '@ndla/icons/common';

const roleExamples = [
  'Opphaver',
  'Fotograf',
  'Kunstner',
  'Forfatter',
  'Manusforfatter',
  'Innleser',
  'Oversetter',
  'Regissør',
  'Illustratør',
  'Medforfatter',
  'Komponist',
];

class FormExampleAuthors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [
        {
          name: '',
          role: '',
          key: uuid(),
        },
      ],
    };
    this.handleAddAuthor = this.handleAddAuthor.bind(this);
    this.handleRemoveAuthor = this.handleRemoveAuthor.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleAddAuthor() {
    this.setState((prevState) => {
      const { authors } = prevState;
      authors.push({ name: '', role: '', key: uuid(), focusOnMount: true });
      return {
        authors,
      };
    });
  }

  handleUpdateRole(value, index) {
    this.setState((prevState) => {
      const { authors } = prevState;
      authors[index].role = value;
      return {
        authors,
      };
    });
  }

  handleRemoveAuthor(index) {
    this.setState((prevState) => {
      const { authors } = prevState;
      authors.splice(index, 1);
      return {
        authors,
      };
    });
  }

  handleInputChange(value, index) {
    this.setState((prevState) => {
      const { authors } = prevState;
      authors[index].name = value;
      return {
        authors,
      };
    });
  }

  render() {
    const { authors } = this.state;
    return (
      <Fragment>
        <FieldHeader title="Form heading" subTitle="example" width={3 / 4} />
        {authors.map((author, index) => (
          <FieldSection key={author.key}>
            <div>
              <FieldSplitter>
                <Input
                  warningText={author.name === '' ? 'Du må oppgi navn på forfatter' : null}
                  type="text"
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus={author.focusOnMount}
                  placeholder="Skriv navn"
                  value={author.name}
                  onChange={(e) => this.handleInputChange(e.target.value, index)}
                />
                <Select value={author.role} onChange={(e) => this.handleUpdateRole(e.target.value, index)}>
                  <option value="">Tildel rolle</option>
                  {roleExamples.map((titleRole) => (
                    <option value={titleRole} key={titleRole}>
                      {titleRole}
                    </option>
                  ))}
                </Select>
              </FieldSplitter>
            </div>
            <div>
              <FieldRemoveButton onClick={() => this.handleRemoveAuthor(index)}>Ta bort</FieldRemoveButton>
            </div>
          </FieldSection>
        ))}
        <ButtonV2 variant="outline" onClick={this.handleAddAuthor}>
          Legg til
        </ButtonV2>
        <FieldHeader title="Form heading" subTitle="example" width={3 / 4} />
        <FieldSection>
          <div>
            <Input iconRight={<SearchIcon />} type="text" placeholder="Skriv navn" />
          </div>
          <div>
            <FieldRemoveButton>Ta bort</FieldRemoveButton>
          </div>
        </FieldSection>
        <FieldHeader title="Form heading" subTitle="example" width={3 / 4} />
        <FieldSection>
          <div>
            <TextArea type="text" placeholder="Skriv navn" />
          </div>
          <div>
            <FieldRemoveButton>Ta bort</FieldRemoveButton>
          </div>
        </FieldSection>
      </Fragment>
    );
  }
}

export default FormExampleAuthors;
