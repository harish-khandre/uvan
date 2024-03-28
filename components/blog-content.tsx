"use client";
import { BlockNoteView } from "@blocknote/react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { useEffect, useMemo, useState } from "react";

const BlogContent = ({ content }: any) => {
  const [initialContent, setInitialContent] = useState<PartialBlock[]>([]);

  useEffect(() => {
      const parsedContent = JSON.parse(content);
      setInitialContent(parsedContent);
    }, [content]);

  const editor = useMemo(() => {
    return initialContent.length > 0
      ? BlockNoteEditor.create({ initialContent })
      : undefined;
  }, [initialContent]);

  if (!editor) {
    return "Loading content...";
  }
  return (
    <div>
      <BlockNoteView  editor={editor} theme="light" editable={false} />
    </div>
  );
};

export default BlogContent;
