import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ReturnComponentType } from 'types';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => (
  <Component {...pageProps} />
);

export default MyApp;
