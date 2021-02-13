// sidebar自动化生成
const path = require('path')
const fs = require('fs')

// 需要自动化生成sidebar的入口
const SIDEBAR_ENTRY = [
  {
    name: '/notes/',
    path: 'notes'
  },
  {
    name: '/exam/',
    path: 'exam'
  }
];

let ENTRY = null;

function autoSideBar() {
  let sidebar = {};
  for(let sec of SIDEBAR_ENTRY) {
    ENTRY = path.resolve(process.cwd(), sec.path);
    const sidebar_path = path.resolve(process.cwd(), sec.path);
    let catalog = [];
    scan(sidebar_path, catalog);
    sidebar[sec.name] = catalog;
  }
  return sidebar;
}

function scan(_path, catalog = []) {
  const files = fs.readdirSync(_path);
  files.sort((a, b) => a - b);
  for(const file of files) {
    if(!isValid(file)) {
      continue;
    }
    const filePath = path.resolve(_path, file);
    const fileStat = fs.statSync(filePath);
    if(fileStat.isDirectory()) {
      const subCatalog = {
        title: file.replace(/^\d+\./, ""),
        children: []
      };
      scan(filePath, subCatalog.children);
      catalog.push(subCatalog);
    } else if(fileStat.isFile() && file.endsWith('.md')) {
      const mdName = path.relative(ENTRY, filePath).replace(/\.md$/, "").replace(/\\/g, '/');
      catalog.push(mdName);
    }
  } 
}

function isValid(name) {
  return /^\d+\./.test(name);
}


module.exports = {
  autoSideBar
}