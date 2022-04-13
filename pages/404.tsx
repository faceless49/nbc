import { Button, Result } from 'antd';
import { useRouter } from 'next/router';

import { ReturnComponentType } from 'types';

const Error = (): ReturnComponentType => {
  const router = useRouter();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="default" onClick={() => router.push('/')}>
          Back Home
        </Button>
      }
    />
  );
};

export default Error;
