import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ReturnComponentType } from 'types';
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => (
  <Component {...pageProps} />
);

export default MyApp;
