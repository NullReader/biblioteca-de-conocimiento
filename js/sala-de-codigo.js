/* ------------------- */
/*  Vista previa de código + iframe */
/* ------------------- */

// Carga automática de cada ejemplo en su iframe correspondiente
document.querySelectorAll('.preview-container').forEach(container => {
  const codeBlock = container.querySelector('.code-window code');
  const previewFrame = container.querySelector('.preview-frame');

  if (codeBlock && previewFrame) {
    const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(codeBlock.textContent);
    iframeDoc.close();
  }
});

document.querySelectorAll('.preview-container').forEach(container => {
  const htmlBlock = container.querySelector('.code-window[data-lang="html"] code');
  const cssBlock = container.querySelector('.code-window[data-lang="css"] code');
  const previewFrame = container.querySelector('.preview-frame');

  if (previewFrame && (htmlBlock || cssBlock)) {
    const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    iframeDoc.open();

    // Construye el contenido del iframe
    let content = '';
    if (htmlBlock) content += htmlBlock.textContent;
    if (cssBlock) content += `<style>${cssBlock.textContent}</style>`;

    iframeDoc.write(content);
    iframeDoc.close();
  }
});


// Función global para reiniciar la vista previa
// (se llama desde dentro del iframe con: window.parent.reiniciarPreview())
window.reiniciarPreview = function () {
  document.querySelectorAll('.preview-container').forEach(container => {
    const codeBlock = container.querySelector('.code-window code');
    const previewFrame = container.querySelector('.preview-frame');

    if (codeBlock && previewFrame) {
      const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(codeBlock.textContent);
      iframeDoc.close();
    }
  });
};

/* ------------------- */
/* Botón "Copiar código" con ícono */
/* ------------------- */

document.querySelectorAll('.code-window').forEach(container => {
  const copyBtn = container.querySelector('.copy-btn');
  const code = container.querySelector('code');

  if (!copyBtn || !code) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent.trim());

      // Añade la clase 'copied' al botón para cambiar el ícono
      copyBtn.classList.add('copied');

      setTimeout(() => {
        // Quita la clase 'copied' después de 2 segundos para revertir el ícono
        copyBtn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Error al copiar el código:', err);
    }
  });
});
