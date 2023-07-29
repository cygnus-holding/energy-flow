import { AppProps } from 'next/app';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
