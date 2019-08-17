let Page = require('./BaseSelenium')

Page.prototype.ClicaBotaoPrimeiraPagina = async function (cpf, nome) {

    let botaoInicial = await this.findById('ctl00_conteudoPaginaPlaceHolder_loginControl_loginButton')
    let txtCPF = await this.findById('ctl00_conteudoPaginaPlaceHolder_loginControl_UserName')
    let txtSenha = await this.findById('ctl00_conteudoPaginaPlaceHolder_loginControl_Password')

    await this.write(txtCPF, cpf)
    await this.write(txtSenha, nome)

    await botaoInicial.click()
}


Page.prototype.ColocaMouseSobreMenu = async function () {
    await this.moveMouseTo(await this.findByXPath('/html/body/form/div[4]/table/tbody/tr/td[3]/table/tbody/tr/td'))
}

Page.prototype.AcessaMenuCadastro = async function () {
    let botaoMenuCadastro = await this.findByXPath('/html/body/form/div[4]/div/table/tbody/tr[1]/td/table/tbody/tr/td/a')
    await botaoMenuCadastro.click()
}

Page.prototype.FazPesquisaViaCNPJ = async function (cnpj) {
    await (await this.findById('ctl00_conteudoPaginaPlaceHolder_tcConsultaCompleta_TabPanel1_lstIdentificacao')).click()
    await (await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/div[1]/div[2]/div/table/tbody/tr/td[2]/table/tbody/tr[2]/td[2]/table/tbody/tr[2]/td[2]/select/option[3]')).click()
    this.write(await this.findById('ctl00_conteudoPaginaPlaceHolder_tcConsultaCompleta_TabPanel1_txtIdentificacao'), cnpj)
    await (await this.findById('ctl00_conteudoPaginaPlaceHolder_tcConsultaCompleta_TabPanel1_btnConsultarEstabelecimento')).click()
}

Page.prototype.ColetaDados = async function () {

    // Coleta Dados
    let codigoIE = (await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table[1]/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]'))).replace(".", "").replace(".", "").replace(".", "")
    let nomeEmpresarial = await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table[1]/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[4]/td[2]'))
    let drt = await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table[1]/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[5]/td[2]'))
    let situacao = (await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table[1]/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[2]/td[3]'))).replace("Situação:  ", "")
    let dataInscricao = (await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table[1]/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[3]/td[3]'))).replace("Data da Inscrição no Estado:  ", "")
    let regimeEstadual = (await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table[1]/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[4]/td[3]'))).replace("Regime Estadual:  ", "")
    let postoFiscal = (await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table[1]/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[5]/td[3]'))).replace("Posto Fiscal:  ", "")
    let nire = (await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/div/table[2]/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[5]/td[2]'))).replace(".", "").replace(".", "").replace("-", "")
    let tipoUnidade = await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/div/table[2]/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[10]/td[2]'))
    let formaAtuacao = await this.getText(await this.findByXPath('/html/body/form/table[3]/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td/div/table[2]/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[10]/td[4]/table/tbody/tr/td/table/tbody/tr/td'))

    //Retorna no JSON
    return{
        "codigoIE": codigoIE,
        "nomeEmpresarial": nomeEmpresarial,
        "drt": drt,
        "situacao": situacao,
        "dataInscricao": dataInscricao,
        "regimeEstadual": regimeEstadual,
        "postoFiscal": postoFiscal,
        "nire": nire,
        "tipoUnidade": tipoUnidade,
        "formaAtuacao": formaAtuacao,
    }
}

module.exports = Page



