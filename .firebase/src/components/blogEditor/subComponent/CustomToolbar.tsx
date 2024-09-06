// components/CustomToolbar.js

export default function CustomToolbar() {
  
    return (
      <div id="toolbar" className="flex items-centre space-x-2 ml-1 !mb-3  ">
        <button className="ql-bold ">B</button>
        <button className="ql-italic">I</button>
        <button className="ql-underline">U</button>
        <button className="ql-strike">S</button>
        <button  className="ql-script" value="sub"></button>
        <button  className="ql-script" value="super"></button>
        <button  className="ql-list" value="ordered"></button>
        <button  className="ql-list" value="bullet"></button>
        <button  className="ql-list" value="check"></button>
        
        <select className="ql-header">
          <option value="1">Heading</option>
          {/* <option value="2">Sub Heading</option> */}
          <option selected >Paragraph</option>
        </select>
        <button className="ql-blockquote"></button>
        <button className="ql-code-block"></button>
        <button className="ql-link"></button>
        <button className="ql-image"></button>
        
      </div>
    );
  }
  