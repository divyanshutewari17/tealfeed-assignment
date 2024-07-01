import React from 'react';
import CodeEditor from './CodeEditor';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Code Editor</h1>
            <CodeEditor />
        </div>
    );
};

export default App;
