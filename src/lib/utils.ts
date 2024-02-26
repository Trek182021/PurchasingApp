import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDollar(value: number): string {
  const formatter = Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
  })
  return formatter.format(value)
}

export function formatPhoneNo(number: string): string {
  return number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}