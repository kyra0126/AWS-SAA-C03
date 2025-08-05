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
    },
    plugins: [
      function (hook) {
        hook.doneEach(function () {
          // 페이지 렌더 완료 후 실행됨
          const tocTrigger = document.querySelector('.toc-hover-trigger');
          const tocLinks = document.querySelectorAll('.page_toc a');
          const count = tocLinks.length;
  
          tocTrigger.innerHTML = '';
          for (let i = 0; i < count; i++) {
            const bar = document.createElement('div');
            bar.className = 'hover-bar';
            tocTrigger.appendChild(bar);
          }
        });
      }
    ]
  };
  