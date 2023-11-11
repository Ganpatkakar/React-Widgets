import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Editor from './Editor.component';

export default function EditorComponent() {

  return (
    <>
      <div>
        <Editor containerClass={"editorContainer"} />
      </div>

      <h2>How to call Editor component</h2>
      <p>import editor component and call it</p>
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
    import React from "react";
    import Editor from './Editor.component';
    
    export default function EditorComponent() {
    
        return (
            <div>
                <Editor containerClass={"editorContainer"} />
            </div>
        )
    }
  `
  }
      </SyntaxHighlighter>

      <h2>Data Table component</h2>
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
{`        
    import React from "react";
    import styles from "./Editor.module.scss";
    
    const actionButtons = [
      "Bold",
      "Italic",
      "Strike",
      "Sub",
      "Sup",
      "UnderLine",
      "InsertImage",
      "BlockQuote",
    ];
    export default function Editor(props) {
        const { containerClass } = props;
        
        const handleActions = (event) => {
            let target = event.target;
            if (target.nodeName !== 'BUTTON') {
                target = target.parentNode;
            }
            const id = target.id
            switch(id) {
                case 'bold':
                    document.execCommand("bold");
                    console.log("bold clicked");
                    break;
                case 'italic':
                    document.execCommand("italic");
                    console.log("italic clicked");
                    break;
                case 'strike':
                    document.execCommand("strikethrough");
                    console.log("strike clicked");
                    break;
                case 'sub':
                    document.execCommand("subscript");
                    console.log("sub clicked");
                    break;
                case 'sup':
                    document.execCommand("superscript");
                    console.log("sup clicked");
                    break;
                case 'underline':
                    document.execCommand("underline");
                    console.log("underline clicked");
                    break;
                case 'insertimage':
                    const fileElm = document.getElementById('insertimage_file');
                    function FileReaderEvent(event) {
                        var selectedFile = event.target.files[0];
                        var reader = new FileReader();
                    
                        reader.onload = function(event) {
                            document.execCommand("insertHTML", false, '<img src={event.target.result} style="max-width:100%">');
                        };
                        reader.readAsDataURL(selectedFile);
                    };
                    fileElm.onchange = FileReaderEvent;
                    fileElm.click();
                    console.log("Inset image clicked");
                    break;
                case 'blockquote':
                    document.execCommand("formatBlock", false, '<blockquote>');
                    console.log("formatBlock clicked");
                    break;
                default:
                    console.log("default clicked");
                    break;
            }
        }
    
        return (
            <div className={styles[containerClass]}>
                <EditorAction action={handleActions} />
                <div className={styles.editorText} contenteditable="true"></div>
            </div>
        );
    }
    
    function EditorAction(props) {
      return (
        <div className={styles.editorActions} onClick={props.action}>
          {actionButtons.map((data) => {
            let start = ["Sub", "Sup"].includes(data) ? data : data[0];
            start = data === "InsertImage" ? "Img" : start;
            start = data === "BlockQuote" ? '"' : start;
            return (
              <>
                <button id={data.toLowerCase()}>{start}</button>
                {data === "InsertImage" && (
                  <input
                    type="file"
                    id={{data.toLowerCase()}_file}
                    style={{ visibility: "hidden", width: "0px" }}
                  />
                )}
              </>
            );
          })}
        </div>
      );
    }
`}
      </SyntaxHighlighter>

      <p>Note: Please replace "$" with `$ icon</p>

      <h2>Style with scss</h2>
      <SyntaxHighlighter language="scss" style={materialOceanic}>
{`      
.editorContainer {
    width: 500px;
    display: block;
    border: 1px solid #000;
    border-radius: 4px;

    .editorActions {
        display: flex;
        padding: 10px 10px 0px;
        background: #ddd;
        border-radius: 4px 4px 0 0;
    
        button {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            margin-bottom: 10px;
    
            .icon{
                width: 16px;
            }
        }
    }
    
    .editorText {
        display: block;
        width: 100%;
        min-height: 300px;
        padding: 10px;
        box-sizing: border-box;
    
        blockquote {
            border-left: 5px solid #ccc;
            font-style: italic;
            margin-left: 0;
            margin-right: 0;
            overflow: hidden;
            padding-left: 1.5em;
            padding-right: 1.5em;
        }
    }
}
`}
      </SyntaxHighlighter>

        <p>Architecture design</p>

        <iframe 
            style={{border:'1px solid var(--color-line-3rd)', display:'block', margin:'auto', width:'3015px', height:'990px', 'aspect-ratio': '3015 / 990', 'max-width':'100%', 'max-height':'500px'}}
            src="https://bigfrontend.dev/tools/excalidraw/embed/7014daa3-eaee-4603-a40c-59ac0f5b6bee"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    </>
  );
}
