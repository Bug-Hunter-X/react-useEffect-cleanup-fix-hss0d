```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setCancel(()=>controller.abort());
    const fetchData = async () => {
      try {
        const response = await someAsyncOperation(signal);
        if (!response.ok) {
          // Handle errors
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if(!signal.aborted) setCount(data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
      cancel();
      console.log("cleanup function executed")
    };
  }, []);

  return <div>Count: {count}</div>;
}

async function someAsyncOperation(signal) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if(signal.aborted) return new Response(null,{status:400});
  return new Response(JSON.stringify({count: 10}));
}

export default MyComponent; 
```