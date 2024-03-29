import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import MarkdownEditor from './Components/MarkdownEditor';
import NavBar from './Components/NavBar';
import { useState, useRef, useEffect } from 'react';

function App() {
  const textAreaRef = useRef(null);
  let defaultValueForTextarea = "# Enter title here";
  let [stateMarkdownInputData, updateStateMarkdownInputData] = useState({
    data: defaultValueForTextarea,
    previewPanelClassNames : 'bg-stone-100 p-[1rem] displayNone overflow-x-scroll ',
    navBarControlsClassNames : 'flex gap-[1rem]',
    inputTextAreaClassNames : 'text-[1.2rem] text-slate-900 p-[1rem]',
    markdownBlob : null


  }); 
  function toggleDisplayNone(data){
    return  data.includes('displayNone') ? data.replaceAll('displayNone', '') : data + ' displayNone';
  }
  function handleInputTextArea(e){
    updateStateMarkdownInputData(previousState=>{
      return {
        ...previousState,
        data: e.target.value
      }
    });
  }

  let [stateCursorNewLocation, updateStateCursorNewLocation] = useState(18);
  useEffect(()=>{
    textAreaRef.current.setSelectionRange(stateCursorNewLocation, stateCursorNewLocation);      
    textAreaRef.current.focus();
  }, [stateCursorNewLocation]);

  // to generate download markdown file
    useEffect(()=>{
      const blob = new Blob([stateMarkdownInputData.data], { type: 'text/markdown' });
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          markdownBlob: blob
        }
      })
    }, [stateMarkdownInputData.data]);

  function performOperationOnText(action=''){
    if(action === ''){
      return;
    }

    let selectionStart = textAreaRef.current.selectionStart;
    let selectionEnd = textAreaRef.current.selectionEnd;
    let selectedText = stateMarkdownInputData.data.substring(selectionStart, selectionEnd);
    let cursorIncrementBy = 0;

    if(action === 'makeItBold'){
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `**${selectedText}**` + stateMarkdownInputData.data.substring(selectionEnd);
      // //console.log(newText);
  
      // updating state
        // updateStateMarkdownInputData(newText);
        updateStateMarkdownInputData(previousState=>{
          return {
            ...previousState,
            data: newText
          }
        });        
        cursorIncrementBy=2;
    }else if (action === 'makeItItalic'){
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `*${selectedText}*` + stateMarkdownInputData.data.substring(selectionEnd);
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=1;
    }else if (action === 'makeItStrikethrough'){
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `~~${selectedText}~~` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=2;
    }else if (action === 'makeItHeading'){
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `# ${selectedText}` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=2;
    }else if (action === 'makeItBulletList'){
      selectedText= selectedText.replace(/\n/g, '\n+ ');
      //console.log(selectedText);

      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `+ ${selectedText}` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=2;
    }else if (action === 'makeItChecklist'){
      selectedText= selectedText.replace(/\n/g, '\n+ [ ] ');
      //console.log(selectedText);

      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `+ [ ] ${selectedText}` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=6;
    }else if (action === 'makeItNumberedList'){
      selectedText= selectedText.split('\n');
      selectedText = selectedText.map((line, idx)=>`${idx+1}. ${line}`);
      selectedText = selectedText.join('\n');
      // //console.log(selectedText);

      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `${selectedText}` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=2;
    }else if (action === 'makeItQuote'){
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `>${selectedText}` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=1;
    }else if (action === 'makeItImage'){
      if(selectedText.length ===0){
        selectedText = "EnterImageURLHere";
      }
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `![](${selectedText})` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=4;
    }else if (action === 'makeItHyperlink'){
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `[${selectedText}](url)` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
        cursorIncrementBy=1;
    }else if (action === 'makeItCode'){
      let newText = stateMarkdownInputData.data.substring(0, selectionStart) + `\`\`\`\r\n${selectedText}\r\n\`\`\`` + stateMarkdownInputData.data.substring(selectionEnd);      
  
      // updating state
      updateStateMarkdownInputData(previousState=>{
        return {
          ...previousState,
          data: newText
        }
      });   
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
    <div id='wrapperMarkDownEditor' className='flex flex-col max-w-[55rem] m-[auto]'>
      <NavBar
      toggleDisplayNone={toggleDisplayNone}
      performOperationOnText={performOperationOnText} stateMarkdownInputData={stateMarkdownInputData} updateStateMarkdownInputData={updateStateMarkdownInputData}/>
      <textarea className={stateMarkdownInputData.inputTextAreaClassNames} rows={25} cols={70} onChange={handleInputTextArea} ref={textAreaRef} value={stateMarkdownInputData.data}>
       
      </textarea>
      <MarkdownEditor data={stateMarkdownInputData.data} stateMarkdownInputData={stateMarkdownInputData}/>

    </div>

  );
}

export default App;
