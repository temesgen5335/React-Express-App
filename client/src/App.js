import React, { useEffect, useState} from 'react';

function App() {

    const [backendData, setBackendData] = useState(null)
    useEffect(()=> {
        fetch("/api").then(
            response => response.json()

        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

  return (

        <div>
        <h1>Users from Backend</h1>
        {/* If backendData is null, show loading message, else display the data */}
        {backendData ? (
            <ul>
                {backendData.users.map((user, index) => (
                    <li key={index}>{user}</li>  // Display each user in a list item
                ))}
            </ul>
        ) : (
            <p>Loading...</p>  // Loading message while waiting for the data
        )}
    </div>
);

}


export default App;
