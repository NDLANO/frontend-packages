/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, ComponentType } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { hasCurrentPageBeenTracked, sendPageView } from './tracker';

const mountedInstances: ComponentType<any>[] = [];

type TrackableComponent<P> = ComponentType<P> & {
  getDocumentTitle: (p: P) => string;
  getDimensions?: (p: P) => { ga: any; gtm: any };
  willTrackPageView?: (callback: (p: P) => void, p: P) => void;
};

function withTracker<P>(WrappedComponent: TrackableComponent<P>) {
  const Tracker = class extends Component<P> {
    static trackPageView(props: P) {
      const lastMountedInstance = mountedInstances[mountedInstances.length - 1];

      if (hasCurrentPageBeenTracked() || lastMountedInstance !== WrappedComponent) {
        return;
      }

      const title = WrappedComponent.getDocumentTitle(props);
      const dimensions = WrappedComponent.getDimensions ? WrappedComponent.getDimensions(props) : undefined;
      sendPageView({ title, dimensions });
    }

    componentDidMount() {
      mountedInstances.push(WrappedComponent);

      // Kept for js interop, but should not be hit in ts.
      if (!WrappedComponent.getDocumentTitle) {
        throw new Error(`Tracker expects a static getDocumentTitle function on the WrappedComponent.`);
      }

      if (WrappedComponent.willTrackPageView) {
        WrappedComponent.willTrackPageView(Tracker.trackPageView, this.props);
      } else {
        Tracker.trackPageView(this.props);
      }
    }

    componentDidUpdate() {
      if (WrappedComponent.willTrackPageView) {
        WrappedComponent.willTrackPageView(Tracker.trackPageView, this.props);
      } else {
        Tracker.trackPageView(this.props);
      }
    }

    componentWillUnmount() {
      const index = mountedInstances.indexOf(WrappedComponent);
      mountedInstances.splice(index, 1);
    }

    render() {
      //@ts-ignore
      return <WrappedComponent {...this.props} trackPageView={Tracker.trackPageView} />;
    }
  };

  return hoistStatics(Tracker, WrappedComponent);
}

export default withTracker;
