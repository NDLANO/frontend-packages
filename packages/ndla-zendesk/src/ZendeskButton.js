/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { isMobile } from 'react-device-detect';
import { Button } from 'ndla-button';
import { withRouter } from 'react-router-dom';
import { Scroll } from 'react-fns';

class ZendeskButton extends React.Component {
  constructor() {
    super();
    // this.state = { lastScrollPos: 0, visible: true, location: null };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.location === null) {
  //     return {
  //       location: nextProps.location,
  //       isOpen: true,
  //     };
  //   }
  //   const { location } = nextProps;
  //   const navigated = location !== prevState.location;
  //   if (navigated) {
  //     return { isOpen: false, location };
  //   }
  //   return null;
  // }

  handleScroll() {
    this.setState(prevState => ({
      visible: prevState.lastScrollPos > window.scrollY,
      lastScrollPos: window.scrollY,
    }));
  }

  render() {
    const { children, locale, zendeskHost, ...rest } = this.props;
    return (
      <Fragment>
        <script
          dangerouslySetInnerHTML={{
            __html: `/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var e=this.createElement("script");n&&(this.domain=n),e.id="js-iframe-async",e.src="https://assets.zendesk.com/embeddable_framework/main.js",this.t=+new Date,this.zendeskHost="${zendeskHost}",this.zEQueue=a,this.body.appendChild(e)},o.write('<body onload="document._l();">'),o.close()}();
    /*]]>*/`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          zE(function() {
            zE.setLocale('${locale}');
            zE.hide();
          });`,
          }}
        />
        <Scroll
          render={({ y }) => {
            if (isMobile() && y > 0) {
              return null;
            }
            return (
              <Button type="button" appearance="outline" {...rest}>
                {children}
              </Button>
            );
          }}
        />
      </Fragment>
    );

    // return (
    //   <Button type="button" appearance="outline" {...rest}>
    //     {this.props.children}
    //   </Button>
    // );
  }
}

export default ZendeskButton;
