// IB Portal App Configuration
export const appConfig = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || "IB Portal",
    version: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
    type: process.env.NEXT_PUBLIC_APP_TYPE || "ib-portal",
  },

  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
    timeout: 15000,
  },

  database: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://user:password@localhost:5432/ib_portal_db",
  },

  auth: {
    secret: process.env.NEXTAUTH_SECRET || "your-ib-portal-secret-key-here",
    url: process.env.NEXTAUTH_URL || "http://localhost:3001",
  },

  stripe: {
    publicKey:
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ||
      "pk_test_your_stripe_public_key",
    secretKey:
      process.env.STRIPE_SECRET_KEY || "sk_test_your_stripe_secret_key",
  },

  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
    ibFeatures: process.env.NEXT_PUBLIC_ENABLE_IB_FEATURES === "true",
    trading: process.env.NEXT_PUBLIC_ENABLE_TRADING === "true",
  },

  development: {
    nodeEnv: process.env.NODE_ENV || "development",
    debug: process.env.DEBUG || "ib-portal:*",
  },

  // IB Portal specific configurations
  ibPortal: {
    maxConnections: parseInt(process.env.IB_MAX_CONNECTIONS || "10"),
    timeout: parseInt(process.env.IB_TIMEOUT || "30000"),
    retryAttempts: parseInt(process.env.IB_RETRY_ATTEMPTS || "3"),
  },
} as const;

export type AppConfig = typeof appConfig;
