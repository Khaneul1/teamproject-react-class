import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Page46Title from './Page46Title';
import ProblemComponent from './ProblemComponent';

const Start = () => {
  const nutrientRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (nutrientRef.current) {
      setOffsetY(nutrientRef.current.offsetHeight);
    }
  }, []);

  return (
    <div>
      <div ref={nutrientRef}>
        <Page46Title />
      </div>

      <ProblemComponent offsetY={offsetY} />
    </div>
  );
};

export default Start;
