let Page = require('./BaseSelenium')

Page.prototype.AcessoPrimeiraPagina = async function (cpf, nome) {

    let botaoInicial = await this.findById('btn-submit')
    let txtCPF = await this.findById('username')
    let txtSenha = await this.findById('password')

    await this.write(txtCPF, cpf)
    await this.write(txtSenha, nome)

    await botaoInicial.click()
}

let menuXpath = '//*[@id="j_idt12:lk_menu_consultas"]'

Page.prototype.AbriMenu = async function () {

    let menu = await this.findByXPath(menuXpath)
    await this.moveMouseTo(menu)

}

Page.prototype.AbriMenuResponsavel = async function () {
    let opcaoMenu = await this.findById('j_idt12:idMenuLinkAutorizado')
    await opcaoMenu.click()
}

Page.prototype.AbriMenuEmpresa = async function () {
    let opcaoMenu = await this.findById('j_idt12:idMenuLinkEmpresaCaged')
    await opcaoMenu.click()
}

Page.prototype.AbriMenuTrabalhador = async function () {
    let opcaoMenu = await this.findById('j_idt12:idMenuLinkTrabalhador')
    await opcaoMenu.click()
}

Page.prototype.AcessaConsultaResponsavel = async function () {
    let botaoConsultar = await this.findById('formPesquisarAutorizado:bt027_8')
    await botaoConsultar.click()
}

Page.prototype.AcessaConsultaEmpresa = async function () {
    let botaoConsultar = await this.findById('formPesquisarEmpresaCAGED:btConsultar')
    await botaoConsultar.click()
}

Page.prototype.AcessaConsultaTrabalhador = async function () {
    let botaoConsultar = await this.findById('formPesquisarTrabalhador:submitPesqTrab')
    await botaoConsultar.click()
}

Page.prototype.ConsultaDadosEmpresa = async function () {
    // coletando dados
    let raizCNPJ = (await this.getText(await this.findById('formResumoEmpresaCaged:txtCnpjRaiz'))).replace(".", "").replace(".", "")
    let razaoSocial = await this.getText(await this.findById('formResumoEmpresaCaged:txtRazaoSocial'))    
    let codAtividadeEconomica = await this.getText(await this.findById('formResumoEmpresaCaged:txtCodigoAtividadeEconomica'))
    let descricaoAtividadeEconomica = await this.getText(await this.findById('formResumoEmpresaCaged:txtDescricaoAtividadeEconomica'))
    let numeroFiliais = await this.getText(await this.findById('formResumoEmpresaCaged:txtNumFiliais'))
    let totalVinculos = await this.getText(await this.findById('formResumoEmpresaCaged:txtTotalVinculos'))
    let totalPrimeiroDia = await this.getText(await this.findById('formResumoEmpresaCaged:txtTotalNumPrimDia'))
    let totalAdmissoes = await this.getText(await this.findById('formResumoEmpresaCaged:txtTotalNumAdmissoes'))
    let totalDesligamentos = await this.getText(await this.findById('formResumoEmpresaCaged:txtTotalNumDesligamentos'))
    let totalUltimoDia = await this.getText(await this.findById('formResumoEmpresaCaged:txtTotalNumUltDia'))
    let totalVariacaoAbsoluta = await this.getText(await this.findById('formResumoEmpresaCaged:txtTotalVariacaoAbosulta'))   
    
    return {
        "Raiz CNPJ": raizCNPJ,
        "Razão Social": razaoSocial,
        "Codigo Atividade Economica": codAtividadeEconomica,
        "Descrição Atividade Economica": descricaoAtividadeEconomica,
        "Numero Filiais": numeroFiliais,
        "Total Vinculos": totalVinculos,
        "Total PrimeiroDia": totalPrimeiroDia,
        "Total Admissoes": totalAdmissoes,
        "Total Desligamentos": totalDesligamentos,
        "Total UltimoDia": totalUltimoDia,
        "Total VariacaoAbsoluta": totalVariacaoAbsoluta,
    }
}

