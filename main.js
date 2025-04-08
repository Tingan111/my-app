const content=[]

fetch('http://localhost:4000/data')
.then(res=>res.json())
.then(data=>{
    console.log('API內容',data);
    content.push(data.message);
    console.log('content內容',content);
    const div=document.querySelector("#get")
div.innerHTML=data.message;
})
.catch(err=>console.error("錯誤",err));


