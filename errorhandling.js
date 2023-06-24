console.log("person1:show ticket");
console.log("person2:show ticket");
const moviez=async ()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>reject('ticket'))
    })
    let ticket;
    try{
        ticket=await promise;
    }catch(err){
        ticket='sad face';
    }
    return ticket;
}
moviez().then((msg)=>console.log(`person3:show ${msg}`))