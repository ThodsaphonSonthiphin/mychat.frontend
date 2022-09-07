import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Lobby} from "./components/Loby";
import {HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";



function App() {
    const [connection, setConnection] = useState<HubConnection>();

    async function JoinRoom(user: string, room: string) {


        try {
            const roomConnection = new HubConnectionBuilder().withUrl("https://localhost:7050/chat")
                .configureLogging(LogLevel.Debug)
                .build();


            roomConnection.on("ReceiveMessage", (user, message) => {
                console.log(`message receive: ${message}`)
            });
            
           

            await roomConnection.start();

            await roomConnection.invoke("JoinRoom", {user, room});
            setConnection(roomConnection)

        } catch (e) {
            console.log(e)
        }
    }
    return (<div className={'app'}>
        <h2>MyChat</h2>
        {/*<hr className={"line"}/>*/}
        <Lobby joinRoom={JoinRoom}></Lobby>
    </div>);
    
}

export default App;
