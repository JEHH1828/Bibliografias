import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const lista = document.querySelector <HTMLDivElement>('#lista')
const cabeza = document.querySelector <HTMLDivElement>('#cabeza')

ReactDOM.createRoot(document.getElementById('barra')!).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);



interface Task{
  title: string,
  text: string,
  url:string,
}

let task: Task[] = []

const nlform = document.querySelector<HTMLFormElement>('#nlform');

nlform?.addEventListener('submit', e => {
  e.preventDefault()

  const text= nlform['texto'] as unknown as HTMLInputElement
  const url= nlform['linkurl'] as unknown as HTMLInputElement
  const title= nlform['title'] as unknown as HTMLInputElement   
  
  console.log(title.value)
  console.log(text.value)
  console.log(url.value)

  task.push({
  title: title.value,
  text: text.value,
  url: url.value, 
 })

 localStorage.setItem('task', JSON.stringify(task))

 renderTask(task)

 nlform.reset()
 text.focus()

})

document.addEventListener('DOMContentLoaded',() => {
  task = JSON.parse(localStorage.getItem('task') || '[]')
  renderTask(task)
})

function renderTask (task: Task[]){
  

  task.forEach(task => {
    const taskElement =  document.createElement('div')
    taskElement.className ='bg-dark p-2 text-white'

    const header= document.createElement('header')

    const title= document.createElement('span')
    title.innerText = task.title

    

    const text= document.createElement('a')
    text.href = task.url
    text.innerText = task.text
   
    title.id='laa'
    title.className ='text.white'

    const url= document.createElement('p')
    url.innerText = task.url

    header.append(title)

    taskElement.append(header)
    taskElement.append(text)
    taskElement.append(url)

    lista?.append(taskElement)
    cabeza?.append(title)

    function blocktt(task: Task[]) {
      if (Object.entries(title).length === 0){
        title.className ='disabled'
      }
    }

  })

}


