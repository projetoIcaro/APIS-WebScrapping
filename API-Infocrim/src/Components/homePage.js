let Page = require('./BaseSelenium')

let botaoInicialxpath = `//*[@id="wrapper"]/tbody/tr[3]/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td[4]/a/img`

Page.prototype.findBotaoInicial = async function () {

    let botaoInicial = await this.findByXPath(botaoInicialxpath)
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



