for(let i=1;i<=10;i++)
{
    console.log(i);
}
//while loop
let j=1;
while(j <= 10)
{
    console.log(j);
    j++
}
//do while loop
let k=1;
do{
    console.log(k);
    k++
}while(k<=10)
//new loops in ES6
//"for in" loop and "for of" loop
//these loops are used to retrieve data from iterables(arrays,strings,objects)
let p_names=["Samsung","Vivo","Oppo","Apple"];
for(let names of p_names){
    console.log(names);
}
let pnames=["Samsung","Vivo","Oppo","Apple"];
for(let names in p_names){
    console.log(p_names[names]);
}
let e_info = {
    e_id:1001,
    e_name:"soni",
    e_sal:10
}
for(let info in e_info){
    console.log(e_info[info]);
}
//how to retrieve from string
let col_name="Vignan";
for(let char in col_name){
    console.log(col_name[char]);
}
