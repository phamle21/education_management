export default class Active {
  constructor(quill) {
    quill.on('selection-change', (range, oldRange) => {
      if (range === null && oldRange !== null) {
        if (quill.container.parentNode.classList.contains('editor-container')) {
          quill.container.parentNode.classList.remove('active');
        } else {
          quill.container.classList.remove('active');
        }
      } else if (range !== null && oldRange === null) {
        if (quill.container.parentNode.classList.contains('editor-container')) {
          quill.container.parentNode.classList.add('active');
        } else {
          quill.container.classList.add('active');
        }
      }
    });
  }
}
