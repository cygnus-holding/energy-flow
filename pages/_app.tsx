import { AppProps } from 'next/app';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
