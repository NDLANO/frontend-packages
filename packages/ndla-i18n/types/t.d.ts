declare module 't' {
  export interface TFunctionValue {
    [key: string]: number | string;
  }

  export default function(id: string, value?: TFunctionValue): string;
}

/*
       t={(id: string, value?: TFunctionValue | {}): string =>
        context.formatMessage(prefix + id, value)
      }
  */
