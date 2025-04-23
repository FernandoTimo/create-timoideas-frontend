// svg.d.ts
declare module "*.svg" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
/**
 * @file Declaración manual del módulo 'qrcode'
 */

declare module "qrcode" {
  type QRCodeErrorCorrectionLevel = "L" | "M" | "Q" | "H";

  interface QRCodeModule {
    get(x: number, y: number): boolean;
    size: number;
  }

  interface QRCode {
    modules: QRCodeModule;
  }

  export function create(
    text: string,
    options: { errorCorrectionLevel?: QRCodeErrorCorrectionLevel }
  ): Promise<QRCode>;
}
