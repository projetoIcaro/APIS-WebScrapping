const Page = require('../Components/homePage')

module.exports = {
    async GetData(req, res){
        let page
        let v = 1;
        try {
            if(!req.body.rg == "" && !req.body.nome == "" && !req.body.pis == ""){
                page = new Page()

                await page.visit('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/login.html')
                await page.PreencheDadosEEnviaTela('aaa', 'aaa')

                //await page.IniciaBuscaRG();
                //await page.IniciaBuscaNome();
                //await page.IniciaBuscaPis();
                
                // Ao acessar pagina seguinte, 2 popup na tela.
                await page.Busca();
                
                // let jsonResult = await page.ColetaDadosFinais()
                // return res.json(JSON.parse(jsonResult))
            }
    
            return res.json(JSON.parse(`{"Status":"Falhou", "error":"Nome/Rg/Pis vazios"}`))
        }catch(err){
            console.log(err)
            return res.json(JSON.parse(`{"Status":"Falhou", "error":${err}}`))
        }

    }
}
