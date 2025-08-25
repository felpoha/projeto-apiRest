const fs = require('fs').promises;
const path = require('path');
class DataServico {
constructor() {
    this.dataPath = path.join(__dirname, '../data*.json');
}
/** 
@returns {Promise<Array>} - Retorna uma promessa que resolve com os dados lidos do arquivo JSON.
*/
async lerCategorias() {
    try{
        const arquivoPayload = await fs.readFile(this.dataPath, "utf-8");
        return JSON.parse(arquivoPayload);
    } catch (error) {
        console.error("Houve um erro ao tentar persistir os dados na categoria.", error);
        return[];
    }
}
async escreveCategorias(categorias) {
    try{
        const arquivoPayload = JSON.stringify(categorias, null, 2);
        await fs.writeFile(this.dataPath, arquivoPayload, "utf-8");
    }
    catch (error) {
        console.error("Houve um erro ao tentar persistir os dados na categoria.", error);
        return false;
}
}
}