import Markdown from 'react-markdown'
export default function MarkdownEditor({data}){
  return (
    <Markdown>
{data}

    </Markdown>
  );
}