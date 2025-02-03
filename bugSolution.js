```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    if (data) {
      setCount(data.id);
    }
  }, [data]);

  return (
    <div>
      <p>Count: {count}</p>
      {data && <p>Data from API: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default MyComponent;
```