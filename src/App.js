import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import MarkdownEditor from './Components/MarkdownEditor';
import NavBar from './Components/NavBar';
import { useState, useRef, useEffect } from 'react';

function App() {
  const textAreaRef = useRef(null);
  let defaultValueForTextarea = "# Enter title here";
  let [stateMarkdownInputData, updateStateMarkdownInputData] = useState(defaultValueForTextarea); 
  function handleInputTextArea(e){
    updateStateMarkdownInputData(e.target.value)
  }

  let [stateCursorNewLocation, updateStateCursorNewLocation] = useState(18);
  useEffect(()=>{
    textAreaRef.current.setSelectionRange(stateCursorNewLocation, stateCursorNewLocation);      
    textAreaRef.current.focus();
  }, [stateCursorNewLocation]);

  function performOperationOnText(action=''){
    if(action === ''){
      return;
    }

    let selectionStart = textAreaRef.current.selectionStart;
    let selectionEnd = textAreaRef.current.selectionEnd;
    let selectedText = stateMarkdownInputData.substring(selectionStart, selectionEnd);
    let cursorIncrementBy = 0;

    if(action === 'makeItBold'){
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `**${selectedText}**` + stateMarkdownInputData.substring(selectionEnd);
      // console.log(newText);
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=2;
    }else if (action === 'makeItItalic'){
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `*${selectedText}*` + stateMarkdownInputData.substring(selectionEnd);
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=1;
    }else if (action === 'makeItStrikethrough'){
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `~~${selectedText}~~` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=2;
    }else if (action === 'makeItHeading'){
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `## ${selectedText}` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=2;
    }else if (action === 'makeItBulletList'){
      selectedText= selectedText.replace(/\n/g, '\n+ ');
      console.log(selectedText);

      let newText = stateMarkdownInputData.substring(0, selectionStart) + `+ ${selectedText}` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=2;
    }else if (action === 'makeItChecklist'){
      selectedText= selectedText.replace(/\n/g, '\n+ [ ] ');
      console.log(selectedText);

      let newText = stateMarkdownInputData.substring(0, selectionStart) + `+ [ ] ${selectedText}` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=6;
    }else if (action === 'makeItNumberedList'){
      selectedText= selectedText.split('\n');
      selectedText = selectedText.map((line, idx)=>`${idx+1}. ${line}`);
      selectedText = selectedText.join('\n');
      // console.log(selectedText);

      let newText = stateMarkdownInputData.substring(0, selectionStart) + `${selectedText}` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=2;
    }else if (action === 'makeItQuote'){
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `>${selectedText}` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=1;
    }else if (action === 'makeItImage'){
      if(selectedText.length ===0){
        selectedText = "EnterImageURLHere";
      }
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `![](${selectedText})` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=4;
    }else if (action === 'makeItHyperlink'){
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `[${selectedText}](url)` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=1;
    }else if (action === 'makeItCode'){
      let newText = stateMarkdownInputData.substring(0, selectionStart) + `\`\`\`\r\n${selectedText}\r\n\`\`\`` + stateMarkdownInputData.substring(selectionEnd);      
  
      // updating state
        updateStateMarkdownInputData(newText);
        cursorIncrementBy=4;
    }
      
    // new cursor new location
    let newCursorLocation = selectionStart+cursorIncrementBy;
    updateStateCursorNewLocation(newCursorLocation);

    


  }

  let data=`
# hi there
**apple**
+ grapes
+ orange 
[Link](http://a.com)
![Image](https://commonmark.org/help/images/favicon.png)
  `;
  return (
    <div>
      <NavBar performOperationOnText={performOperationOnText}/>
      <textarea className="text-[1.2rem] text-slate-900" rows={25} cols={70} onChange={handleInputTextArea} ref={textAreaRef} value={stateMarkdownInputData}>
       
      </textarea>
      <MarkdownEditor data={stateMarkdownInputData} />

    </div>

  );
}

export default App;
