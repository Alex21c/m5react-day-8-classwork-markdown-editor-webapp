import Markdown from 'react-markdown';
// Custom renderer for strike-through text

export default function MarkdownEditor({data, stateMarkdownInputData}){
  return (
    <Markdown className={stateMarkdownInputData.previewPanelClassNames} >
{data}
    </Markdown>
  );
}