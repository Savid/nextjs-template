const dev = process.env.NODE_ENV === 'development';

export const LOG_LEVEL: string = process.env.LOG_LEVEL || (dev ? 'debug' : 'warn');

export const NEXT_PUBLIC_WEB_VITALS_ENDPOINT: string | undefined =
  process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;
