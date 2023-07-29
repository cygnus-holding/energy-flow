import { AppProps } from 'next/app';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
