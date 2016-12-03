var express = require('express')
var cors = require('cors')
var server = express()
server.use(cors())

var tasks = [
  {
    title: "Do Dishes",
    done: true,
    person: "angela",
    priority: 1,
    type: "Chore"
  },
  {
    title: "Clean Bathroom",
    done: false,
    person: "aaron",
    priority: 2,
    type: "Chore"
  },
  {
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


server.options("/", cors())

server.listen(3000)