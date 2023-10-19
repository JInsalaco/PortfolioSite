import { useCurrentEditor } from "@tiptap/react";
import { MenuOptionsButton } from "./MenuOptionsButton";

const MenuBar = () => {
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }
    
    return (
      <>
        <MenuOptionsButton 
        variant='contained'
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
            !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        content="bold"
        isActive={editor.isActive('bold')}
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
            !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        isActive={editor.isActive('italic')}
        content="italic"
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
            !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        isActive={editor.isActive('strike')}
        content='strike'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        content='clear marks'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().clearNodes().run()}
        content='clear nodes'/>
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive('paragraph')}
        content='paragraph'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive('heading')}
        content='heading'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive('heading', {level: 2})}
        content='h2'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive('heading', {level: 3})}
        content='h3'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive('heading', {level: 4})}
        content='h4'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive('heading', {level: 5})}
        content='h5'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive('heading', {level: 6})}
        content='h6'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
        content='bullet list'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
        content='ordered list'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive('codeBlock')}
        content='code block'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote')}
        content='blockquote'
        />
        <MenuOptionsButton
        variant='contained' onClick={() => editor.chain().focus().setHorizontalRule().run()}
        content='horizontal rule'
        />
        <MenuOptionsButton
        variant='contained' onClick={() => editor.chain().focus().setHardBreak().run()}
        content='hard break'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
            !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        content='undo'
        />
        <MenuOptionsButton
        variant='contained'
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
            !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        content='redo'
        />
      </>
    )
  }

  export default MenuBar;