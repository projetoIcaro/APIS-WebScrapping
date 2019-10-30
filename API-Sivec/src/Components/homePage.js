let Page = require('./BaseSelenium')

Page.prototype.authSession = async function () {
    
  let txtUsername = await this.findById("username")
  let txtPassword = await this.findById("password")
  let btnSignIn = await this.findByXPath("/html/body/div/form/button")

  await this.write(txtUsername,"fiap")
  await this.write(txtPassword,"mpsp")
  
  await btnSignIn.click()
}



Page.prototype.PreencheDadosEEnviaTela = async function (user, pass) {

    let actualPage = this;
    let txtUser = await this.findById("nomeusuario")
    await txtUser.click()  
    await actualPage.write(txtUser, user) 
    let limpando = await actualPage.findByXPath("/html/body/form/div/div[1]/div/legend")   
    await limpando.click()
    let txtSenha = await actualPage.findById("senhausuario")
    await actualPage.write(txtSenha, pass) 
    let acessar = await actualPage.findById("Acessar")
    acessar.click()
}

Page.prototype.Busca = async function () {
    let pesquisa = await this.findByXPath("/html/body/nav/div[2]/ul/li[4]/a")
    await pesquisa.click() 
    let reu = await this.findById("1")
    await reu.click()   
    let porNome = await this.findByXPath("/html/body/nav/div[2]/ul/li[4]/ul/li[2]/ul/li[2]/a")
    await porNome.click()
    let txtNome = await this.findById("idNomePesq")
    await txtNome.click()
    let btnPesquisar = await this.findByName("procurar")
    await btnPesquisar.click()
    let acessaDados = await this.findByXPath("/html/body/form/div/div[3]/div/div/div[2]/table/tbody/tr[1]/td[1]/a")
    await acessaDados.click()
}

Page.prototype.ColetaDados = async function () {
  
    // Coleta Dados
    let DataNascimento = (await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[2]/table/tbody/tr[2]/td[2]/span')))
    let sexo = await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[2]/table/tbody/tr[1]/td[4]/span'))
    let tipoRG = await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[2]/table/tbody/tr[3]/td[5]/span'))
    let dataEmissaoRG = (await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[4]/table/tbody/tr[1]/td[2]/span')))
    let Alcunha = (await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[4]/table/tbody/tr[1]/td[5]/span')))
    let formulaFundamental = (await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[4]/table/tbody/tr[4]/td[5]/span')))
    let postoIdentificacao = (await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[4]/table/tbody/tr[3]/td[5]/span')))
    let estadoCivil = (await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[4]/table/tbody/tr[2]/td[2]/span')))
    let grauInstrucao = await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[4]/table/tbody/tr[4]/td[2]/span'))
    let profissao = await this.getText(await this.findByXPath('/html/body/form[1]/div/div[5]/div[4]/table/tbody/tr[7]/td[5]/span'))

    //Retorna no JSON
    return{
        "Data Nascimento": DataNascimento,
        "Sexo": sexo,
        "Tipo RG": tipoRG,
        "Data Emissao RG": dataEmissaoRG,
        Alcunha,
        "Formula Fundamental": formulaFundamental,
        "Posto Identificacao": postoIdentificacao,
        "Estado Civil": estadoCivil,
        "Grau Instrucao": grauInstrucao,
        "Profissao": profissao,
    }
}


//Page.prototype.ColetaDadosFinais = async function () {

  //  return await buildJsonResult(tituloEleitor, zonaEleitoral, dataDomicilio, codValidacao)
//}

//async function buildJsonResult(eleitor, zona, data, codigo){
    
//}

module.exports = Page



