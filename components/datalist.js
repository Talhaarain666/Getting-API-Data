import { Typography } from "@mui/material";

function DataList(props) {

    return (
        <>

            <li>
   
                <Typography variant="p"><span className="yellowClr">{props.spanText} </span>{props.val}</Typography>
            
            </li>
         
        </>
    )

}

export default DataList;