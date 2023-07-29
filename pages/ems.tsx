import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Ems: NextPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,  // Load content only once
  });

  const [loadContent, setLoadContent] = useState(false);

  useEffect(() => {
    if (inView) {
      setLoadContent(true);
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>Energy Management Solution Dashboard</title>
        <meta http-equiv="Content-Security-Policy" content="frame-ancestors *;"></meta>
      </Head>
      <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "100vh", overflow: "hidden" }}>
        {loadContent &&
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
