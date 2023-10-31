import styled from "@emotion/styled";

const EditorStyled = styled.div`
code {
    background-color: #f4f6f8;
    border-radius: 5px;
    padding: 5px 5px;
  }

.tiptap {
    width: 100%;
    border: 2px solid;
    border-radius: 3px;
    border-color: rgba(0, 0, 0, 0.12);

    ul,
    ol {
      padding: 0 1rem;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }
  
    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }
  
    pre {
      background: #0D0D0D;
      color: #FFF;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
  
      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }
  
    img {
      max-width: 100%;
      height: auto;
    }
  
    blockquote {
      padding-left: 1rem;
      border-left: 2px solid;
    }
  
    hr {
      border: none;
      border-top: 2px solid rgba(#0D0D0D, 0.1);
      margin: 2rem 0;
    }
    
  }

.ProseMirror {
    padding: .5rem;
  }
`;

export default EditorStyled;