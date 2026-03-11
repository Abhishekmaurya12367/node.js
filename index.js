const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {// the get methode help in providing the router so that we can route the code from the backend to the fronted;
  res.send('Hello World!')
})
app.get('\twitter',(req,res) => {
  res.send('abhishek code')
})
app.get('/login',(req,res)=>{
    res.send('please abhishek maurya login the page')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

