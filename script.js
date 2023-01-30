//1)-->to compare two JSON
let a={name:"Person 1",age:5};
let b={age:5,name:"Person 1"};
var flag=true;
if(Object.keys(a).length==Object.keys(b).length){
    for(var key in a) { 
        if(a[key] == b[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
if(flag=true){
console.log("Both are Same");
}

// 2)--> to display flag
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function(){
    var data=request.response
    var flags= JSON.parse(data)
   for (let key of flags)
   {
    console.log("flag : "+key.flag);
   } 
}

// 3)--> to display country,region,subregion and population
var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all",true)
req.send()
req.onload=function(){
    var data=req.response
    var ans= JSON.parse(data)
   for (let key of ans)
   { 
     console.log(key.name.common+" , ",key.region+" , ",key.subregion+" , population is:",key.population);
   } 
}