import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import golo from '../../images/logozeta.svg'
// import sign from '../images/zetasign.svg'
import { makeStyles } from '@mui/styles';
import Flagheading from './Flagheading';
import Socialmedia from './Socialmedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import './header.css'
import { ImCancelCircle } from "react-icons/im";
import { motion } from 'framer-motion';
import { Grid, List, ListItem } from '@mui/material';
import { navdata } from './Flagdata';
//sidebar function
function Sidebar({children,shown,close}){
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <motion.div
        initial={{x:80}}
        animate={{x:0}}
        // transition={{ ease: "easeOut", duration: 0.8 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="modal-content"
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
       <ImCancelCircle style={{position:'absolute' , right:'20',fontSize:'30',color:'#F26E51'}} onClick={close}/>
        {children}
      </motion.div>
    </div>
  ) : null;
}


const Header = () => {

  const [sidebarShown,toggleSidebar] = useState(false)

  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const downlg = useMediaQuery(theme.breakpoints.down('lg'));
 

      const useStyles = makeStyles({
          companylogo:{
              display:'flex',
              
              marginLeft:`${matches? '50px':'90px'}`,
          },
          flag:{
              
          }
          
      })
      
    const classes = useStyles()
    return (<header className='header_main_blue'>
        {/* <Box sx={{
      
            height: 119,
            
            flexGrow:1
            
          }}>
            <AppBar position='relative' >
              <Toolbar variant="dense" sx={{ height:129,backgroundColor: '#FFFFFF'}}>
              <Box className={classes.companylogo}>
              <img
            src={golo}
            style={{height:'50px',width:'50px'}}
            alt='logo'
            />
             
            <Typography variant='h6' style={{color:'#2541B2',justifySelf:'center',alignSelf:'center'}}>Zeta</Typography>
            <Typography variant='h5' style={{color:'#E5D549',justifySelf:'center',alignSelf:'center'}}>Monk</Typography>
              </Box >
             <Box>
             {downlg?<></>:<Flagheading/>}
             </Box>
               {downlg?<ReorderOutlinedIcon onClick={()=> toggleSidebar(!sidebarShown)}  color='secondary' sx={{ fontSize: 40 }} style={{position:'absolute',right:'30px',marginTop:'15px',cursor:'pointer'}}/>:<Socialmedia/>}
            <Sidebar shown={sidebarShown} close={()=> toggleSidebar(false)} >
              <List sx={{marginTop:'35px',color:'black',padding:'40px'}}>
                {navdata.map((n)=>
                <>
                <ListItem><button className='glass_button' >{n.name}</button></ListItem>
                </>
                )}
              </List>
              <Box className={classes.companylogo}>
              <img
            src={golo}
            style={{height:'50px',width:'50px'}}
            alt='logo'
            />
             
            <Typography variant='h6' style={{color:'#2541B2',justifySelf:'center',alignSelf:'center'}}>Zeta</Typography>
            <Typography variant='h5' style={{color:'#E5D549',justifySelf:'center',alignSelf:'center'}}>Monk</Typography>
              </Box >
            </Sidebar>
              </Toolbar>
            </AppBar>
          </Box>
           */}



               </header>
    )
}

export default Header
