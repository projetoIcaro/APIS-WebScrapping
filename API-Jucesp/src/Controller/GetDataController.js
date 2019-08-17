const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.empresa == ""){
                page = new Page()
                let empresa = req.body.empresa

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/jucesp/index.html')
                await page.PreencheDadosEEnviaTela(empresa)
                await page.PreencheCaptcha()
                await page.selectFirst()
                let jsonResult = await page.ColetaDadosFinais()
                return res.json(JSON.parse(jsonResult))
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"Dados de busca invalidos"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}
