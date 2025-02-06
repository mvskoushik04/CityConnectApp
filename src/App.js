import { useState } from 'react';

function App() {
    const [text, setText] = useState('');

    return (
        <div style={{
            backgroundColor: 'black', 
            color: 'white', 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}>
            <h1>City Connect App</h1>
            <input
                type="text"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid white',
                    width: '300px',
                    backgroundColor: 'black',
                    color: 'white',
                    outline: 'none'
                }}
            />
            <p>You entered: {text}</p>
        </div>
    );
}

export default App;
