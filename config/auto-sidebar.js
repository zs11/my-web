// sidebar自动化生成
const path = require('path')
const fs = require('fs')

// 需要自动化生成sidebar的入口
const SIDEBAR_ENTRY = [
  {
    name: '/notes/',
    path: 'notes'
  }
];

function autoSideBar() {
  let sidebar = {};
  for(let sec of SIDEBAR_ENTRY) {
    const sidebar_path = path.resolve(process.cwd(), sec.path);
    const res = [];
    sidebar[sec.name] = scan(sidebar_path, res);
  }
}

function scan(path, res = []) {
  const folders = fs.readdirSync(path);
  console.log(folders);
}

autoSideBar()