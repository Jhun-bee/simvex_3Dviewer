import jsPDF from 'jspdf';

/**
 * Generates a PDF with the 3D viewer screenshot, notes, and AI conversation.
 * Uses direct canvas capture for WebGL content instead of html2canvas.
 */
export async function generatePDF(
  machineryName: string,
  viewerElement: HTMLElement,
  notes: string,
  aiConversation: { role: string; content: string }[]
): Promise<void> {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  let yPosition = margin;

  // Title
  pdf.setFontSize(20);
  pdf.text(`SIMVEX - ${machineryName}`, margin, yPosition);
  yPosition += 10;

  pdf.setFontSize(10);
  pdf.text(`생성일: ${new Date().toLocaleDateString('ko-KR')}`, margin, yPosition);
  yPosition += 15;

  // Capture 3D Viewer - use WebGL canvas directly
  try {
    // Find the WebGL canvas inside the viewer element
    const canvas = viewerElement.querySelector('canvas') as HTMLCanvasElement;

    if (canvas) {
      // Force a render to ensure the canvas has content
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pageWidth - margin * 2;

      // Calculate height maintaining aspect ratio
      const aspectRatio = canvas.height / canvas.width;
      const imgHeight = imgWidth * aspectRatio;

      // Check if we need a new page
      if (yPosition + imgHeight > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }

      pdf.addImage(imgData, 'PNG', margin, yPosition, imgWidth, Math.min(imgHeight, 100));
      yPosition += Math.min(imgHeight, 100) + 10;
    }
  } catch (error) {
    console.error('3D 캡처 실패:', error);
    // Continue without image
    pdf.setFontSize(10);
    pdf.text('[3D 뷰어 캡처를 사용할 수 없습니다]', margin, yPosition);
    yPosition += 10;
  }

  // Notes Section
  if (notes && notes.trim()) {
    if (yPosition + 20 > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }

    pdf.setFontSize(14);
    pdf.text('학습 노트', margin, yPosition);
    yPosition += 7;

    pdf.setFontSize(10);
    // Handle Korean text by keeping lines shorter
    const noteLines = pdf.splitTextToSize(notes, pageWidth - margin * 2);
    noteLines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }
      // Use try-catch for each line in case of encoding issues
      try {
        pdf.text(line, margin, yPosition);
      } catch {
        pdf.text('[텍스트 인코딩 오류]', margin, yPosition);
      }
      yPosition += 5;
    });
    yPosition += 10;
  }

  // AI Conversation Section
  if (aiConversation.length > 0) {
    if (yPosition + 20 > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }

    pdf.setFontSize(14);
    pdf.text('AI 어시스턴트 대화', margin, yPosition);
    yPosition += 7;

    aiConversation.forEach((msg) => {
      if (yPosition > pageHeight - margin - 20) {
        pdf.addPage();
        yPosition = margin;
      }

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      const roleLabel = msg.role === 'user' ? '질문:' : 'AI:';
      pdf.text(roleLabel, margin, yPosition);
      yPosition += 5;

      pdf.setFont('helvetica', 'normal');
      try {
        const msgLines = pdf.splitTextToSize(msg.content, pageWidth - margin * 2);
        msgLines.forEach((line: string) => {
          if (yPosition > pageHeight - margin) {
            pdf.addPage();
            yPosition = margin;
          }
          pdf.text(line, margin, yPosition);
          yPosition += 5;
        });
      } catch {
        pdf.text('[메시지 인코딩 오류]', margin, yPosition);
        yPosition += 5;
      }
      yPosition += 5;
    });
  }

  // Download PDF
  const timestamp = new Date().toISOString().slice(0, 10);
  pdf.save(`SIMVEX_${machineryName}_${timestamp}.pdf`);
}
