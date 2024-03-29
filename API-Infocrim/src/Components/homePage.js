let Page = require('./BaseSelenium')

let botaoInicialxpath = `//*[@id="wrapper"]/tbody/tr[3]/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td[4]/a/img`
let segundoBotaoXpath = `/html/body/a/table[3]/tbody/tr/td[2]/table[1]/tbody/tr[3]/td/table/tbody/tr[2]/td/table/tbody/tr/td/div/a/img`
let primeiroAlvoXpath = `/html/body/table/tbody/tr[2]/td/table[3]/tbody/tr[2]/td[2]/a`

Page.prototype.AcessaTelaDeDados = async function () {
    let botaoInicial = await this.findByXPath(botaoInicialxpath)
    await botaoInicial.click()
    let segundaBotao = await this.findByXPath(segundoBotaoXpath)
    await segundaBotao.click()
    let primeiroAlvo = await this.findByXPath(primeiroAlvoXpath)
    await primeiroAlvo.click();
}

Page.prototype.authSession = async function () {
    
    let txtUsername = await this.findById("username")
    let txtPassword = await this.findById("password")
    let btnSignIn = await this.findByXPath("/html/body/div/form/button")
  
    await this.write(txtUsername,"fiap")
    await this.write(txtPassword,"mpsp")
    
    await btnSignIn.click()
  }

Page.prototype.coletaDados = async function () {

    // Coleta Dados
    let autor = (await this.getText(await this.findByXPath('/html/body/pre[2]/a')))
    let vitima = await this.getText(await this.findByXPath('/html/body/pre[6]/a'))
    let representante = await this.getText(await this.findByXPath('/html/body/pre[8]/a'))
    let resumoDados = (await this.getText(await this.findByXPath('/html/body/pre[1]')))
    
    //Retorna no JSON
    return{
        "Autor": autor,
        "Vitima": vitima,
        "Representante": representante,
        resumoDados
    }
}

module.exports = Page



