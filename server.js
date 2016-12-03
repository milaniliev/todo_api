var express = require('express')

var server = express()

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

server.listen(3000)