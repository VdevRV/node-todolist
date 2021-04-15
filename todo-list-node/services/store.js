let data=[
    "alarm",
"breakfast",
"go to work"
]


function getdata(){
 return data ;  
}

function adddata(work){
    data.push(work) 
}

function updatedata(work,updatedwork){

    let index = data.findIndex(rank => rank === work);
    data[index]=updatedwork;

}

function deletedata(work){

    //const result = words.filter(word => word.length > 6);

    var result=data.filter(values=>values!=work)
    data=result;
}



module.exports = {
    getdata:getdata,
    adddata:adddata,
    deletedata:deletedata,
    updatedata:updatedata
}