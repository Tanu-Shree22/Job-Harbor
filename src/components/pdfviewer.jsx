
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = () => {
    const newPlugins = defaultLayoutPlugin();
    const pdfUrl='/cs.pdf'
    return (
        <div style={{ height: '100vh' }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} plugins={[newPlugins]} />
            </Worker>
        </div>
    );
};

export default PdfViewer;



// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import './css/pdfviewer.css'; // Adjust the path to your CSS file if necessary

// export default function Pdfviewer() {
//     const viewPdf = './dummy.pdf'; // Adjust the path to your PDF file if necessary
//     const newPlugins = defaultLayoutPlugin();

//      return (
//         <div className='container'>
//             <h3>View Pdf</h3>
//             <div className='pdf-container'>
//                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//                     <Viewer fileUrl={viewPdf} plugins={[newPlugins]} />
//                 </Worker>
//             </div>
//         </div>
//     );
// }

// // import React from 'react';
// // import { Worker, Viewer } from '@react-pdf-viewer/core';
// // import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// // import '@react-pdf-viewer/core/lib/styles/index.css';
// // import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // import './css/pdfviewer.css'; // Adjust the path to your CSS file if necessary

// // export default function Pdfviewer() {
// //     const viewPdf = './we'; // Adjust the path to your PDF file if necessary
// //     const newPlugins = defaultLayoutPlugin();

// //     return (
// //         <div className='container'>
// //             <h3>View Pdf</h3>
// //             <div className='pdf-container'>
// //                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
// //                     <Viewer fileUrl={viewPdf} plugins={[newPlugins]} />
// //                 </Worker>
// //             </div>
// //         </div>
// //     );
// // }
// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';


// // Set the worker URL based on the PDF.js version

// export default function Pdfviewer() {
//     pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);
// //   pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// //     'pdfjs-dist/build/pdf.worker.min.js',
// //     import.meta.url,
// //   ).toString();
// chrome.webRequest.onHeadersReceived

// function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file="./dummy.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }