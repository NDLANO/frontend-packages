/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import Button from 'ndla-button';
import { uuid } from 'ndla-util';
import {
  FormHeader,
  FormSections,
  FormInput,
  FormDropdown,
  FormSplitter,
} from 'ndla-forms';
import { Search as SearchIcon } from 'ndla-icons/common';

const roleExamples = [
  'Opphavsmann',
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
          name: 'my name is',
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
    this.setState(prevState => {
      const { authors } = prevState;
      authors.push({ name: '', role: '', key: uuid(), focusOnMount: true });
      return {
        authors,
      };
    });
  }

  handleUpdateRole(value, index) {
    this.setState(prevState => {
      const { authors } = prevState;
      authors[index].role = value;
      return {
        authors,
      };
    });
  }

  handleRemoveAuthor(index) {
    this.setState(prevState => {
      const { authors } = prevState;
      authors.splice(index, 1);
      return {
        authors,
      };
    });
  }

  handleInputChange(value, index) {
    this.setState(prevState => {
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
        <FormHeader title="Form heading" subTitle="example" width={3 / 4}>
          ?
        </FormHeader>
        {authors.map((author, index) => (
          <FormSections key={author.key}>
            <div>
              <FormSplitter>
                <FormInput
                  warningText="hello"
                  container="div"
                  type="text"
                  focusOnMount={author.focusOnMount}
                  placeholder="Skriv navn"
                  value={author.name}
                  onChange={e => this.handleInputChange(e.target.value, index)}
                />
                <FormDropdown
                  value={author.role}
                  onChange={e => this.handleUpdateRole(e.target.value, index)}>
                  <option value="">Tildel rolle</option>
                  {roleExamples.map(titleRole => (
                    <option value={titleRole} key={titleRole}>
                      {titleRole}
                    </option>
                  ))}
                </FormDropdown>
              </FormSplitter>
            </div>
            <div>
              <Button onClick={() => this.handleRemoveAuthor(index)}>
                remove
              </Button>
            </div>
          </FormSections>
        ))}
        <Button outline onClick={this.handleAddAuthor}>
          Legg til
        </Button>
        <FormHeader title="Form heading" subTitle="example" width={3 / 4}>
          ?
        </FormHeader>
        <FormSections>
          <div>
            <FormSplitter>
              <FormInput
                iconRight={<SearchIcon />}
                container="div"
                type="text"
                placeholder="Skriv navn"
              />
            </FormSplitter>
          </div>
          <div>
            <Button outline>remove</Button>
          </div>
        </FormSections>
      </Fragment>
    );
  }
}

export default FormExampleAuthors;
