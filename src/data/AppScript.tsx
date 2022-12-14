import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function AppScript({ Name }) {
  useEffect(() => {
    Prism.highlightAll();
    document.title = "AppScript";
  }, []);

  const output =
    `function doGet() {
  var response = {};

  // ${Name} 
  var Data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('${Name}')
  .getDataRange()
  .getValues();

  // Make Objects
  response.${Name} = makeObject(${Name})

  return ContentService.createTextOutput(JSON.stringify(response))
  .setMimeType(ContentService.MimeType.JSON)
}

function makeObject(multiArray)
{
  var obj = {}; 

  var headers = multiArray.shift();

  for(var i = 0; i<headers.length; i++) {
    obj[headers[i]] = multiArray.map(function(app){
      return app[i]
    })
  }
  return obj
}
`

  return (
    <div className="Code">
      <h1>AppScript</h1>
      <kbd>{Name}</kbd>
      <br /> <br />

      <button className="btn-accent green blk" id="cpy" onClick={() => CopyCode(output)}>Copy <i className="fa-regular fa-copy"></i></button>

      <pre>
        <code className={'language-js'}>
          {output}
        </code>
      </pre>
    </div>
  )
}