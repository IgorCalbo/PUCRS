const fs = require('fs')

fs.readFile(
    'a_textoQualquer.txt',
    (err, buf) => {
        if(err)
            console.log("houve um erro")
        else 
            console.log(buf.toString())
    }
)