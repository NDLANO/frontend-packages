import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from '@ndla/icons/common';

import {
  BreadCrumbs,
  SearchResultLead,
  SearchResultLink,
  SearchBlockWrapper,
} from './Styles';

class SearchBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    // Make a request.
    this.doSearch();
  }

  doSearch() {
    const query = `*[_type == "designmanualDocuments" && _id != "${
      this.props.currentPageId
    }" && title match "${
      this.props.searchFor
    }*"]{title, lead, _id, "root": root->{title}, "parent": parent->{title}}[0...11]`;
    this.props.sanityClient.fetch(query).then(results => {
      this.setState({
        results,
      });
    });
  }

  render() {
    const links = {};
    if (
      window.location.origin === 'http://localhost:6006' ||
      window.location.origin === 'https://designmanual.ndla.sh'
    ) {
      links.origin = window.location.origin;
      links.target = '_self';
    } else {
      links.origin = 'http://localhost:6006';
      links.target = '_blank';
    }
    return (
      <SearchBlockWrapper>
        <h2>Relatert innhold:</h2>
        {this.state.results &&
          this.state.results.map(result => (
            <div key={result._id}>
              <BreadCrumbs>
                <span>{result.root.title}</span>
                <ChevronRight />
                <span>{result.parent.title}</span>
              </BreadCrumbs>
              <SearchResultLink
                href={`${links.origin}/page/${result._id}`}
                target={links.target}
                rel="noopener noreferrer">
                {result.title}
              </SearchResultLink>
              <SearchResultLead>{result.lead}</SearchResultLead>
            </div>
          ))}
      </SearchBlockWrapper>
    );
  }
}

SearchBlock.propTypes = {
  searchFor: PropTypes.string.isRequired,
  currentPageId: PropTypes.string,
  sanityClient: PropTypes.shape({}).isRequired,
  sanityConfig: PropTypes.shape({}).isRequired,
};

export default SearchBlock;
