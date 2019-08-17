let Page = require('./BaseSelenium')

Page.prototype.AcessaPagina = async function (cpf, nome) {

    let botaoInicial = await this.findById('EntrarButton')
    let txtCPF = await this.findById('LoginTextBox')
    let txtSenha = await this.findById('SenhaTextBox')

    await this.write(txtCPF, cpf)
    await this.write(txtSenha, nome)

    await botaoInicial.click()
}

Page.prototype.AcessaMenuCep = async function () {

    await this.moveMouseTo(this.findById('menucentrais'))
    await this.moveMouseTo(this.findById('ctl00_CESDILi'))    
    let botaoMenu = await this.findById('ctl00_CESDIConsultaAtoHyperLink')
    await botaoMenu.click()
}

Page.prototype.PreencheCPFeConsulta = async function (cpf) {

    await this.write(await this.findById('ctl00_ContentPlaceHolder1_DocumentoTextBox'), cpf)
    let botaoMenu = await this.findById('ctl00_ContentPlaceHolder1_BuscarButton')
    await botaoMenu.click()

}

let checkboxXpath = '//*[@id="ctl00_ContentPlaceHolder1_ResultadoBuscaGeralPanel"]/div[2]/div[1]/div/table/tbody/tr[2]/td[1]/input'

Page.prototype.VizualizarDados = async function () {
    await (await this.findByXPath(checkboxXpath)).click()
    await (await this.findById('ctl00_ContentPlaceHolder1_VisualizarButton')).click()
}

let diaAtoXpath = '//*[@id="ctl00_ContentPlaceHolder1_DiaAtoTextBox"]'


Page.prototype.ColetarDados = async function () {
    
        // Coleta Dados
        let codigoCarga = await (await this.findById('ctl00_ContentPlaceHolder1_CodigoTextBox')).getAttribute("value")
        let mesReferencia = (await this.getText(await this.findById('ctl00_ContentPlaceHolder1_MesReferenciaDropDownList'))).replace(" ", "")
        let anoReferencia = (await this.getText(await this.findById('ctl00_ContentPlaceHolder1_AnoReferenciaDropDownList'))).replace(" ", "")
        let atoReferencia = (await this.getText(await this.findById('ctl00_ContentPlaceHolder1_TipoAtoDropDownList'))).replace(" ", "").replace(" ", "").replace("\n", "").replace(" ", "")
        let diaReferencia = await (await this.findById('ctl00_ContentPlaceHolder1_DiaAtoTextBox')).getAttribute("value")
        let livroReferencia = await (await this.findById('ctl00_ContentPlaceHolder1_LivroTextBox')).getAttribute("value")
        let folhaReferencia = await (await this.findById('ctl00_ContentPlaceHolder1_FolhaTextBox')).getAttribute("value")
        
        /* Coleta partes dinamicamente */
        let nextTR = true
        let count = 0
        var listaPartes = []
        while(nextTR == true){
            let nomeParte = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[6]/div[1]/div/div/table/tbody/tr[${count+1}]/td[2]`))).replace(" ", "")
            let cpfParte = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[6]/div[1]/div/div/table/tbody/tr[${count+1}]/td[3]`))).replace(" ", "")
            let qualidadeParte = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[6]/div[1]/div/div/table/tbody/tr[${count+1}]/td[4]`))).replace(" ", "")
            listaPartes[count] = {"nomeParte":nomeParte,"cpfParte": cpfParte, "qualidadeParte":qualidadeParte}
            count++
            nextTR = await this.elementExistsByXpath(`/html/body/form/div[5]/div/div[3]/div[2]/div[6]/div[1]/div/div/table/tbody/tr[${count+1}]/td[2]`)
        }

        let ufCartorio = await (await this.findById('ctl00_ContentPlaceHolder1_DadosCartorio_CartorioUFTextBox')).getAttribute("value")
        let municipioCartorio = await (await this.findById('ctl00_ContentPlaceHolder1_DadosCartorio_CartorioMunicipioTextBox')).getAttribute("value")
        let nomeCartorio = await (await this.findById('ctl00_ContentPlaceHolder1_DadosCartorio_CartorioNomeTextBox')).getAttribute("value")

        /* Coleta Contatos Dinamicamente */
        let nextTRcontato = true
        let countContato = 0
        var listaContatos = []
        while(nextTRcontato == true){
            let telefoneContato = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[7]/div[2]/div[2]/div/table/tbody/tr[${countContato+1}]/td[1]`))).replace(" ", "")
            let tipoContato = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[7]/div[2]/div[2]/div/table/tbody/tr[${countContato+1}]/td[2]`))).replace(" ", "")
            let ramalContato = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[7]/div[2]/div[2]/div/table/tbody/tr[${countContato+1}]/td[3]`))).replace(" ", "")
            let origemContato = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[7]/div[2]/div[2]/div/table/tbody/tr[${countContato+1}]/td[4]`))).replace(" ", "")
            let statusContato = (await this.getText(await this.findByXPath(`/html/body/form/div[5]/div/div[3]/div[2]/div[7]/div[2]/div[2]/div/table/tbody/tr[${countContato+1}]/td[5]`))).replace(" ", "")
            listaContatos[countContato] = {"telefoneContato":telefoneContato,"tipoContato": tipoContato, "ramalContato":ramalContato, "origemContato":origemContato, "statusContato":statusContato}
            countContato++
            nextTRcontato = await this.elementExistsByXpath(`/html/body/form/div[5]/div/div[3]/div[2]/div[7]/div[2]/div[2]/div/table/tbody/tr[${countContato+1}]/td[5]`)
        }        
        
        // Monta JSON
        return {
            "codigoCarga": codigoCarga,
            "mesReferencia": mesReferencia,
            "anoReferencia": anoReferencia,
            "atoReferencia": atoReferencia,
            "diaReferencia": diaReferencia,
            "livroReferencia": livroReferencia,
            "folhaReferencia": folhaReferencia,
            "partes": listaPartes,
            "ufCartorio": ufCartorio,
            "municipioCartorio": municipioCartorio,
            "nomeCartorio": nomeCartorio,
            "contatos": listaContatos,
        }
}

module.exports = Page



