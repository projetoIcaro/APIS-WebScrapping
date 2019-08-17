const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.cpf == "" && !req.body.nome == ""){
                page = new Page()
                let cpf = req.body.cpf
                let nome = req.body.nome

                // Seção Responsável
                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/caged/login.html')
                await page.AcessoPrimeiraPagina(cpf, nome)
                await page.AbriMenu()
                await page.AbriMenuResponsavel()
                await page.AcessaConsultaResponsavel()
                let jsonResponsavel = await page.ConsultaDadosResponsavel()             

                // Seção Empresa
                await page.AbriMenu()
                await page.AbriMenuEmpresa()
                await page.AcessaConsultaEmpresa()
                let jsonEmpresa = await page.ConsultaDadosEmpresa()

                // Seção Trabalhador
                await page.AbriMenu()
                await page.AbriMenuTrabalhador()
                await page.AcessaConsultaTrabalhador()
                let jsonTrabalhador = await page.ConsultaDadosTrabalhador()                
                let jsonResult = montaJsonFinal(jsonResponsavel, jsonEmpresa, jsonTrabalhador)

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




