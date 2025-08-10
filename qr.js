function generateQR() {
  const input = document.getElementById("qr-code");
  const img = document.getElementById("qr-code-img");
  const url = input.value.trim();

  if (!url) {
    img.style.display = "none";
    alert("Please enter a valid URL or text");
    return;
  }

  //use qrserver.com API to generate qr code
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    //to handle special characters in the input: encodeURIComponent(url)
    url)} `;
  img.style.display = "block";
}
