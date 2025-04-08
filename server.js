const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());

app.get('/data',(req,res)=>{
    res.json({message:'Hello from the API server!'});
});

const PORT= 4000;
app.listen(PORT,()=>{
    console.log(`API server running on http://localhost:${PORT}`);
})

