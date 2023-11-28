import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image1 from '../Img/Profile.jpeg'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        opacity: 0.8,
        zIndex: 1
    },
    title: {
        flexGrow: 1,
        marginLeft: "15px",
        color: '#000000'
    }
}));

export default function ResponsiveAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    // style={{color:'#000000'}}
    return (
        <div className={classes.root} id="header">
            <AppBar style={{background: '#FFFFFF'}}>
                <Toolbar>
                    <Avatar alt="Remy Sharp" src={Image1} id="header" onClick={handleClose}/>
                    <Typography variant="h6" className={classes.title} id="header" onClick={handleClose}>
                        WooSeok's PortFolios
                    </Typography>
                        <Button>
                            <Link to='/'>
                                <p className='link' style={{color: '#000000'}}>Home</p>
                            </Link>
                        </Button>
                        <Button>
                            <Link to='/about'>
                                <p className='link' style={{color: '#000000'}}>About</p>
                            </Link>
                        </Button>
                        <Button>
                            <Link to='/skill'>
                                <p className='link' style={{color: '#000000'}}>Skill</p>
                            </Link>
                        </Button>
                        <Button href="#text-buttons">
                            <a href='https://sws1223.tistory.com/'>
                                <p className='link' style={{color: '#000000'}}>Blog</p>
                            </a>
                            {/*<Link to='https://sws1223.tistory.com/'>*/}
                            {/*    <p className='link' style={{color: '#000000'}}>Blog</p>*/}
                            {/*</Link>*/}
                        </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}