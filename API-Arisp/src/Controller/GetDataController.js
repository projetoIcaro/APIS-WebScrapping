const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(req.body.cpf != ""){                
                page = new Page()

                // Tela de Login
                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/login')
                // 
                await page.authSession()
                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/arpensp/login.html')
                
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"CPF Vazio"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}
