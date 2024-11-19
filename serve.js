import express from "express"

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecates.com/millie/300/150",},

    { id: 2, descricao: "Paisagem deslumbrante", imagem: "https://picsum.photos/seed/picsum/300/200",},
    
    { id: 3, descricao: "Cachorro fofo", imagem: "https://placeimg.com/300/200/animals",},
];

const app = express()
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando....");
}); 

app.get("/posts",(rep, res) => {
    res.status(200).json(posts);
});

function buscarpostorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}
app.get("/posts/:id",(rep, res) => {
   const index = buscarpostorID(rep.params.id)
    res.status(200).json(posts[index]);
});