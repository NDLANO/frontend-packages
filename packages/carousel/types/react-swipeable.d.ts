declare module 'react-swipeable' {
  import React from 'react';
  export class Swipeable<
    T extends Element = HTMLElement
  > extends React.Component<SwipeableProps<T>> {}

  interface EventData<T extends Element = HTMLElement> {
    event: React.TouchEvent<T>;
    deltaX: number;
    deltaY: number;
    absX: number;
    absY: number;
    velocity: number;
    dir: 'Left' | 'Right' | 'Up' | 'Down';
  }

  type Callback<T extends Element = HTMLElement> = (data: EventData<T>) => void;
  type OnTapCallback<T extends Element = HTMLElement> = (
    event: React.TouchEvent<T>,
  ) => void;

  interface SwipeableProps<T extends Element = HTMLElement>
    extends React.ClassAttributes<Swipeable<T>>,
      React.HTMLAttributes<T> {
    onSwiped?: Callback<T>;
    onSwiping?: Callback<T>;
    onTap?: OnTapCallback<T>;
    delta?: number;
    preventDefaultTouchmoveEvent?: boolean;
    nodeName?: string;
    trackMouse?: boolean;
    innerRef?: React.Ref<T>;
    children?: React.ReactNode;
  }
}
