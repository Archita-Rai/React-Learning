function getTicket(n){
   let arr = new Array(n);
   for(let i = 0;i<n;i++){
      arr[i] = Math.floor(Math.random()*10);
   }
   return arr
}

function getSum(arr){
    return arr.reduce((sum,val)=>sum + val,0);
}

export {getTicket, getSum};