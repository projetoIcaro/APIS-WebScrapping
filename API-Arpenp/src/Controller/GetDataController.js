const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            let v=1
            if(v==1){
                page = new Page()
                let numeroProcesso = req.body.numeroProcesso

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/arpensp/login.html')
                await page.findBotaoCrc()
                await page.findBotaoMenu()
                await page.findBotaoBusca()
                await page.findBotaoRegistro()
                await page.findBotaoVara()
                await page.findBotaoVaraClick()
                await page.findBotaoProcesso()

                page.quit();                
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
