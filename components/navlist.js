import { Button, List, ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavList(props) {

    const navigate = useNavigate();

    return (
        <>

            <List>
                <ListItem disablePadding>
                    <ListItemButton >
                        {/* <ListItemIcon>
                            </ListItemIcon> */}
                        <Button fullWidth={true} variant="contained" onClick={() => navigate(props.pathLink)}>{props.liName}</Button>
                    </ListItemButton>
                </ListItem>
            </List>

        </>
    )
}


export default NavList;