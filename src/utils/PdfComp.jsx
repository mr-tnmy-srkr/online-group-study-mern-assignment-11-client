import { Document, Page } from 'react-pdf';


export default function PdfComp(pdf) {
  return (
    <Document file={pdf}>
      <Page pageNumber={1} />
    </Document>
  );
}