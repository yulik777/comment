import React from 'react';
import './App.css';

function App() {
  
  return (

    let output = document.getElementById('output_image');

    function send() {
        let a = document.getElementById('name').value;
        //document.getElementById('feedback_name').innerHTML = a;
        let b = document.getElementById('txt').value;
        let now = new Date().toLocaleDateString();
        // document.getElementById('time').innerHTML = now;


        str = b.replace(/viagra/gi, '***').replace("XXX", '***');
        let div = document.createElement('div'); //создаем элемент див
        div.className = "text";
        div.innerHTML = `${output}  ${a} пишет ${str} ${now}`;
        document.getElementById('feedback_txt').append(div);

        localStorage.setItem('name', document.getElementById('name').value);
        //console.log(localStorage.getItem('name'));
        localStorage.setItem('txt', document.getElementById('txt').value);
        console.log(localStorage.getItem('txt'));
    }

   
    document.addEventListener("DOMContentLoaded", function (event) {
        let name = localStorage.getItem('name'); //проверяем вводилось ли имя на єтой странице
        if (name != null) {
            document.getElementById("name").value = name;
        }
    });

    function checkMessage() {
        let author = document.getElementById('name').value;
        let comment = document.getElementById('txt').value;

        if (localStorage.getItem('name') == null) {
            localStorage.setItem('name', author);
        }
    }
  );
}

export default App;
