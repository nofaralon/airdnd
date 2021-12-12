// // FRONTEND // 

// // details- page

// async check() {
//     const order = await this.$store.dispatch({
//         type: "addOrder",
//         order: JSON.parse(JSON.stringify(this.order)),
//     });
//     socketService.emit('addOrder', order)

// }

// // BACKEND //

// function connectSockets(http, session) {
//     gIo = require('socket.io')(http, {
//         cors: {
//             origin: '*',
//         }
//     })
//     gIo.on('connection', socket => {
//         console.log('New socket', socket.id)
//         socket.on('disconnect', socket => {
//             console.log('Someone disconnected')
//         })
//         socket.on('newOrder', topic => {
//             console.log('topic', topic);
//             if (socket.myTopic === topic) return;
//             if (socket.myTopic) {
//                 socket.leave(socket.myTopic)
//             }
//             socket.join(topic)
//             socket.myTopic = topic

//         })
//         socket.on('addOrder', order => {
//             console.log('sending new order to the host', order);
//             // emits to all sockets:
//             gIo.emit('hostOrders', order)
//                 // emits only to sockets in the same room
//                 // gIo.to(socket.myTopic).emit('chat addMsg', msg)
//         })


//     })
// }


// // FRONTEND //

// // app-haeder

// created() {

//         if (this.user) this.createOrderSocket()
//     },


//     createOrderSocket() {
//         socketService.on('hostOrders', this.orderNotification)
//     },

//     orderNotification(order) {
//         if (order.hostId === this.user._id) {
//             this.newNotification = true
//         }
//     },