// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': [2, 4], //缩进风格
    "camelcase": 2, //强制驼峰法命名
    "init-declarations": 0, //声明时必须赋初值
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-undef": 1, //不能有未定义的变量
    "no-redeclare": 2,//禁止重复声明变量
    "eqeqeq": [2, "allow-null"], // 使用 === 替代 ==
    "semi": [2, "never"] // 不使用分号
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
}
