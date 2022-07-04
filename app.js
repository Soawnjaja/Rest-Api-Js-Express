// пожкдключаем экспресс
const express = require('express')
// пожкдключаем модуль пути
const path = require('path')
const app = express()





// ----> Запросы должны отрабатывать посденими поэтому находятся в низу
 // статика нужна для того, что бы найти пути завязаные под html
app.use(express.static(path.resolve(__dirname, 'client')))
 // '*' смотрим за всеми гет запросами (аргументы запрос и разрешение)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(8080, () => console.log('Server has been started on port 3000...'))