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


Page.prototype.coletaPrimeiroPDF = async function () {
    let xpathPesquisar = '/html/body/div[4]/div/table/tbody/tr/td/div/div/form/div[1]/div[2]/table[3]/tbody/tr/td/a'
    let elemPesquisar = await this.findByXPath(xpathPesquisar)
    let linkPDF = "";
    await elemPesquisar.getAttribute("href").then((result) => {
        linkPDF = result
    })

    return linkPDF;
}

Page.prototype.coletaImagemCNH = async function () {
    let xpathPesquisar = '/html/body/div[4]/div/table/tbody/tr/td/div/div/form/div[1]/div[2]/table[3]/tbody/tr/td/a'
    let elemPesquisar = await this.findByXPath(xpathPesquisar)
    let linkPDF = "";
    await elemPesquisar.getAttribute("href").then((result) => {
        linkPDF = result
    })

    return linkPDF;
}

Page.prototype.coletaPDFVeiculo = async function () {
    let xpathPesquisar = '/html/body/div[4]/div/table/tbody/tr/td/div/div/form/div[1]/div[2]/table[3]/tbody/tr/td/a'
    let elemPesquisar = await this.findByXPath(xpathPesquisar)
    let linkPDF = "";


    await elemPesquisar.getAttribute("href").then((result) => {
        linkPDF = result
    })

    return linkPDF;
}



Page.prototype.AcessaMenuCondutor = async function () {
    await this.moveMouseTo((await this.findById('navigation_a_M_16')))
    await ((await this.findById('navigation_a_F_16'))).click()    
}

Page.prototype.AcessaMenuImagemCNH = async function () {
    await this.moveMouseTo((await this.findById('navigation_a_M_16')))
    await ((await this.findByXPath('/html/body/div[3]/div/table/tbody/tr/td[2]/nav/ul/li[2]/ul/li[2]/a'))).click()
}

Page.prototype.AcessaMenuVeiculo = async function () {
    await this.moveMouseTo((await this.findById('navigation_a_M_18')))
    await ((await this.findById('navigation_a_F_18'))).click()
}



module.exports = Page



