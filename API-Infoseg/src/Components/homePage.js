let Page = require('./BaseSelenium')

Page.prototype.findBotaoInicial = async function (cpf, nome) {

    let botaoInicial = await this.findById('formLogin:btnEntrar')
    let txtCPF = await this.findById('formLogin:identificacao')
    let txtSenha = await this.findById('formLogin:senha')

    await this.write(txtCPF, cpf)
    await this.write(txtSenha, nome)

    await botaoInicial.click()
}

async function buildJsonResult(eleitor, zona, data, codigo){
    let string = `{"eleitor":"${eleitor}",`
    string += `"zona":"${zona}",`
    string += `"data":"${data}",`
    string += `"codigo":"${codigo}"}`
    return string
}

module.exports = Page



