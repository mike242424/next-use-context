import React from 'react';
import Component3 from './Component3';

const Component2 = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="m-12">
        <Component3 />
      </div>
      <div className="m-12">
        <Component3 />
      </div>
    </div>
  );
};

export default Component2;
