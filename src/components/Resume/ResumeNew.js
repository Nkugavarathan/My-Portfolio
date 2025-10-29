// import React, { useState, useEffect } from "react"
// import { Container, Row } from "react-bootstrap"
// import Button from "react-bootstrap/Button"
// import Particle from "../Particle"
// import pdf from "../../Assets/kugavarathan.pdf"
// import { AiOutlineDownload } from "react-icons/ai"
// import { Document, Page, pdfjs } from "react-pdf"
// import { pdfjs } from "react-pdf"
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url"

// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker

// // ❌ Removed old CSS imports that don't exist anymore
// // import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// // import "react-pdf/dist/esm/Page/TextLayer.css";

// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

// function ResumeNew() {
//   const [width, setWidth] = useState(1200)
//   const [numPages, setNumPages] = useState(null)

//   useEffect(() => {
//     setWidth(window.innerWidth)
//   }, [])

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages)
//   }

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document
//             file={pdf}
//             onLoadSuccess={onDocumentLoadSuccess}
//             className="d-flex flex-column align-items-center"
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 scale={width > 786 ? 1.7 : 0.6}
//               />
//             ))}
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default ResumeNew
// import React, { useState, useEffect } from "react"
// import { Container, Row } from "react-bootstrap"
// import Button from "react-bootstrap/Button"
// import Particle from "../Particle"
// import pdf from "../../Assets/kugavarathan.pdf"
// import { AiOutlineDownload } from "react-icons/ai"
// import { Document, Page, pdfjs } from "react-pdf"

// // ✅ Use CDN worker for Create React App
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

// function ResumeNew() {
//   const [width, setWidth] = useState(1200)
//   const [numPages, setNumPages] = useState(null)

//   useEffect(() => {
//     setWidth(window.innerWidth)
//   }, [])

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages)
//   }

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document
//             file={pdf}
//             onLoadSuccess={onDocumentLoadSuccess}
//             className="d-flex flex-column align-items-center"
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 scale={width > 786 ? 1.7 : 0.6}
//               />
//             ))}
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default ResumeNew

import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Particle from "../Particle"
import pdf from "../../Assets/kugavarathan.pdf"
import { AiOutlineDownload } from "react-icons/ai"
import { Document, Page, pdfjs } from "react-pdf"

// ✅ For react-pdf v5
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function ResumeNew() {
  const [width, setWidth] = useState(1200)
  const [numPages, setNumPages] = useState(null)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className="d-flex flex-column align-items-center"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={width > 786 ? 1.7 : 0.6}
            />
          ))}
        </Document>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  )
}

export default ResumeNew
