function showPopup(id, pdfUrl) {
  const viewer = document.getElementById(`${id}Viewer`);
  viewer.setAttribute("data", pdfUrl);
  document.getElementById(id).style.display = "block";
}

function hidePopup(id) {
  document.getElementById(id).style.display = "none";
}
