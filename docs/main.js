window.$docsify = {
    name: 'AWS SAA-C03 Study Notes',
    repo: '',
    loadSidebar: true,
    alias: {
      '/_sidebar.md': '_sidebar.md',
      '/ko/_sidebar.md': 'ko/_sidebar.md'
    },
    toc: {
      scope: '.markdown-section',
      headings: 'h2, h3',
      title: ''
    }
  };
  
  window.addEventListener('DOMContentLoaded', function () {
    const tocTrigger = document.querySelector('.toc-hover-trigger');
  
    function renderHoverBars() {
      const tocLinks = document.querySelectorAll('.page_toc a');
      const count = tocLinks.length;
  
      tocTrigger.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const bar = document.createElement('div');
        bar.className = 'hover-bar';
        tocTrigger.appendChild(bar);
      }
    }
  
    setTimeout(renderHoverBars, 800); // 페이지 렌더 완료 후
  });
  