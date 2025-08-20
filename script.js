// 📄 This function converts the textarea content to a downloadable PDF
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const text = document.getElementById("cheatInput").value;

  if (!text.trim()) {
    alert("Please enter some content before generating the PDF!");
    return;
  }

  // 🔽 Add the entered text to the PDF
  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 10, 20);

  // 💾 Save the file
  doc.save("cheat-sheet.pdf");
}
