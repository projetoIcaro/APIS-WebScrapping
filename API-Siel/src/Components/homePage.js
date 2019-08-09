let Page = require('./BaseSelenium')

let botaoInicialxpath = `/html/body/div[1]/div[1]/div[4]/form/table/tbody/tr[3]/td[2]/input`

Page.prototype.findBotaoInicial = async function () {

    let botaoInicial = await this.findByXPath(botaoInicialxpath)
    await botaoInicial.click()
}

let txtNomeXpath = `/html/body/div[1]/div[1]/div[4]/form[2]/fieldset[1]/table/tbody/tr[1]/td[2]/input`
,txtProcessoNumXpath = `//*[@id="num_processo"]`
,btnEnviarTelaXpath = `/html/body/div[1]/div[1]/div[4]/form[2]/table/tbody/tr/td[2]/input`

Page.prototype.PreencheDadosEEnviaTela2 = async function (Nome, cpf) {

    let btnEnviarTela2 = await this.findByXPath(btnEnviarTelaXpath)
    let txtProcessoNum = await this.findByXPath(txtProcessoNumXpath)
    let txtNome = await this.findByXPath(txtNomeXpath)

    await this.write(txtProcessoNum, cpf)
    await this.write(txtNome, Nome)    

    await btnEnviarTela2.click()   
}

let tituloEleitorXpath = `/html/body/div[1]/div[1]/div[4]/table/tbody/tr[3]/td[2]`
,zonaEleitoralXpath = `/html/body/div[1]/div[1]/div[4]/table/tbody/tr[5]/td[2]`
,dataDomicilioXpath = `/html/body/div[1]/div[1]/div[4]/table/tbody/tr[9]/td[2]`
,codValidacaoXpath = `/html/body/div[1]/div[1]/div[4]/table/tbody/tr[13]/td[2]`

Page.prototype.ColetaDadosFinais = async function () {

    let tituloEleitorElement = await this.findByXPath(tituloEleitorXpath)
    let zonaEleitoralElement = await this.findByXPath(zonaEleitoralXpath)
    let dataDomicilioElement = await this.findByXPath(dataDomicilioXpath)
    let codValidacaoElement = await this.findByXPath(codValidacaoXpath)

    let tituloEleitor = await this.getText(tituloEleitorElement)
    let zonaEleitoral = await this.getText(zonaEleitoralElement)
    let dataDomicilio = await this.getText(dataDomicilioElement)
    let codValidacao = await this.getText(codValidacaoElement)

    return await buildJsonResult(tituloEleitor, zonaEleitoral, dataDomicilio, codValidacao)
}

async function buildJsonResult(eleitor, zona, data, codigo){
    let string = `{"eleitor":"${eleitor}",`
    string += `"zona":"${zona}",`
    string += `"data":"${data}",`
    string += `"codigo":"${codigo}"}`
    return string
}

module.exports = Page



