import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import './CodeEditor.css';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';

const languages = {
    javascript: 'JavaScript',
    css: 'CSS',
    markup: 'HTML',
    java: 'Java',
    python: 'Python',
};

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        setCode('')
    };

    const highlightCode = (code) => {
        return Prism.highlight(code, Prism.languages[language], language);
    };

    return (
        <div className="code-editor-container">
            <div className="language-select">
                <label htmlFor="language">Select Language: </label>
                <select id="language" value={language} onChange={handleLanguageChange}>
                    {Object.entries(languages).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                    ))}
                </select>
            </div>
            <div className="code-editor">
                <textarea
                    value={code}
                    onChange={handleChange}
                    className={`code-input language-${language}`}
                    spellCheck="false"
                />
                <pre className="code-output" dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
            </div>
        </div>
    );
};

export default CodeEditor;
