const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page
        let v = 1;
        try {
            if(!req.body.nome == ""){
                page = new Page()

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/login')
                await page.authSession()

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/login.html')
                await page.PreencheDadosEEnviaTela('aaa', 'aaa')
                await page.Busca()
                let jsonResult = await page.ColetaDados()

                return res.json(jsonResult)
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"Nome vazios"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}
