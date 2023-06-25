import React, { useState } from 'react'
import logo from '../Assets/Logo.svg'
import {BsCart2} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { Box,Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
const Navbar = () => {
    const[OpenMenu,setOpenMenu]=useState(false)
    const menuOptions=[{
        text: 'Home',
        icon:<HomeIcon/>,
        },
        {text: 'About',
        icon:<InfoIcon/>,
        },
        {
        text: 'Testimonials',
        icon:<CommentRoundedIcon/>,
        },
        {
        text: 'Contact',
        icon:<PhoneAndroidRoundedIcon/>,
            },
        {
        text: 'Cart',
         icon:<ShoppingCartRoundedIcon/>,
            },

]
  return(
    <nav>
        <div className='nav-logo-container'>
            <img src={logo} alt="" />
            </div>
            <div className='navbar-links-container'>
                <a href="">Home</a>
                <a href=""> About</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>

                <a href="">
                <BsCart2 className='navbar-cart-icon'/>

                </a>
                <button className='primary-button'>Booking Now</button>
            </div>
            <div className='navbar-menu-container' >
            <FaBars onClick={()=>setOpenMenu(true)}/>
            </div>
                <Drawer open={OpenMenu} onClose={()=>setOpenMenu(false)}
                anchor='right'>
                    <Box sx={{width:250}}
                    role='presentation'
                    onClick={()=>setOpenMenu(false)}
                    onKeyDown={()=>setOpenMenu(false)}
                    
                    
                    >
                        <List>
                            {
                                menuOptions.map((item)=>(
                                    <ListItem key={item.text}>
                                        <ListItemButton>
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText primary={item.text}/>
                                        </ListItemButton>
                                    </ListItem>





                                )) 
                            }
                        </List>
                        

                    </Box>




                </Drawer>

        
    </nav>


  )
}

export default Navbar