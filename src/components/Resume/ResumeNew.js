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
          download="Kugavarathan_CV.pdf"
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
          download="Kugavarathan_CV.pdf"
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
