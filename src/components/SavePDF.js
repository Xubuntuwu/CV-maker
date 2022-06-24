import { jsPDF } from 'jspdf';
import React from 'react';
import html2canvas from 'html2canvas';

 export default function SavePDF () {

  // const handleDownloadPdf = async () => {
  //   const element = document.getElementsByClassName('CV')[0];

  //   const pdf = new jsPDF('p', 'pt', 'letter');
  //   pdf.html(element,{
  //       callback: function (pdf) {
  //           // var iframe = document.createElement('iframe');
  //           // iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
  //           // document.body.appendChild(iframe);
  //           // iframe.src = pdf.output('datauristring');
  //           pdf.save();
  //       }
  //     })
    
  // };
  // const generatePDF = () => {
  //   const element = document.getElementsByClassName('CV')[0];
  //   const report = new jsPDF('portrait','px','a4');
  //   report.html(element).then(() => {
  //       report.save('cvprintout.pdf');
  //   })
//  }

  // const generatePDF = () =>{
  //   const element = document.getElementsByClassName('CV')[0];
  //   html2canvas(element)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/jpg');
  //       const pdf = new jsPDF('p', 'pt', 'a4');
  //       pdf.context2d.pageWrapYEnabled = true;
  //       pdf.addImage(imgData, 'JPG', 0, 0);
  //       // pdf.output('dataurlnewwindow');
  //       pdf.save("cvtemplate.pdf");
  //     });
  //   }

  const generatePdf =() => {
    const data = document.getElementsByClassName('CV')[0];
    html2canvas(data, { allowTaint: true, scale: 4 }).then(canvas => {
     let HTML_Width = canvas.width;
     let HTML_Height = canvas.height;
     let top_left_margin = 15;
     let PDF_Width = HTML_Width + (top_left_margin * 2);
     let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
     let canvas_image_width = HTML_Width;
     let canvas_image_height = HTML_Height;
     let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
     canvas.getContext('2d');
     let imgData = canvas.toDataURL("image/jpeg", 1.0);
     let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
     pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
     for (let i = 1; i <= totalPDFPages; i++) {
       pdf.addPage([PDF_Width, PDF_Height], 'p');
       pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
     }
      pdf.save("HTML-Document.pdf");
   });
 }
    
 
  return (
    <div>
      <button type="button" onClick={generatePdf}>
        Download as PDF
      </button>
    </div>
  );
};