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
                let linkPrimeiroPDF = await page.coletaPrimeiroPDF()
                await page.AcessaMenuImagemCNH()
                let linkImagemCNH = await page.coletaImagemCNH()
                await page.AcessaMenuVeiculo()
                let linkVeiculo = await page.coletaPDFVeiculo()              

                let jsonFinal = {
                    linkPrimeiroPDF,
                    linkImagemCNH,
                    linkVeiculo
                }

                return res.json({jsonFinal})
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"CPF/Nome Vazio"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }
    }
}
