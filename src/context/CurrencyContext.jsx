import { createContext, useContext, useState, useCallback, useMemo } from "react";

export const CURRENCIES = [
  { code: "INR", symbol: "\u20B9", rate: 1, flag: "IN" },
  { code: "USD", symbol: "$", rate: 0.012, flag: "US" },
  { code: "EUR", symbol: "\u20AC", rate: 0.011, flag: "EU" },
  { code: "GBP", symbol: "\u00A3", rate: 0.0095, flag: "GB" },
];

const STORAGE_KEY = "nl_currency";

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && CURRENCIES.some((c) => c.code === saved)) return saved;
    } catch (err) {
      // ignore storage errors
    }
    return "INR";
  });

  const setCurrency = useCallback((code) => {
    setCurrencyState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (err) {
      // ignore storage errors
    }
  }, []);

  const active = useMemo(
    () => CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0],
    [currency]
  );

  const formatPrice = useCallback(
    (inr) => {
      const num = parseFloat(inr);
      if (Number.isNaN(num)) return inr;
      const value = num * active.rate;
      const rounded = Math.round(value * 100) / 100;
      const formatted = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(2);
      return `${active.symbol}${formatted}`;
    },
    [active]
  );

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      active,
      currencies: CURRENCIES,
      formatPrice,
    }),
    [currency, setCurrency, active, formatPrice]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
