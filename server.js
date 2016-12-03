var express = require('express')
var cors = require('cors')
var server = express()
server.use(cors())

var tasks = [
  {
    title: "Do Dishes",
    done: true,
    person: "angela"
  },
  {
    title: "Clean Bathroom",
    done: false,
    person: "aaron"
  },
  {
    title: "Play Video Games",
    done: true,
    person: "lawrence"
  }
]

server.get("/tasks", function(request, response){
  response.json(tasks)
})

server.options("/", cors())

server.listen(3000)