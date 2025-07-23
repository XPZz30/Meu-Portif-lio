
  function copiarTexto(id) {
    const texto = document.getElementById(id).innerText;
    navigator.clipboard.writeText(texto)
      .then(() => {
        const toastElement = new bootstrap.Toast(document.getElementById('copiarToast'));
        toastElement.show();
      })
      .catch(() => {
        alert('Erro ao copiar texto');
      });
  }
