import React, { useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface OutputSectionProps {
  aiOutput: string;
}

// Function to clean RTF text and properly format it as Markdown
const cleanRTF = (text: string): string => {
  return text
    .replace(/\\[a-zA-Z0-9]+(\s?)/g, '') // Remove RTF control words
    .replace(/\{\\\*.*?\}/g, '') // Remove RTF special groups
    .replace(/[{}]/g, '') // Remove braces
    .replace(/\\'[0-9a-fA-F]{2}/g, '') // Remove hexadecimal characters
    .replace(/\r/g, '') // Remove carriage returns
    .replace(/\t/g, ' ') // Replace tab characters with spaces
    .replace(/\s+/g, ' ') // Normalize spaces
    .replace(/#/g, '\n#') // Ensure hashtags appear on separate lines
    .replace(/\*\s/g, '\n\n- ') // Ensure new lines before list items
    .replace(/\.\s/g, '.\n\n') // Ensure new lines after sentences
    .trim();
};

const OutputSection: React.FC<OutputSectionProps> = ({ aiOutput }) => {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const cleanedOutput = cleanRTF(aiOutput);
      editorInstance.setMarkdown(cleanedOutput);
    }
  }, [aiOutput]);

  return (
    <div className="shadow-lg border rounded-lg p-5 bg-black text-white">
      {/* Header with Copy Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button
          className="flex gap-2 bg-white text-black hover:bg-gray-300"
          onClick={() => navigator.clipboard.writeText(cleanRTF(aiOutput))}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>

      {/* Markdown Editor (Read-Only) */}
      <Editor
        ref={editorRef}
        initialValue="Loading output..."
        initialEditType="WYSIWYG"
        previewStyle="vertical"
        height="500px"
        useCommandShortcut={true}
      />

      {/* Custom Styles */}
      <style jsx global>{`
        .toastui-editor-contents {
          color: white !important;
          background-color: transparent !important;
          white-space: pre-wrap !important;
        }

        .toastui-editor-defaultUI {
          background-color: #000 !important;
        }

        .toastui-editor-md-preview {
          background-color: #000 !important;
          color: white !important;
        }

        .toastui-editor-toolbar {
          background-color: #000 !important;
        }
      `}</style>
    </div>
  );
}
<style jsx global>{`
  /* Ensure the background color of the markdown preview section is set */
  .toastui-editor-md-preview {
    background-color: white !important;  /* Set to white */
    color: black !important;             /* Set text color to black */
    padding: 20px;                       /* Optional: add padding for better readability */
  }

  /* Additional overrides for other editor areas */
  .toastui-editor-contents {
    background-color: transparent !important;
    color: black !important;             /* Make sure text is black */
  }

  .toastui-editor-toolbar {
    background-color: #333 !important;  /* You can change this if needed */
  }
`}</style>



export default OutputSection;
