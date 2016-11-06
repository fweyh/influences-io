import Server from 'socket.io';

export default function startServer(store) {
    const io = new Server().attach(8090)

    store.subscribe(
        () => io.emit('state', store.getState().toJS())
        // We are sending the whole state each time, maybe this could be improved
    );

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
        // TODO: Add authentification here
    });

}