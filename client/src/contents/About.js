import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ProfileList from '../function/Card'
import MoreGrid from '../function/Grid'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(3, 0, 3),
        background: '#CCFFCC'
    },
    titleContent: {
        padding: theme.spacing(10, 0, 3),
        background: '#CCFFCC'
    },
    cardDesign: {
        height: ''
    }
}));


export default function Album() {
    const classes = useStyles();
    const [MoreView, setMoreMiew] = React.useState(false);

    const callbackFunction = () => {
        setMoreMiew(!MoreView);
    }

    const dataSet = [
        {
            title: "에넥스텔레콤",
            name: "주요성과 : 채권 자동화 프로그램 개발",
            date: "시작일자 : 2018.08 ~ 2018.12",
            contents: "설명 : 엑셀시트를 국세청에 맞게 xml 파일로 변환시켜주는 프로그램 개발"
        },
        {
            title: "더존비즈온",
            name: "주요성과 : Wehago 플랫폼 법인조정 모듈 개발",
            date: "시작일자 : 2019.08 ~ 2020.03",
            contents: "설명 : C# 기반의 SmartA프로그램의 200여개의 페이지를 웹 모듈로 개발"
        },
        {
            title: "더존비즈온",
            name: "주요성과 : Wehago 플랫폼 개인조정 모듈 개발",
            date: "시작일자 : 2019.03 ~ 2020.06",
            contents: "설명 : C# 기반의 SmartA프로그램의 180여개의 페이지를 웹 모듈로 개발"
        }
    ]

    const addComponent = (
        <div>
            <div className={classes.titleContent}>
                <Typography variant="h5" align="center">
                    career
                </Typography>
            </div>
            <div className={classes.titleContent}>
                <MoreGrid
                    dataSet={dataSet}
                    mode={'Carrer'}
                />
            </div>
        </div>
    )

    return (
        <div>
            <CssBaseline/>
            <main>
                <div className={classes.titleContent}>
                    <Typography variant="h5" align="center" id="about">
                        ABOUT ME
                    </Typography>
                </div>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <div className={classes.cardDesign}>
                            <ProfileList
                                moreViewFlag={MoreView}
                                callbackFunction={callbackFunction}
                            />
                        </div>
                    </Container>
                </div>
                <div>
                    {MoreView == true ? addComponent : ''}
                </div>
            </main>
            {/* End footer */}
        </div>
    );
}