import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../contents/Header'
import AboutPage from '../contents/About'
import Footer from '../contents/Footer'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function SimpleCard({moreViewFlag, callbackFunction}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const onClick = (moreViewFlag) => {
        callbackFunction()
    }


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    열심히 하는 개발자
                </Typography>
                <Typography variant="h5" component="h2">
                    서우석
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    활동적인
                </Typography>
                <Typography variant="body2" component="p">
                    끊임없이 배우면서 최신 트렌드에 뒤처지지 않는
                    <br/>
                    {'"개발자"'} 가 되고 싶습니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>Learn More</Button>
            </CardActions>
        </Card>
    );
}