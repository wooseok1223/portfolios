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
import Acitivity from '../Img/activity.png'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(3, 0, 3),
    },
    titleContent: {
        padding: theme.spacing(3, 0, 3),
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
        },
         {
            title: "라이앤캐처스",
            name: "주요성과 : Identify",
            date: "시작일자 : 2020.12 ~ 2020.03",
            contents: "설명 : 딥러닝 모델을 적용하여 장고로 구현한 임플란트 예측 식별 프로그램"
        }
    ]

    const addComponent = (
        <div style={{padding: "3px 0px 30px"}}>
            <div style={{padding: "3px 0px 3px"}}>
                <Typography variant="h5" align="center">
                    Career
                </Typography>
            </div>
            <div style={{padding: "30px 0px 30px"}}>
                <MoreGrid
                    dataSet={dataSet}
                    mode={'Carrer'}
                />
            </div>
            {/*<div style={{textAlign: "center", background : "#FEFEEF"}}>*/}
            {/*    <img src={Acitivity} style={{width: "50%"}}/>*/}
            {/*</div>*/}
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
                        <div>
                            <ProfileList
                                moreViewFlag={MoreView}
                                callbackFunction={callbackFunction}
                            />
                        </div>
                    </Container>
                </div>
                {MoreView == true ? addComponent : ''}
            </main>
            {/* End footer */}
        </div>
    );
}