const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.user == "" && !req.body.pass == ""){
                page = new Page()
                let user = req.body.user
                let pass = req.body.pass

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/login.html')
                await page.PreencheDadosEEnviaTela(user, pass)
                await page.Busca();
                
                // let jsonResult = await page.ColetaDadosFinais()
                // return res.json(JSON.parse(jsonResult))
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"User/Pass vazios"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}
