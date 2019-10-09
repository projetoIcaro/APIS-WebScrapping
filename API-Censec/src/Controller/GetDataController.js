const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.cpf == "" && !req.body.nome == ""){
                page = new Page()
                let cpf = req.body.cpf
                let nome = req.body.nome

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/censec/login.html')
                await page.AcessaPagina(cpf, nome)
                await page.AcessaMenuCep()
                await page.PreencheCPFeConsulta(cpf)
                await page.VizualizarDados()
                let jsonResult = await page.ColetarDados()
                
                page.quit();
                return res.json(jsonResult)
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





