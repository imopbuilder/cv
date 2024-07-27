export type {};

// global
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // App
      NEXT_PUBLIC_BASE_URL: string;
    }
  }
}
