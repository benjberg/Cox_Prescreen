import React, { Component } from 'react'
import Button from './Button'
export default class TextArea extends Component {
    
    parseInput= () => {
        //grab our user input
    let userInput = document.querySelector(".prescreen-input").value.toString().toLowerCase();
    console.log('initialparse',userInput);
    userInput = userInput.replace(/ /g, '');
        
    let lines = userInput.split('\n');
    console.log('lines',lines)
    let obj = {};
        
        for (let i = 0; i < lines.length; ++i) {
     // split each string on the comma
     let keyValues = lines[i].split(',').toString().split(':');
   
     
     //do we have a key? if so add its value to established key, if not add new key
     if (obj.hasOwnProperty(keyValues[0])) {
       // get current key
       let value = obj[keyValues[0]];
 
       // add value to existing sum
       value += parseInt(keyValues[1]);
 
       // set this key's  value to new sum
       obj[keyValues[0]] = value;
     } else {
       //add new key/value to obj
       obj[keyValues[0]] = parseInt(keyValues[1]);
     }
   }
 
   let output = "";
   //logic for isPalidrome if true return a span colored red if not return span colored black  
   for ( let key in obj) {
     if (this.isPalindrome(key)) {
       output += '<p className="prescreen-palindrome"  id="outputs" style="color:red;">The total for <span>' + key + '</span> is <span>' + obj[key] + '</span>.</p>';
     } else {
       output += '<p className="prescreen-output" id="outputs">The total for <span>' + key + '</span> is <span>' + obj[key] + '</span>.</p>';
     }
   }
   
   document.querySelector(".output").innerHTML = output;
 
 
    }
     //checks if name input is palandrome 
    isPalindrome = (str)=> {
        // reg expression taking out unwanted chars 
        let re = /[\W_]/g;
        // cast input to lowercase applying regex
        let stringToLower = str.toLowerCase().replace(re, '');
        // reverse the string 
        let reversed = stringToLower.split('').reverse().join('');
        // compare reversed string to lowercase string 
        return reversed === stringToLower;
    }
    clicked = () =>{
        this.parseInput();
    }
    render() {
        return (
            <div>
                <textarea className="prescreen-input" rows='5' cols='8' defaultValue="John: 2
Jane: 3
John: 4
Jane: 5">


</textarea>
<p className='denote-text'>*Red output denotes palindrome</p>
<br></br>
<Button trigger={this.clicked}/>


<div className='output'>

</div>
            </div>
        )
    }
}
