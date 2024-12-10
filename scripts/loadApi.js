import generateApi from './generateApi/index.js'

const tokens = [
    '5c4011cefa9121eb9c923daa0fb7c8ba8c3d411820141cc6084bd92187ea72e9',
    '218b65be237b2b8d3ca554263fda2ac99042058002798c602c291379e49a490b',
    '89bdfd73ec62009674ea280ffdaae00b4621162f95eae1892275852c45a78521'
]

tokens.forEach(token =>
    generateApi({
        dirPath: 'src/api',
        serverUrl: 'http://192.168.2.9:3000/',
        token
    })
)
