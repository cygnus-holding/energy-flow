import { NextPage } from 'next';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'; // Use this import statement
import { loadIframe } from '../redux/iframeSlice';
import { RootState } from '../redux/store';

const Ems: NextPage = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state: RootState) => state.iframe.loaded);

  useEffect(() => {
    if (!loaded) {
      dispatch(loadIframe());
    }
  }, [loaded, dispatch]);

  return (
    <>
      <Head>
        <title>Energy Management Solution Dashboard</title>
        <meta httpEquiv="Content-Security-Policy" 
              content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-src *;"></meta>
      </Head>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "100vh", overflow: "hidden" }}>
        {loaded &&
          <>
            <div>
              <object type="text/html" data="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=1" height="33.33%" width="100%" style={{overflow: "auto", resize: "both"}}></object>
              <object type="text/html" data="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=3" height="33.33%" width="100%" style={{overflow: "auto", resize: "both"}}></object>
              <object type="text/html" data="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=4" height="33.33%" width="100%" style={{overflow: "auto", resize: "both"}}></object>
            </div>
            <div>
              <object type="text/html" data="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=7" height="100%" width="100%" style={{overflow: "auto", resize: "both"}}></object>
            </div>
            <div>
              <object type="text/html" data="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=2" height="33.33%" width="100%" style={{overflow: "auto", resize: "both"}}></object>
              <object type="text/html" data="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=5" height="33.33%" width="100%" style={{overflow: "auto", resize: "both"}}></object>
              <object type="text/html" data="http://34.147.155.217:3000/d-solo/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&panelId=6" height="33.33%" width="100%" style={{overflow: "auto", resize: "both"}}></object>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Ems;
