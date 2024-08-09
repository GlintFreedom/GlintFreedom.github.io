const filePath = 'assets/demo/';
const filePairs = {
  'button1': [filePath+'button1.js', filePath+'button1.css'],
  // 'animation1': [filePath+'animation1.js', filePath+'animation1.css'],
  'switch1': [filePath+'switch1.js', filePath+'switch1.css'],
};

// 函数：加载文件内容并拼接
function loadFilesContent(elementId, filePaths) {
  const promises = filePaths.map(filePath => fetch(filePath).then(response => response.text()));
  
  Promise.all(promises)
      .then(contents => {
          const jsContext = contents[0]
          const cssContext = contents[1]
          document.getElementById(elementId+'-js').textContent = jsContext;
          document.getElementById(elementId+'-css').textContent = cssContext;
      })
      .catch(error => {
          console.error(`Error loading codes for ${elementId}:`, error);
      });
}

// 遍历文件映射，加载每对文件的内容
for (const [elementId, filePaths] of Object.entries(filePairs)) {
  loadFilesContent(elementId, filePaths);
}