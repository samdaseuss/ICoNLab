import { Noto_Serif_KR, Gothic_A1 } from 'next/font/google';
import '../styles/globals.scss';
import { Provider } from "react-redux";
import store from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";
import Head from 'next/head';


let persistor = persistStore(store);

const notoSerifKr = Noto_Serif_KR({
  weight: ['500', '900'],
  subsets: ['latin'],
});

const gothic = Gothic_A1({
  weight: ['500'],
  subsets: ['latin'],
});


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <>
      <Head>
        <title>ICoN LAB</title>
        <meta name="description" content="ICoN LAB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={gothic.className}>
        <SessionProvider session={session}>
          <Provider store={store}>
            <PersistGate Loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </SessionProvider>
      </main>
    </>
  );
}

export default MyApp;