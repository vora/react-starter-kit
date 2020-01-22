declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
