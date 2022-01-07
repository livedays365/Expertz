let arr=[]
console.log(arr,typeof arr);
let arr1=new Array()
console.log(arr1,typeof arr1);
let names = ["sun","moon","star"]
console.log(names);
console.table(names);
for(let name of names){
     console.log(name);
}
console.log(names[0]);
console.log("gjhgvgchgchgbchggg");
for(let index in names){
     console.log(index);
     console.log(names[index]);
}
names.push("earth")
console.log(names);
let d=names.pop()
console.log(names);
console.log(d);
names.unshift("jupiter")
console.log(names);
names.shift()
console.log(names);
let names_new=names.concat(["anju","aby","ram","raj"])
console.log(names_new);

names_new.splice(3,2)
console.log(names_new);
names_new.splice(3,1,"mars")
console.log(names_new);
////////////////////////
names_new[3]="arun"
names_new[2]="akhil"
console.log(names_new);
/////////////////////////
console.log(names_new.indexOf("moon"));  //to find index number of moon in (name_new)array
//////////////////////////
names_new.sort()  // sort the array in alphabetic order
console.log(names_new);
names_new.reverse()  //reverse the array
console.log(names_new); 
let myarray=["hai""hello"]      //join the array elements and convert like string



Neeraj n
rootheights123@gmail.com