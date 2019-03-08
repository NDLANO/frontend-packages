declare module 'facepaint' {
  type DynamicStyleFunction = (obj: any) => any;

  interface Options {
    literal?: boolean;
    overlap?: boolean;
  }

  export default function(
    selectors: string[],
    options?: Options,
  ): DynamicStyleFunction;
}