Page.prototype.ConsultaDadosResponsavel = async function () {
        // coletando dados
        let cnpj = (await this.getText(await this.findById('txCnpj020_2'))).replace(".", "").replace(".", "").replace("/", "").replace("-", "")
        let razaoSocial = await this.getText(await this.findById('txtrazaosocial020_4'))
        let logradouro = await this.getText(await this.findById('txt3_logradouro020'))
        let bairro = await this.getText(await this.findById('txt4_bairro020'))
        let codMunicipio = await this.getText(await this.findById('txt5_codmunicipio020'))
        let nomeMunicipio = await this.getText(await this.findById('txt6_municipio020'))
        let uf = await this.getText(await this.findById('txt7_uf020'))
        let cep = (await this.getText(await this.findById('txt8_cep020'))).replace(".","").replace("-", "")
        let nome = await this.getText(await this.findById('txt_nome_contato'))
        let cpf = (await this.getText(await this.findById('txt_contato_cpf'))).replace(".", "").replace(".", "").replace("-", "")
        let ddd = (await this.getText(await this.findById('txt21_ddd020'))).replace("(", "").replace(")", "")   
        let telefone = (await this.getText(await this.findById('txt9_telefone020'))).replace("-", "")   
        let ramal = await this.getText(await this.findById('txt10_ramal020'))    
        let email = await this.getText(await this.findById('txt11_email'))
        
        return {
            "cnpj": cnpj,
            "razaoSocial": razaoSocial,
            "logradouro": logradouro,
            "bairro": bairro,
            "codMunicipio": codMunicipio,
            "nomeMunicipio": nomeMunicipio,
            "uf": uf,
            "cep": cep,
            "nome": nome,
            "cpf": cpf,
            "ddd": ddd,
            "telefone": telefone,
            "ramal": ramal,
            "email": email,
        }
}

Page.prototype.ConsultaDadosTrabalhador = async function () {

    // coletando dados
    let nome = await this.getText(await this.findById('txt2_Nome027'))
    let pis = await this.getText(await this.findById('txt1_Pis028'))    
    let cpf = (await this.getText(await this.findById('txt3_Cpf027'))).replace(".", "").replace(".", "").replace("-", "")
    let ctps = (await this.getText(await this.findById('txt5_Ctps027'))).replace("/", "")
    let situacaoPIS = await this.getText(await this.findById('txt4_SitPis027'))
    let codigoNacionalidade = await this.getText(await this.findById('txt7_CdNac027'))
    let nomeNacionalidade = await this.getText(await this.findById('txt8_Nac027'))
    let codInstrucao = await this.getText(await this.findById('txt11_CdInstr027'))
    let nomeInstrucao = await this.getText(await this.findById('txt12_Instr027'))
    let possuiDeficiencia = await this.getText(await this.findById('txt13_Def027'))
    let dataNascimento = await this.getText(await this.findById('txt4_datanasc027'))   
    let sexo = await this.getText(await this.findById('txt6_Sexo027'))  
    let codRaca = await this.getText(await this.findById('txt9_CdRaca027'))   
    let nomeRaca = await this.getText(await this.findById('txt10_Raca027'))   
    let cagedMeses = await this.getText(await this.findById('txt26_Caged027'))   
    let raisMeses = await this.getText(await this.findById('txt27_Rais027'))   
    
    return {
        "nome": nome,
        "pis": pis,
        "cpf": cpf,
        "ctps": ctps,
        "situacaoPIS": situacaoPIS,
        "codigoNacionalidade": codigoNacionalidade,
        "nomeNacionalidade": nomeNacionalidade,
        "codInstrucao": codInstrucao,
        "nomeInstrucao": nomeInstrucao,
        "possuiDeficiencia": possuiDeficiencia,
        "dataNascimento": dataNascimento,
        "sexo": sexo,
        "codRaca": codRaca,
        "nomeRaca": nomeRaca,
        "cagedMeses": cagedMeses,
        "raisMeses": raisMeses,
    }
}


module.exports = Page



