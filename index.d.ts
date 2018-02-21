declare module Chai {
  interface Assertion {
    structure(struct: object|Function): void;
  }
}

declare module 'chai-struct' {
  export const chaiStruct: (chai: any, utils: any) => void
  export const Nullable: (value: any) => object
  export const Optional: (value: any) => object
  export const Any: (value?: any) => object
}
