let Page = require('./BaseSelenium')

Page.prototype.PesquisaFacebookByName = async function (nome) {

    let txtPequisa = await this.findByXPath('/html/body/div/div[4]/form/div[2]/div/div[1]/div/div[1]/div')    
    let btnPesquisa = await this.findByXPath('<input class="gNO89b" value="Pesquisa Google" aria-label="Pesquisa Google" name="btnK" type="submit" data-ved="0ahUKEwjW0tnip4nkAhU0IbkGHS8zBgMQ4dUDCAk">')

    await this.write(txtPequisa, nome)
    await btnPesquisa.click()
}

module.exports = Page



