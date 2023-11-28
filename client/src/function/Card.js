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
                    경험은 모든 기술의 가장 좋은 스승이다.
                </Typography>
                <Typography variant="body2" component="p">
                    아는만큼 보인다는 말이 있습니다. 처음 접하는 일은 어떤 사람이든 당연히 어렵다고 느낄것입니다. 개발이라는 분야는 당연히 업무를 하면서 막히는 부분이 많습니다. 이를 위해 공부를 하고, 적용하고, 수정하는 과정을 통해서 사람은 성숙해 집니다. 저는 이렇게 막히는 부분을 해결하고 새로운 지식을 탐구하는일에 흥미를 느끼고 있습니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>Learn More</Button>
            </CardActions>
        </Card>
    );
}