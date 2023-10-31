const inputEle = document.getElementById('inp')
const btnEle = document.getElementById('btn')

btnEle.addEventListener('click', () => {
  const value = inputEle.value
  const doc = new jsPDF();

  doc.text(value, 10, 10);
  doc.save("a4.pdf");
})