import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import {useEffect, useState} from "react";
import {Navigate} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const Navigate = useNavigate();
    const [open,setOpen] = useState(false); 
    const [anchorEl, setAnchorEl] = useState(null);
    const onHomePageButtonClick = () => {
        Navigate("/Login");
        console.log("Button clicked");
    };
    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        setOpen(false);
    };
    return (
        <>
        
        <div div style={{
            padding: 5,
            
        }}>
            {/* <h1>Apple Page</h1> */}
            <div
                style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
            >
                
                
            </div>
            
        </div>
        <h1 style={{
            textAlign: 'center'
        }}>Home Page</h1>
        </>
    );
};