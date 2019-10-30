let Page = require('./BaseSelenium')

Page.prototype.authSession = async function () {
    
    let txtUsername = await this.findById("username")
    let txtPassword = await this.findById("password")
    let btnSignIn = await this.findByXPath("/html/body/div/form/button")

    await this.write(txtUsername,"fiap")
    await this.write(txtPassword,"mpsp")
    
    await btnSignIn.click()
}

Page.prototype.findBotaoCrc = async function () {
    let botaoCrc = await this.findByXPath(botaoCrcxpath)
    await botaoCrc.click()
}

Page.prototype.findBotaoCrc = async function () {
    let botaoCrc = await this.findByXPath(botaoCrcxpath)
    await botaoCrc.click()
}

Page.prototype.ColetaDadosFinais = async function () {

    let cartorioRegistro = await this.getText(await this.findByXPath("/html/body/div[2]/div[2]/div[2]/div/form/table[1]/tbody/tr[1]/td[2]/b"))

    return await buildJsonResult(cartorioRegistro,cns,uf,conjuge,conjuge2,dataCasamento,matricula,dataEntrada,dataRegistro,acervo,numeroLivro,numeroRegistro,numeroFolha,tipoLivro)
}

async function buildJsonResult(cartorioRegistro,cns,uf,conjuge,conjuge2,dataCasamento,matricula,dataEntrada,dataRegistro,acervo,numeroLivro,numeroRegistro,numeroFolha,tipoLivro){
    let string = `{
    "Cartorio de registro":"${cartorioRegistro}", 
    "CNS":"${cns}",
}`

    return string
}

module.exports = Page
