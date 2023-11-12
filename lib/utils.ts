import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number, locale?: string) {
  const majorUnits = value / 100;
  try {
      // Note: if no `locale` is provided, the browser's default
      // locale will be used.
      return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: 'EUR',
      }).format(majorUnits);
  } catch (e: any) {
      // A fallback in case the NumberFormat fails for any reason
      return majorUnits.toFixed(2);
  }
}

export function removeHTMLTags(str: string | undefined){
  return str?.replace(/<[^>]*>/g, '');
};
