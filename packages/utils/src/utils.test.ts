import { describe, expect, it } from "vitest";
import { cn } from "./cn";
import { formatCNPJ, formatCPF, formatCurrency, formatPhone } from "./formatters";
import { isCNPJ, isCPF, isEmail, isPhone } from "./validators";

describe("cn()", () => {
  it("merges class names", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("resolves tailwind conflicts (last wins)", () => {
    expect(cn("px-4", "px-8")).toBe("px-8");
  });

  it("filters falsy values", () => {
    expect(cn("base", false && "hidden", undefined, null)).toBe("base");
  });
});

describe("formatCPF()", () => {
  it("formats a raw CPF string", () => {
    expect(formatCPF("12345678909")).toBe("123.456.789-09");
  });

  it("handles partial input", () => {
    expect(formatCPF("123")).toBe("123");
  });
});

describe("formatCNPJ()", () => {
  it("formats a raw CNPJ string", () => {
    expect(formatCNPJ("11222333000181")).toBe("11.222.333/0001-81");
  });
});

describe("formatPhone()", () => {
  it("formats an 11-digit mobile number", () => {
    expect(formatPhone("11987654321")).toBe("(11) 98765-4321");
  });

  it("formats a 10-digit landline number", () => {
    expect(formatPhone("1134567890")).toBe("(11) 3456-7890");
  });
});

describe("formatCurrency()", () => {
  it("formats BRL currency", () => {
    expect(formatCurrency(1234.56)).toMatch(/R\$\s?1\.234,56/);
  });
});

describe("isCPF()", () => {
  it("validates a correct CPF", () => {
    expect(isCPF("529.982.247-25")).toBe(true);
  });

  it("rejects an all-same-digit CPF", () => {
    expect(isCPF("111.111.111-11")).toBe(false);
  });

  it("rejects an invalid CPF", () => {
    expect(isCPF("123.456.789-00")).toBe(false);
  });
});

describe("isCNPJ()", () => {
  it("validates a correct CNPJ", () => {
    expect(isCNPJ("11.222.333/0001-81")).toBe(true);
  });

  it("rejects an invalid CNPJ", () => {
    expect(isCNPJ("00.000.000/0000-00")).toBe(false);
  });
});

describe("isEmail()", () => {
  it("accepts valid emails", () => {
    expect(isEmail("user@example.com")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(isEmail("not-an-email")).toBe(false);
  });
});

describe("isPhone()", () => {
  it("accepts 11-digit mobile", () => {
    expect(isPhone("11987654321")).toBe(true);
  });

  it("rejects wrong length", () => {
    expect(isPhone("123")).toBe(false);
  });
});
