import {Button, Form} from "react-bootstrap";
import {useState} from "react";
export interface ILobby{
    joinRoom:(user:string,room:string)=>void
}

export function Lobby (props:ILobby){
    const  [user,setUser] = useState<string>("");
    const  [room,setRoom] = useState<string>("");
    return (<Form className={"lobby"} onSubmit={e=>{
        e.preventDefault();
        props.joinRoom(user,room)
    }}>
        <Form.Group>
            <Form.Control placeholder={"name"} onChange={e=>setUser(e.target.value)}></Form.Control>
            <Form.Control placeholder={"room"} onChange={e=>setRoom(e.target.value)}></Form.Control>
            <Button variant={"success"} type={"submit"}>Join</Button>
        </Form.Group>
    </Form>);
}