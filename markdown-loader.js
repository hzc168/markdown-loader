const marked = require('marked')

module.exports = source => {
    const html = marked(source)
    // return `module.exports = ${JSON.stringify(html)}`
    // return `export default ${JSON.stringify(html)}`

    // 返回 html 字符串交给下一个 loader 处理
    return html
}