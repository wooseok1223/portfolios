import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 200,
        width: "300px",
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                    <Grid key={0} item>
                        <Paper className={classes.paper}>
                            <Typography align="center" variant="h5" component="h2" style={{marginBottom: 12}}>
                                에넥스텔레콤
                            </Typography>
                            <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                주요성과 : 채권 자동화 프로그램 개발
                            </Typography>
                            <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                시작일자 : 2018.08 ~ 2018.12
                            </Typography>
                            <Typography style={{fontSize: "14px"}}>
                                설명 : 엑셀시트를 국세청에 맞게 xml 파일로 변환시켜주는 프로그램 개발
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid key={1} item>
                        <Paper className={classes.paper}>
                            <Typography align="center" variant="h5" component="h2" style={{marginBottom: 12}}>
                                더존비즈온
                            </Typography>
                            <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                주요성과 : Wehago 플랫폼 법인조정 모듈 개발
                            </Typography>
                            <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                시작일자 : 2019.08 ~ 2020.03
                            </Typography>
                            <Typography style={{fontSize: "14px"}}>
                                설명 : C# 기반의 SmartA프로그램의 200여개의 페이지를 웹 모듈로 개발
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid key={2} item>
                        <Paper className={classes.paper}>
                            <Typography align="center" variant="h5" component="h2" style={{marginBottom: 12}}>
                                더존비즈온
                            </Typography>
                            <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                주요성과 : Wehago 플랫폼 개인조정 모듈 개발
                            </Typography>
                            <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                시작일자 : 2019.03 ~ 2020.06
                            </Typography>
                            <Typography style={{fontSize: "14px"}}>
                                설명 : C# 기반의 SmartA프로그램의 180여개의 페이지를 웹 모듈로 개발
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}