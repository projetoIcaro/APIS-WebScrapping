const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page

        try {
            if(!req.body.cpf == "" && !req.body.nome == "" && !req.body.cnpj == ""){
                page = new Page()
                let cpf = req.body.cpf
                let nome = req.body.nome
                let cnpj = req.body.cnpj

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/cadesp/login.html')
                await page.ClicaBotaoPrimeiraPagina(cpf, nome)
                await page.ColocaMouseSobreMenu()
                await page.AcessaMenuCadastro()
                await page.FazPesquisaViaCNPJ(cnpj)

                return res.json(await page.ColetaDados())
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"CPF/Nome/CNPJ Vazio"}`))
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





