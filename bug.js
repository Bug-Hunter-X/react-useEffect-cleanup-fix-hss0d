```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Missing return statement for cleanup function
    someAsyncOperation().then(data => setCount(data.count)); 
  }, []);

  return <div>Count: {count}</div>;
}
```