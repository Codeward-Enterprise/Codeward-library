function calcCpfDigit(cpf: string, factor: number): number {
  let sum = 0;
  for (let i = 0; i < factor - 1; i++) {
    sum += Number(cpf[i]) * (factor - i);
  }
  const remainder = (sum * 10) % 11;
  return remainder >= 10 ? 0 : remainder;
}

export function isCPF(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;
  const d1 = calcCpfDigit(digits, 10);
  if (d1 !== Number(digits[9])) return false;
  const d2 = calcCpfDigit(digits, 11);
  return d2 === Number(digits[10]);
}

function calcCnpjDigit(cnpj: string, weights: number[]): number {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += Number(cnpj[i]) * (weights[i] ?? 0);
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

export function isCNPJ(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(digits)) return false;
  const d1 = calcCnpjDigit(digits, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  if (d1 !== Number(digits[12])) return false;
  const d2 = calcCnpjDigit(digits, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return d2 === Number(digits[13]);
}

export function isPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 || digits.length === 11;
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isCEP(value: string): boolean {
  return /^\d{5}-?\d{3}$/.test(value);
}
