let cities = ["faisalabad","lahore","karachi" ]
cities[2] = "sangla"
// proper method to enter city at the end can also add multiple cities
cities.push("islamabad")
// to enter city at the end
cities[cities.length] = "kashmir"
// for change the last city
cities[cities.length-1] = "azad kashmir"
// proper method to enter city at the start
cities.unshift("karachi","shakot")
// for removing last city 
// cities.pop()
// for removing first city
// cities.shift()
console.log(cities)
// copy of array to make changes write index between paranthesis to copy that index
// let copyOfcities = cities.slice(2,5)
// used to remove/add city write index in paranthesis  
// let copyOfcities = cities.slice()
// copyOfcities.splice(2,0, "hunza")
// console.log("copycities",copyOfcities)
document.getElementById("btn1").onclick = function(){
    alert("a simple alert method")
}
// document.getElementById("btn2").onclick = function(){
//     alert("Enter your name")
// }
document.getElementById("btn2").onclick = function(){
    let name = document.getElementById("input/text").value ;
    if(name === ""){
    // if (!name){
        alert("please type your name")
        return;
    }
    document.getElementById("output-section").innerHTML = name

}
document.getElementById('btn3').onclick = function (){
    document.getElementById("output-section").innerHTML = ''
    for(let index =0;index<cities.length;index++){
        let city = cities[index]
        document.getElementById("output-section").innerHTML += index+1 + ")" +city +"<br></br>"
    }
}
document.getElementById('btn4').onclick = function (){
    let city = document.getElementById("input/text").value
    if (!city){
        alert("enter city name")
        return
    }
    cities.push(city)
   document.getElementById('output-section').innerHTML = city+ " has been added to the list of cities"

}
document.getElementById("btn5").onclick = function (){
    let number = +document.getElementById("input/text").value
    if (!number){
        alert("Enter the number whose table you want to get")
        return
    }
    let last = +prompt("Enter the last digit of table")
    // console.log("value",number,last)
    for(let x=0;x<last+1;x++){
        let pro = number*x 
         document.getElementById('output-section').innerHTML += number +" * "+x +"=" + pro +"<br></br>"
       } 

}
document.getElementById("clear").onclick = function (){
    document.getElementById("output-section").innerHTML = ""
}



