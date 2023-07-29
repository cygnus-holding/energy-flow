import { NextPage } from 'next';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { loadIframe } from '../redux/iframeSlice';
import { RootState } from '../redux/store';

const Ems: NextPage = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state: RootState) => state.iframe.loaded);

  if (!loaded) {
    dispatch(loadIframe());
  }

  return (
    <>
      <Head>
        <title>Energy Management Solution Dashboard</title>
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors *;"></meta>
      </Head>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "100vh", overflow: "hidden" }}>
        {loaded &&
          <>
            <div>
              <iframe src="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=1" height="33.33%" width="100%" frameBorder="0"></iframe>
              <iframe src="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=3" height="33.33%" width="100%" frameBorder="0"></iframe>
              <iframe src="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=4" height="33.33%" width="100%" frameBorder="0"></iframe>
            </div>
            <div>
              <iframe src="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=7" height="100%" width="100%" frameBorder="0"></iframe>
            </div>
            <div>
              <iframe src="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=2" height="33.33%" width="100%" frameBorder="0"></iframe>
              <iframe src="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=5" height="33.33%" width="100%" frameBorder="0"></iframe>
              <iframe src="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=6" height="33.33%" width="100%" frameBorder="0"></iframe>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Ems;
