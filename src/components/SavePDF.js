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

  const generatePDF = () =>{
    const element = document.getElementsByClassName('CV')[0];
    html2canvas(element)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpg');
        const pdf = new jsPDF('p', 'px', 'letter');
        pdf.addImage(imgData, 'JPG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("cvtemplate.pdf");
      });
    }
    
 
  return (
    <div>
      <button type="button" onClick={generatePDF}>
        Download as PDF
      </button>
    </div>
  );
};