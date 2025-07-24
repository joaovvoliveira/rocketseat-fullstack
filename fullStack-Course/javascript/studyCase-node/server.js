import express from 'express'

const app = express()
app.use(express.json())

const users = [

]

app.post('/usuarios', (req,res) => {
  users.push(req.body)

  res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) => {
  res.status(200).json(users)
  //Alem de responder com o usuario, responde tambem com o status
})

app.listen(3000)

/* 
1) Tipo de rota / get,post,put,delet
2) Endereco / www.usuarios.com -> /usuarios

Pode se ter varias rotas com o mesmo endereco:
// app.post('/usuarios')
// app.put('/usuarios')
// app.delete('/usuarios')


  - Criar Usuario
  - Listar Usuarios
  - Editar um Usuarios
  - Deletar um Usuario

*/