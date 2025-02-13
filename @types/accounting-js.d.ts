declare module 'accounting-js' {
  export function formatMoney(
    number: number,
    options?: {
      symbol?: string;
      precision?: number;
      thousand?: string;
      decimal?: string;
      format?: string;
    },
  ): string;

  export function formatNumber(
    number: number,
    options?: {
      precision?: number;
      thousand?: string;
      decimal?: string;
    },
  ): string;

  export function unformat(value: string): number;
}
