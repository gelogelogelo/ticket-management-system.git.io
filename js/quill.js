var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6] }],
    [{ 'font': ['serif', 'sans-serif', 'monospace'] }],
    ['bold', 'italic', 'underline'],
    ['image'],
    [{ 'list': 'bullet' }],
  ];
  
  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow',
    formats: {
      font: [
        'serif',
        'sans-serif',
        'monospace'
      ]
    },
    styles: {
      '.ql-sans-serif': {
        'font-family': 'Open Sans, sans-serif'
      }
    }
  });

  var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6] }],
    [{ 'font': ['serif', 'sans-serif', 'monospace'] }],
    ['bold', 'italic', 'underline'],
    ['image'],
    [{ 'list': 'bullet' }],
  ];
  
  var quill = new Quill('#editor2', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow',
    formats: {
      font: [
        'serif',
        'sans-serif',
        'monospace'
      ]
    },
    styles: {
      '.ql-sans-serif': {
        'font-family': 'Open Sans, sans-serif'
      }
    }
  });