# docx-preview-node
The Node.js version of the docx-preview

docx-preview path: github.com/zVolodymyr/docxjs

Can read .docx files and convert them to HTML.
# Installation
`npm install docx-preview-node`

# Usage
```javascript
const docxPreview = require('docx-preview-node')

const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, './example.docx')

const fileData = fs.readFileSync(file, {encoding: 'binary'})
docxPreview.parseAsync(fileData).then((res) => {
    console.log(res)
})
```

# API

```javascript
// this API could be used to modify document before rendering

// parse document and return internal document object
parseAsync(
    document: Blob | ArrayBuffer | Uint8Array,
    options: {
        className: string = "docx", //class name/prefix for default and document style classes
        inWrapper: boolean = true, //enables rendering of wrapper around document content
        hideWrapperOnPrint: boolean = false, //disable wrapper styles on print
        ignoreWidth: boolean = false, //disables rendering width of page
        ignoreHeight: boolean = false, //disables rendering height of page
        ignoreFonts: boolean = false, //disables fonts rendering
        breakPages: boolean = true, //enables page breaking on page breaks
        ignoreLastRenderedPageBreak: boolean = true, //disables page breaking on lastRenderedPageBreak elements
        experimental: boolean = false, //enables experimental features (tab stops calculation)
        trimXmlDeclaration: boolean = true, //if true, xml declaration will be removed from xml documents before parsing
        useBase64URL: boolean = false, //if true, images, fonts, etc. will be converted to base 64 URL, otherwise URL.createObjectURL is used
        renderChanges: false, //enables experimental rendering of document changes (inserions/deletions)
        renderHeaders: true, //enables headers rendering
        renderFooters: true, //enables footers rendering
        renderFootnotes: true, //enables footnotes rendering
        renderEndnotes: true, //enables endnotes rendering
        renderComments: false, //enables experimental comments rendering
        renderAltChunks: true, //enables altChunks (html parts) rendering
        debug: boolean = false, //enables additional logging
    }
): Promise<WordDocument>
```
