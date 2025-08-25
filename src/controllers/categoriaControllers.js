class categoriaControllers {
    constructor(dataService) {
        this.dataService = dataService;
    }

    async listarCategorias(req, res) {
        try {
            const categorias = await this.dataService.lerCategorias();
            res.status(200).json(categorias);
        } catch (error) {
            console.error("Erro ao listar categorias:", error);
            res.status(500).json({ message: "Erro ao listar categorias" });
        }
    }

    async criarCategoria(req, res) {
        try {
            const novaCategoria = req.body;
            const categorias = await this.dataService.lerCategorias();
            categorias.push(novaCategoria);
            await this.dataService.escreveCategorias(categorias);
            res.status(201).json(novaCategoria);
        } catch (error) {
            console.error("Erro ao criar categoria:", error);
            res.status(500).json({ message: "Erro ao criar categoria" });
        }
    }
}