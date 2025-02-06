import { useState } from 'react';

function App() {
    const [text, setText] = useState('');

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
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
                    border: '1px solid #ccc',
                    width: '300px'
                }}
            />
            <p>You entered: {text}</p>
        </div>
    );
}

export default App;
