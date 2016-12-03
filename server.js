var express = require('express')
var cors = require('cors')
var server = express()
var bodyParser = require('body-parser')

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
  Object.assign(task, request.body)
  response.json(task)
})

server.post("/tasks", function(request, response){
  var task = request.body
  tasks.push(task)
  task.id = tasks.length - 1
  response.json(task)
})

server.options("/", cors())

server.listen(3000)