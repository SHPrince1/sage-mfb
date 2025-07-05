import React from 'react';
import { Flex, Rate } from 'antd';

const RateComp = () => {
  return (
    <div>
      <Flex gap="middle" vertical>
    {/* <Flex gap="middle">
      <Rate defaultValue={3} />
      <span>allowClear: true</span>
    </Flex> */}
    <Flex gap="middle">
      <Rate defaultValue={3} allowClear={false} />
      {/* <span>allowClear: false</span> */}
    </Flex>
  </Flex>
    </div>
  );
}

export default RateComp;

