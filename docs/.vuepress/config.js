const plugins = require('./config/plugins.js');
const base = require('../../base.js');
const themeConfig = require('./config/themeConfig.js');



module.exports = {
  theme: 'vdoing', //  使用npm包主题
   // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  port: 8080,//端口

  plugins,
  themeConfig,
  base,  //引入后缀

  title: "山猫的笔记",
  description: '这里会记录山猫的笔记!', // 描述,以 <meta> 标签渲染到页面html中

  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'keywords', content: '山猫' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],
  markdown: {
    lineNumbers: true, // 代码行号
	extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  },
}