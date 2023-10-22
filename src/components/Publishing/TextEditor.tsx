import './styles/editorStyles.css';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from "@tiptap/extension-text-align";
import UnderlineExtension from "@tiptap/extension-underline";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import MenuBar from './MenuBar';
import StyledEditor from './StyledEditor';

interface textEditorProps {
  articleBody: string,
  onChange: any,
}

const TextEditor = (props:textEditorProps) => {
  const {articleBody, onChange} = props;
  const editor = useEditor({
    extensions: [StarterKit, TextAlign.configure({types: ["heading", "paragraph"],}), UnderlineExtension, Superscript, Subscript, Highlight, Link],
    content: articleBody,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <StyledEditor>
      {editor && <MenuBar editor={editor}/>}
      <EditorContent editor={editor}/>
    </StyledEditor>
  )
}

export default TextEditor;
