import socketIo from 'socket.io'
import { clear, log } from 'console'
import { green, blue } from 'ansi-colors'
import { Events } from '../shared/events'

const io = socketIo()

io.on('connection', socket => {
  log(blue(`User ${socket.id} connected!`))

  const sockets = Object.values(io.sockets.sockets)

  socket.emit(Events.UserList, sockets.map(socket => socket.id))

  for (const value of sockets) {
    value.emit(Events.UserConnected, socket.id)
  }

  socket.on('disconnect', () => {
    log(blue(`User ${socket.id} disconnected!`))
    io.emit(Events.UserDisconnected, socket.id)
  })
})

io.listen(3030)

clear()
log(green('Server is listening on port 3030'))
