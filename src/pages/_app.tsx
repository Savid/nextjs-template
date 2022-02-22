import '@styles/globals.css';
import { NEXT_PUBLIC_WEB_VITALS_ENDPOINT } from '@app/constants';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (!NEXT_PUBLIC_WEB_VITALS_ENDPOINT) return;
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(NEXT_PUBLIC_WEB_VITALS_ENDPOINT, body);
  } else {
    fetch(NEXT_PUBLIC_WEB_VITALS_ENDPOINT, { body, method: 'POST', keepalive: true });
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
