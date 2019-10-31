let Page = require('./BaseSelenium')

Page.prototype.authSession = async function () {
    
    let txtUsername = await this.findById("username")
    let txtPassword = await this.findById("password")
    let btnSignIn = await this.findByXPath("/html/body/div/form/button")

    await this.write(txtUsername,"fiap")
    await this.write(txtPassword,"mpsp")
    
    await btnSignIn.click()
}

Page.prototype.acessaTelaComDados = async function (cpf) {
    let btnCallLogin = await this.findById('btnCallLogin')
    let btnAutenticar = await this.findById('btnAutenticar')
    
    // Coleta Dados
    btnCallLogin.click()
    btnAutenticar.click()
    let menu = await this.findByXPath('/html/body/header/nav/div/ul/li[1]/a')
    await this.moveMouseTo(menu)
    let menuSolicitacoes = await this.findByXPath('/html/body/header/nav/div/ul/li[1]/div/ul/li[3]/a')
    menuSolicitacoes.click()
    let Prosseguir1 = await this.findById('Prosseguir')
    Prosseguir1.click()
    /*
    let btn1 = await this.findByXPath('/html/body/section/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div/div[2]/div/input')
    btn1.click()
    
    let chkHabilitar = await this.findById('chkHabilitar')
    chkHabilitar.click()

    let Prosseguir2 = await this.findById('Prosseguir')
    Prosseguir2.click()

    let filterDocumento = await this.findById("filterDocumento")
    await this.write(filterDocumento, cpf)

    let btnPesquisar = await this.findById('btnPesquisar')
    btnPesquisar.click()
    
    let btnProsseguir = await this.findById('btnProsseguir')
    btnProsseguir.click()*/
}

Page.prototype.coletaDados = async function () {

    // Coleta Dados
    let link = 'http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/arisp/pagina10-visualizar-matriculas.htm'
    
    //Retorna no JSON
    return{
        "linkMatriculaPDF": link,
    }
}

module.exports = Page
