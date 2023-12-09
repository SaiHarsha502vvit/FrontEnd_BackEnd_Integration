import express from 'express'
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/page1',(req,res)=>{
    res.send('<h1>Hello this is Page 1<h1>');
})

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            Name:'Sai',
            Course:'Btech'
        },
        {
            id:2,
            Name:'Harsha',
            Course:'Bsc'
        },
        {
            id:3,
            Name:'Gopal',
            Course:'Bsc BIO-TECH'
        },
        {
            id:4,
            Name:'Kishore',
            Course:'BBA'
        }

    ];
    res.send(jokes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})