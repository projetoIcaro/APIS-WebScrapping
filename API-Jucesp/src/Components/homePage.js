let Page = require('./BaseSelenium')

Page.prototype.PreencheDadosEEnviaTela = async function (empresa) {

    let txtEmpresa = await this.findById("ctl00_cphContent_frmBuscaSimples_txtPalavraChave")
    await txtEmpresa.click()  
    await this.write(txtEmpresa, empresa) 
    let busca = await this.findByXPath("/html/body/div[4]/form/div[3]/div[4]/div[1]/div/div[1]/table/tbody/tr/td[2]/input")
    await busca.click()  

}

Page.prototype.PreencheCaptcha = async function (empresa) {

    let captcha = await this.findByName("ctl00$cphContent$gdvResultadoBusca$CaptchaControl1")
    await captcha.click()  
    await this.write(captcha,"mocka aqui que eu mocko la") 
    let busca = await this.findByXPath("/html/body/div[4]/div[3]/div[4]/div[2]/div/div/table/tbody/tr[2]/td/input")
    await busca.click()  

}

Page.prototype.selectFirst = async function (empresa) {

    let first = await this.findById("ctl00_cphContent_gdvResultadoBusca_gdvContent_ctl02_lbtSelecionar")
    await first.click()
}

Page.prototype.ColetaDadosFinais = async function () {

    let nome = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblEmpresa"))
    let tipo = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblDetalhes"))
    let matriz = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblNire"))
    let data = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblConstituicao"))
    let inicio = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblAtividade"))
    let cnpj = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblCnpj"))
    //let objeto = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblObjeto"))
    let capital = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblCapital"))
    let logradouro = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblLogradouro"))
    let numero = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblNumero"))
    let bairro = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblBairro"))
    let municipio = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblMunicipio"))
    let complemento = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblComplemento"))
    let cep = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblCep"))
    let uf = await this.getText(await this.findById("ctl00_cphContent_frmPreVisualiza_lblUf"))
    
    return await buildJsonResult(nome,tipo,matriz,data,inicio,cnpj,capital,logradouro,numero,
        bairro,municipio,complemento,cep,uf)
}

async function buildJsonResult(nome,tipo,matriz,data,inicio,cnpj,capital,logradouro,numero,
    bairro,municipio,complemento,cep,uf){
    
        let string =
    `{
    "Nome":"${nome}", 
    "Tipo de empresa":"${tipo}",
    "Nire Matriz":"${matriz}",
    "Data da constituicao:":"${data}",
    "Inicio de ativida":"${inicio}",
    "CNPJ":"${cnpj}",
    "Capital":"${capital}",
    "Logradouro":"${logradouro}",
    "Numero":"${numero}",
    "Bairro":"${bairro}",
    "Municipio":"${municipio}",
    "Complemento":"${complemento}",
    "CEP":"${cep}",
    "UF":"${uf}"
    }`
    return string
}

module.exports = Page
