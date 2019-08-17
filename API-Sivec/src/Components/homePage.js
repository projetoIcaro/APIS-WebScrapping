let Page = require('./BaseSelenium')


Page.prototype.PreencheDadosEEnviaTela = async function (user, pass) {

    let txtUser = await this.findById("nomeusuario")
    await txtUser.click()  
    await this.write(txtUser, user) 
    let limpando = await this.findByXPath("/html/body/form/div/div[1]/div/legend")   
    await limpando.click()
    let txtSenha = await this.findById("senhausuario")
    await this.write(txtSenha, pass) 
    let acessar = await this.findById("Acessar")
    await acessar.click()
}

Page.prototype.Busca = async function () {

    let pesquisa = await this.findByXPath("/html/body/nav/div[2]/ul/li[4]/a")
    await pesquisa.click() 
    let reu = await this.findById("1")
    await reu.click()   
}


//Page.prototype.ColetaDadosFinais = async function () {

  //  return await buildJsonResult(tituloEleitor, zonaEleitoral, dataDomicilio, codValidacao)
//}

//async function buildJsonResult(eleitor, zona, data, codigo){
    
//}

module.exports = Page



