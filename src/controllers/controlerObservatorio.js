import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import Image from '../models.js/observatorio.js';
import dirmulter from '../config/multer.js';
import cors from 'cors';

const route = express.Router();

//não pode usar  dirname dentro de um ES module, então precisamos replicar sua funionalidade dessa maneira:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

route.use('/files', express.static(path.resolve(__dirname,"../","public", "upload", )));


route.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    route.use(cors());
    next();
});


route.get("/", async (req, res) => {
    await Image.findAll()
    .then((images) => {
        return res.json({
            erro: false,
            images,
            url: "http://localhost:8080/files/observatorio/"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhuma imagem encontrada!"
        });
    });
});

route.post("/", dirmulter.single('image'), async (req, res) => {

    if (req.file) {
        //console.log(req.file);

        await Image.create({image: req.file.filename})
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Upload realizado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Upload não realizado com sucesso!"
            });
        });
        
    }else{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
        });
    }

});

export default route;