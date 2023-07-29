import { NextPage } from 'next';
import Head from 'next/head';

const Ems: NextPage = () => {
  return (
    <>
      <Head>
        <title>Energy Management Solution Dashboard</title>
      </Head>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "100vh", overflow: "hidden" }}>
        <div>
          <iframe src="http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=1" height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src="http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=3" height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src="http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=4" height="33.33%" width="100%" frameBorder="0"></iframe>
        </div>
        <div>
          <iframe src="http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=7" height="100%" width="100%" frameBorder="0"></iframe>
        </div>
        <div>
          <iframe src="http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=2" height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src="http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=5" height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src="http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=6" height="33.33%" width="100%" frameBorder="0"></iframe>
        </div>
      </div>
    </>
  );
};

export default Ems;
