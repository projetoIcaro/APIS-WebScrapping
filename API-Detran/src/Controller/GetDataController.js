const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.cpf == ""){
                page = new Page()
                let cpf = req.body.cpf

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/detran/login.html')
                await page.ClicaBotaoPrimeiraPagina(cpf)
                await page.AcessaMenuCondutor()
                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/detran/pagina6-relat%C3%B3rio-linha-de-vida.pdf')
                let teste = await page.coletarDadosPDF()                
                return res.json({})
                //return res.json(await page.ColetaDados())
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"CPF/Nome Vazio"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}
