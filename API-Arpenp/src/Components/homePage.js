let Page = require('./BaseSelenium')

let botaoCrcxpath = "/html/body/div[3]/div[2]/div[2]/div[2]/div/a/img";
let botaoMenuxpath = "/html/body/div[2]/div[1]/div/ul/li[2]/a";
let botaoBuscaxpath = "/html/body/div[2]/div[1]/div/ul/li[2]/ul/li[1]/a";
let botaoVaraClickxpath= "/html/body/div[2]/div[2]/div[2]/div/form/table/tbody/tr[3]/td[2]/select/option[2]";


Page.prototype.findBotaoCrc = async function () {

    let botaoCrc = await this.findByXPath(botaoCrcxpath)
    await botaoCrc.click()
}

Page.prototype.findBotaoMenu = async function () {

    let botaoMenu = await this.findByXPath(botaoMenuxpath)
    await botaoMenu.click()
}

Page.prototype.findBotaoBusca = async function () {

    let botaoBusca = await this.findByXPath(botaoBuscaxpath)
    await botaoBusca.click()
}

Page.prototype.findBotaoRegistro = async function () {

    let botaoRegistro = await this.findById("n")
    await botaoRegistro.click()
}

Page.prototype.findBotaoVara = async function () {

    let botaoRegistro = await this.findById("vara_juiz_id")
    await botaoRegistro.click()
}

Page.prototype.findBotaoVaraClick = async function () {

    let botaoVaraClick = await this.findByXPath(botaoVaraClickxpath)
    await botaoVaraClick.click()
}

Page.prototype.findBotaoProcesso = async function () {

    let botaoProcesso = await this.findByName("numero_processo")
    await botaoProcesso.click()
    await this.write(botaoProcesso,"kkkk facil de mais cachorro")
    let botaoPesquisa = await this.findByName("btn_pesquisar")
    await botaoPesquisa.click()
}

Page.prototype.ColetaDadosFinais = async function () {

    let cartorioRegistro = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[1]/tbody/tr[1]/td[2]/b"))
    let cns = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[1]/tbody/tr[2]/td[2]/b"))
    let uf = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[1]/tbody/tr[3]/td[2]/b"))
    let conjuge = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[2]/td[2]"))
    let conjuge2 = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[5]/td[2]"))
    let dataCasamento = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[6]/td[2]"))
    let matricula = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[8]/td[2]/b"))
    let dataEntrada = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[9]/td[2]/b"))
    let dataRegistro = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[10]/td[2]"))
    let acervo = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[11]/td[2]"))
    let numeroLivro = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[12]/td[2]"))
    let numeroFolha = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[12]/td[2]"))
    let numeroRegistro = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[14]/td[2]"))
    let tipoLivro = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[2]/tbody/tr[15]/td[2]/b"))

    return await buildJsonResult(cartorioRegistro,cns,uf,conjuge,conjuge2,dataCasamento,matricula,dataEntrada,dataRegistro,acervo,numeroLivro,numeroRegistro,numeroFolha,tipoLivro)
}

async function buildJsonResult(cartorioRegistro,cns,uf,conjuge,conjuge2,dataCasamento,matricula,dataEntrada,dataRegistro,acervo,numeroLivro,numeroRegistro,numeroFolha,tipoLivro){
    let string = `{
    "Cartorio de registro":"${cartorioRegistro}", 
    "CNS":"${cns}",
    "UF":"${uf}",
    "Nome conjugue 1:":"${conjuge}",
    "Nome conjugue 2":"${conjuge2}",
    "Data de casamento":"${dataCasamento}",
    "Matricula":"${matricula}",
    "Data de entrada":"${dataEntrada}",
    "Data de registro":"${dataRegistro}",
    "Acervo":"${acervo}",
    "Numero do livro":"${numeroLivro}",
    "Numero do registro":"${numeroRegistro}",
    "Numero folha":"${numeroFolha}",
    "Tipo do livro":"${tipoLivro}"
}`

    return string
}

module.exports = Page
