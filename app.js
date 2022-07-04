// пожкдключаем экспресс
const express = require('express')
// пожкдключаем модуль пути
const path = require('path')
const app = express()


const CONTACTS = [
  {id: 1, name: "NewName", value: "7-908-038-55-22", marked: false}
]
// GET
app.get('/api/contacts', (req,res) => {
  res.status(200).json(CONTACTS)
})

// ----> Запросы должны отрабатывать посденими поэтому находятся в низу
 // статика нужна для того, что бы найти пути завязаные под html
app.use(express.static(path.resolve(__dirname, 'client')))
 // '*' смотрим за всеми гет запросами (аргументы запрос и разрешение)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(8080, () => console.log('Server has been started on port 3000...'))