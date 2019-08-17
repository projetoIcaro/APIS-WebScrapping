const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.cpf == "" && !req.body.nome == ""){
                page = new Page()
                let cpf = req.body.cpf
                let nome = req.body.nome

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/infoseg/login.html')
                await page.findBotaoInicial(cpf, nome)

                /*let jsonResult*/
                /* return res.json(JSON.parse(jsonResult))*/
                return res.json(JSON.parse(`{"Status":"Teste", "Mensagem":"VAI CARALHO"}`))
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"CPF/Nome Vazio"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}
