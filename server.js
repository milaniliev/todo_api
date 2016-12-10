var express = require('express')
var cors = require('cors')
var server = express()
var bodyParser = require('body-parser')
var morgan = require('morgan')

server.use(morgan('dev'))

server.use(cors())
server.use(bodyParser.json())
var tasks = [
  {
    id: 1, 
    title: "Do Dishes",
    done: true,
    person: "angela",
    priority: 1,
    type: "Chore"
  },
  {
    id: 2,
    title: "Clean Bathroom",
    done: false,
    person: "aaron",
    priority: 2,
    type: "Chore"
  },
  {
    id: 3,
    title: "Play Video Games",
    done: true,
    person: "lawrence",
    priority: 3, 
    type: "Homework"
  }
]

server.get("/tasks", function(request, response){
  response.json(tasks)
})

server.get("/tasks/:type", function(request, response){
  var tasks_of_type = tasks.filter(function(task){return task.type === request.params.type})
  response.json(tasks_of_type)
})

server.patch("/tasks/:id", function(request, response){
  var task = tasks.find(function(task){return task.id === Number(request.params.id)})
  if(task){
    Object.assign(task, request.body)
    response.json(task)
  } else {
    response.status(404).end()
  }
})

server.post("/tasks", function(request, response){
  var task = request.body
  if(tasks.length === 0){
    task.id = 1
  } else {
    task.id = (Math.max.apply(null, tasks.map(function(task){ return task.id}))) + 1
  }
  console.log("creating task", task)
  tasks.push(task)
  response.json(task)
})

server.delete("/tasks/:id", function(request, response){
  task = tasks.find(function(task){return task.id === Number(request.params.id)})
  if (task){
    tasks = tasks.filter(function(task){return task.id !== Number(request.params.id)})
    response.json(task)
  } else {
    response.status(404).end()
  }
})

server.options("/", cors())

server.listen(3000)