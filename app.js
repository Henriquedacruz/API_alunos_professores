const express = require('express');
var cors = require('cors');
const app = express();
const uploadUser = require('./middlewares/uploadImage');
const Image = require('./models/Images');

app.use('/files', express.static(path.resolve(__dirname,"public", "upload")));

app.post("/upload-image", uploadUser.single('image'), async (req, res) => {

    if (req.file) {
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
    });



});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});