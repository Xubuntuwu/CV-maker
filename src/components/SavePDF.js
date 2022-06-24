import { jsPDF } from 'jspdf';
import React from 'react';

 export default function SavePDF () {

  const handleDownloadPdf = async () => {
    const element = document.getElementsByClassName('CV')[0];

    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.html(element,{
        callback: function (pdf) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
            document.body.appendChild(iframe);
            iframe.src = pdf.output('datauristring');
        }
      })
  };

  return (
    <div>
      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
    </div>
  );
};