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
                        document.execCommand("insertHTML", false, `<img src="${event.target.result}" style="max-width:100%">`);
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
            <div className={styles.editorText} contentEditable="true"></div>
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
                id={`${data.toLowerCase()}_file`}
                style={{ visibility: "hidden", width: "0px" }}
              />
            )}
          </>
        );
      })}
    </div>
  );
}
