"use client";

import { editSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

export default function SnippetEditForm({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState("");
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
      {snippet.title}
      <Editor
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
        }}
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        height="40vh"
        onChange={handleEditorChange}
      />
      <form action={editSnippet.bind(null, snippet.id, code)}>
        <button className="p-2 border rounded">Save</button>
      </form>
    </div>
  );
}
