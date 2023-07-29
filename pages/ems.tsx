import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { parseCookies } from 'nookies';

type Props = {
  sessionId?: string;
};

const Ems: NextPage<Props> = ({ sessionId }) => {
  return (
    <>
      <Head>
        <title>Energy Management Solution Dashboard</title>
      </Head>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "100vh", overflow: "hidden" }}>
        <div>
          <iframe src={`http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=1&sid=${sessionId}`} height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src={`http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=3&sid=${sessionId}`} height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src={`http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=4&sid=${sessionId}`} height="33.33%" width="100%" frameBorder="0"></iframe>
        </div>
        <div>
          <iframe src={`http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=7&sid=${sessionId}`} height="100%" width="100%" frameBorder="0"></iframe>
        </div>
        <div>
          <iframe src={`http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=2&sid=${sessionId}`} height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src={`http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=5&sid=${sessionId}`} height="33.33%" width="100%" frameBorder="0"></iframe>
          <iframe src={`http://34.147.155.217:3000/d/e2adf852-fb79-48be-b11f-ae529625e779/factory?orgId=1&viewPanel=6&sid=${sessionId}`} height="33.33%" width="100%" frameBorder="0"></iframe>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { sid } = parseCookies(ctx);

  if (sid) {
    return {
      props: {
        sessionId: sid,
      },
    };
  }

  const res = await fetch('http://34.147.155.217:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: 'admin',
      password: 'admin',
    }),
  });

  const data = await res.json();

  if (data.sid) {
    ctx.res.setHeader('Set-Cookie', `sid=${data.sid}; HttpOnly; Path=/;`);
    return {
      props: {
        sessionId: data.sid,
      },
    };
  }

  return {
    props: {},
  };
};

export default Ems;
