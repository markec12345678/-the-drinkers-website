/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// CSS module declarations
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
