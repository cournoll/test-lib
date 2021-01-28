import React, { useState } from 'react';
import { TypescriptComponent } from 'web-cloud-frontend-commons/TypescriptComponent';

function Example() {
  const [highlight, setHighlight] = useState(false);

  return (
    <div>
      <span>
        highlight:{' '}
        <button onClick={() => setHighlight(!highlight)}>
          {highlight ? 'turn off' : 'turn on'}
        </button>
      </span>
      <TypescriptComponent
        text="Create React Library Example 😄"
        highlight={highlight}
      />
    </div>
  );
}

export default Example;
