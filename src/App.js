import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BiBold } from 'react-icons/bi';
import { BiItalic } from 'react-icons/bi';
import Style from "./Style.css";

const BoldButton = styled.button`
  font-weight: bold;
`;

const ItalicButton = styled.button`
  font-style: italic;
`;

const EditableDiv = styled.div`
  width: 100%;
  height: 400px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;

`;

function App() {
    const [text, setText] = useState("");

    const editableDivRef = useRef(null);

    const handleBoldClick = () => {
        document.execCommand("bold", false, null);
    };

    const handleItalicClick = () => {
        document.execCommand("italic", false, null);
    };

    const handleTextChange = () => {
        const formattedText = editableDivRef.current.innerText.replace(
            /\.(\s|\n)/g,
            ".\n"
        );
        setText(formattedText);
    };

    return (

        <>
            <div className="container">
                <BoldButton onClick={handleBoldClick} className="bg"><BiBold /></BoldButton>
                <ItalicButton onClick={handleItalicClick} className="bg2"><BiItalic /></ItalicButton>
                <EditableDiv className="textarea"
                    contentEditable={true}
                    onInput={handleTextChange}
                    ref={editableDivRef}
                />
            </div>

        </>
    );
}




export default App;
