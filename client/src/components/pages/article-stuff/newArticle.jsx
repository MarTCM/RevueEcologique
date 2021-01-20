import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const NewArticle = () => {
  const [titre, setTitre] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  let options = {
    entityStyleFn: (entity) => {
      const entityType = entity.get("type").toLowerCase();
      if (entityType === "image") {
        const data = entity.getData();
        return {
          element: "img",
          attributes: {
            src: data.src,
          },
          style: {
            height: 450,
          },
        };
      }
    },
    inlineStyles: {
      BOLD: { style: { fontSize: 35 } },
    },
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = stateToHTML(
      editorState.getCurrentContent(),
      options
    );
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <div>
      <header style={{ fontSize: 22, paddingLeft: 10 }}>Nouveau Article</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
      <button
        className="btn btn-primary"
        style={{ marginLeft: 20 }}
        onClick={() => {
          const paragraph = btoa(convertedContent);
          console.log(paragraph);
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default NewArticle;
