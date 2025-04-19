'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const res = await fetch('/api/user');

        const data = await res.json(); // Await the response
        console.log(data); // Log the data
      } catch (error) {
        console.error('Error fetching data:', error); // Handle any errors
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}
