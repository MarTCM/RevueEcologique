import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import { useAuth0 } from "@auth0/auth0-react";
import api from "../../../api";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewArticle = () => {
  const { user } = useAuth0();

  const [titre, setTitre] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState("");

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const handleTitleChange = ({ currentTarget: input }) => {
    setTitre(input.value);
  };

  const handleImgLinkChange = ({ currentTarget: input }) => {
    setImgLink(input.value);
  };

  const handleSubmit = async () => {
    const payload = {
      titre: titre,
      paragraphe: convertedContent,
      imgLink: imgLink,
      pfp: user.picture,
      auteur: user.name,
    };

    await api.insertArticle(payload).then((res) => {
      window.alert(`Article inserted successfully`);
      setTitre("");
      setImgLink("");
    });
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
            width: 900,
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

  return (
    <div>
      <header style={{ fontSize: 22, paddingLeft: 10, paddingTop: 10 }}>
        Nouveau Article
      </header>
      <hr />
      <input
        style={{ width: "35%", marginLeft: 20, marginBottom: 20 }}
        autoFocus
        placeholder="Titre"
        value={titre}
        onChange={handleTitleChange}
        id="titre"
        name="titre"
        type="text"
        className="form-control"
      />
      <input
        style={{ width: "35%", marginLeft: 20, marginBottom: 20 }}
        placeholder="Image de face"
        value={imgLink}
        onChange={handleImgLinkChange}
        id="imgLink"
        name="imgLink"
        type="text"
        className="form-control"
      />
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        style={{ marginLeft: 20, marginTop: 20 }}
      >
        Submit
      </button>
    </div>
  );
};
export default NewArticle;
