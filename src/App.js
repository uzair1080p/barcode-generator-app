import React, {useEffect} from "react";

import { useBarcode } from 'react-barcodes';


export default function App() {
  const { inputRef } = useBarcode({
    value: '12345 6789',
    options: {
      background: '#ccffff',
    }
  });

  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: 'white',
  }

  const saveSvgAsPng = require('save-svg-as-png');

  useEffect(() => {
    saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-chart'), 'shapes.png', imageOptions);
  });
  
  return (
    <div className="App">
      <h1>react-barcodes</h1>
      <svg id={"svg-chart"} ref={inputRef} />;
    </div>
  );
}
