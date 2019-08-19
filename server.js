const fatorial = require('./teste').fatorial;
const num = parseInt(process.argv[2]);
console.log(`O fatorial de ${num} é ${fatorial(num)}`);

/*
async function execute(){
    
    const {Client} = require('pg');
    const client = new Client({
        user: "postgres",
        password: "oitavo210290",
        host: "127.0.0.1",
        port: 5432,
        database: "postgres"
    })

    try {
        let produto = new Object();
        await client.connect();
        console.log("Conectado com sucesso");
        const results = await client.query("SELECT id, nome, Valor_da_venda, Descricao, quantidade, Prateleira, Categoria FROM produtos ORDER BY nome ASC;");
        //console.table(results.rows);
        for (let i = 0; i < results.rows.length; i++){
            console.log(results.rows[i].nome);
            console.log(results.rows[i].quantidade);
            console.log(results.rows[i].valor_da_venda);
            console.log(results.rows[i].prateleira);
            console.log(results.rows[i].descricao);
            console.log(results.rows[i].categoria);
        }
    } catch (error) {
        console.log(error);
    } finally{
        await client.end();
        console.log("Cliente desconectado");
        //montarTabela();
    }
}
*/