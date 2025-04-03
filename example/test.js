const docxPreview = require('../index.js')

const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, './example.docx')

const fileData = fs.readFileSync(file, {encoding: 'binary'})
docxPreview.parseAsync(fileData).then((res) => {
    console.log(res)
})