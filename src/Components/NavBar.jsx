export default function NavBar({performOperationOnText}){
  return (
    <header className='flex gap-[1rem] text-[1.5rem] items-center bg-stone-100 p-[2rem]'>
      <button className="px-[1rem] py-[.3rem] flex gap-[.5rem]">
        <i className="fa-solid fa-pencil"></i>
        <span>Write</span>
      </button>
      <button  className="px-[1rem] py-[.3rem]  flex gap-[.5rem] ">
        <i className="fa-regular fa-file"></i>
        <span>Preview</span>
        
      </button>
      <i onClick={()=>{performOperationOnText('makeItHeading')}} title='Insert Heading' className="fa-solid fa-heading cursor-pointer hover:text-blue-400 transition"></i>
      <i onClick={()=>{performOperationOnText('makeItBold')}} title='Insert Bold Text'  className="fa-solid fa-bold cursor-pointer hover:text-blue-400 transition"></i>
      <i onClick={()=>{performOperationOnText('makeItItalic')}} title='Insert Italic Text'  className="fa-solid fa-italic cursor-pointer hover:text-blue-400 transition"></i>
      <i onClick={()=>{performOperationOnText('makeItStrikethrough')}} title='Insert Strikethrough Text'  className="fa-solid fa-strikethrough cursor-pointer hover:text-blue-400 transition"></i>
      <i onClick={()=>{performOperationOnText('makeItHyperlink')}} title='Insert Hyperlink'  className="fa-solid fa-link cursor-pointer hover:text-blue-400 transition"></i>
      <i  onClick={()=>{performOperationOnText('makeItQuote')}}  title='Insert Quote'  className="fa-sharp fa-solid fa-quote-right cursor-pointer hover:text-blue-400 transition"></i>
      <i onClick={()=>{performOperationOnText('makeItCode')}} title='Insert Code'  className="fa-solid fa-code cursor-pointer hover:text-blue-400 transition"></i>
      <i  onClick={()=>{performOperationOnText('makeItImage')}} title='Insert an Image'  className="fa-solid fa-image cursor-pointer hover:text-blue-400 transition"></i>
      <i  onClick={()=>{performOperationOnText('makeItBulletList')}} title='Insert Bullet List'  className="fa-solid fa-list cursor-pointer hover:text-blue-400 transition"></i>
      <i onClick={()=>{performOperationOnText('makeItNumberedList')}}  title='Insert Numbered List'  className="fa-solid fa-list-ol cursor-pointer hover:text-blue-400 transition"></i>
      <i onClick={()=>{performOperationOnText('makeItChecklist')}}  title='Insert Checkboxes List'  className="fa-light fa-list cursor-pointer hover:text-blue-400 transition"></i>
    </header>
  );
}