const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.cpf == "" && !req.body.nome == ""){
                page = new Page()            
                let cpf = req.body.cpf
                let nome = req.body.nome
                console.log(nome)

                await page.visit('www.google.com.br')
                await page.PesquisaFacebookByName(nome)
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"CPF/Nome Vazio"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}

function montaJsonFinal(jsonResponsavel, jsonEmpresa, jsonTrabalhador){
    return {
        "jsonResult": {
            "Responsavel": jsonResponsavel,
            "Empresa": jsonEmpresa,
            "Trabalhador": jsonTrabalhador,
        }
    }
}





