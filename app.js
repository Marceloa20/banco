import express from 'express'
const app = express()
const port = 3000
app.use(express.json())

app.get('/conta:/id', (req, res) => {

  res.json({
    conta_id: 1234,
    valor: 10.00
  })
})

app.post('/post', (req, res) => {
  const { conta_id, saldo } = req.body
  if(!conta_id || !saldo) {
    res.status(400).json({message: "Os campos conta e saldo são obrigatórios."})
  }

  res.status(201).json({
    conta_id: 1234,
    valor: 10.00
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
