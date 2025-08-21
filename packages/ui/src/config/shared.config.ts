// Shared Configuration for all apps
export const sharedConfig = {
  // Common app settings
  common: {
    company: "Your Company Name",
    supportEmail: "support@yourcompany.com",
    version: "1.0.0",
  },

  // Common API settings
  api: {
    defaultTimeout: 10000,
    retryAttempts: 3,
    baseHeaders: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },

  // Common feature flags
  features: {
    enableLogging: true,
    enableErrorReporting: true,
    enablePerformanceMonitoring: true,
  },

  // Common UI settings
  ui: {
    theme: {
      primary: "#0070f3",
      secondary: "#6c757d",
      success: "#28a745",
      warning: "#ffc107",
      danger: "#dc3545",
    },
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },

  // Common validation rules
  validation: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[\d\s\-\(\)]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  },
} as const;

export type SharedConfig = typeof sharedConfig;
