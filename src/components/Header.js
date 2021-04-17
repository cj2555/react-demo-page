import React,{useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar ,Collapse,IconButton, Toolbar} from '@material-ui/core';
import AccessibleIcon from '@material-ui/icons/Accessible';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar: {
        background: 'none',
        
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle:{
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize:'2rem'
    },
    colorText: {
        color: '#909090',
    },
    title: {
        color: '#fff',
        fontFamily: 'Hachi Maru Pop',
        fontSize:'3rem'
    },
    goDOwn: {
        color: '#443f5e',
        fontSize: '5rem',
        
    },
    container:{
        textAlign: 'center',
      
    },
    islandtestColor: {
        color: '#66ff66',
    }
}))

export const Header = () => {
    const classes = useStyles();
    const [checked, setCheck] = useState(false);
    useEffect(() => {
        setCheck(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>

                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}> My  <span className={classes.colorText}>BLOG</span> </h1>
                <IconButton>
                    <AccessibleIcon className={classes.icon}/>
                    </IconButton>
                    </Toolbar>
            </AppBar>

            <Collapse in={checked}
                {...(checked ? { timeout: 3000 } : {})}
            >
            <div className={classes.container}>

                <h1 className={classes.title}>welcome <br/>
                to my page </h1>
                    
                    <Scroll to={"place-to-visit"} smooth={true}>
                    <KeyboardArrowDownIcon className={classes.goDOwn} />
                    </Scroll>

                </div>
            </Collapse>
        </div>
    )
}
