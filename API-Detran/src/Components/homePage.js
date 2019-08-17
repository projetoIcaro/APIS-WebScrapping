let Page = require('./BaseSelenium')
let fs = require('fs')
let PDFParser = require("pdf2json")

Page.prototype.ClicaBotaoPrimeiraPagina = async function (cpf) {

    let botaoInicial = await this.findById('form:j_id563205015_44efc15b')
    let txtCPF = await this.findById('form:j_id563205015_44efc1ab')
    let txtSenha = await this.findById('form:j_id563205015_44efc191')

    await this.write(txtCPF, cpf)
    await this.write(txtSenha, cpf)

    await botaoInicial.click()
}


Page.prototype.AcessaMenuCondutor = async function () {
    await this.moveMouseTo((await this.findById('navigation_a_M_16')))
    await ((await this.findById('navigation_a_F_16'))).click()    
}

Page.prototype.coletarDadosPDF = async function () {
    let pdfParser = new PDFParser(this, 1)
    
    pdfParser.on("pdfParser_dataError", errData => console.error(`errData: ${errData.parserError}`))
    pdfParser.on("pdfParser_dataReady", pdfdata => {
        console.log('pdfdata')
        console.log(pdfdata)
        return pdfdata
    })

    pdfParser.loadPDF('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/detran/pagina6-relat%C3%B3rio-linha-de-vida.pdf');    
}



module.exports = Page



