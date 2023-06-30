function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const pdfURL = e.target.result;
        displayPDF(pdfURL);
      };
      reader.readAsDataURL(file);
    }
  }
  
  function displayPDF(pdfURL) {
    const projects = document.getElementById('projects');
    const project = document.createElement('div');
    project.className = 'project';
  
    const pdfEmbed = document.createElement('embed');
    pdfEmbed.src = pdfURL;
    pdfEmbed.type = 'application/pdf';
    pdfEmbed.width = '100%';
    pdfEmbed.height = '300px';
  
    project.appendChild(pdfEmbed);
    projects.appendChild(project);
  }
  