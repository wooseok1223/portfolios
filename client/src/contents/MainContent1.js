import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'© '}
            <Link color="inherit" href="/">
                WooSeok Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Album() {
    const classes = useStyles();

    const jsonSet = [{
        image: "https://source.unsplash.com/random",
        title: "역전 할머니 맥주",
        head: "역전 할머니 맥주",
        content: "건대에서 가장 인기 있는 술집 Best 1"
    },
        {
            image: "https://source.unsplash.com/random",
            title: "악바리",
            head: "악바리",
            content: "강남에서 가장 안주가 맛있는 집 (대표메뉴 : 석쇠불고기, 계란말이)"
        },
        {
            image: "https://source.unsplash.com/random",
            title: "코다차야",
            head: "코다차야",
            content: "강남에서 가장 안주가 맛있는 집 (대표메뉴 : 닭똥집)"
        }
    ]


    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <div className={classes.heroContent} style={{background: '#CCFFCC' }}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center">
                            ABOUT
                        </Typography>
                    </Container>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    WooSeok Seo 2020, All rights reserved.
                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}