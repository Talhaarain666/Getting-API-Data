import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";

function Todos() {
    const [todo, setTodo] = useState();

    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        setTodo(response.data.map((val, i) => {
            return (
                <>
                    <Box sx={{ padding: "3%", marginY: "1%", background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "white" }} key={i}>
                        <Box display={"flex"} justifyContent="space-between">
                            <Typography variant="h6">userId = {val.userId}</Typography>
                            <Typography variant="h6">id = {val.id}</Typography>
                        </Box>
                        <Typography variant="h5">{val.title}</Typography>
                        <Typography variant="h5">completed: {String(val.completed)}</Typography>
                    </Box>
                </>
            )
        }))
    })

    return (
        <>
            <Box>{todo}</Box>
        </>
    )
}

export default Todos;