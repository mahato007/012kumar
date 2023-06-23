
function createPost(){
    return new Promise(()=>{

    })
}
const users={
   
        username:'raj',
        lastactivitytime:'13th jan'
    
}

function updatelastactivitytime() {
    return new Promise((resolve,reject) =>{
       setTimeout(()=>{
        users.lastactivitytime=new Date().getTime();
        resolve(users.lastactivitytime);
       },1000)
    });
};

  function userupdateactivity(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}),updatelastactivitytime()]).then([createPostresolve,updataresolve])
    .catch((err)=>{
        console.log(err);
    })
  }