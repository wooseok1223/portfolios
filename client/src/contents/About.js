import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProfileList from '../function/Card'
import MoreGrid from '../function/Grid'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw', // 가로 너비를 화면 전체로 설정
    },
    titleContent: {
        padding: theme.spacing(3, 0, 3),
        textAlign: 'center', // 텍스트 가운데 정렬
    },
    WhichContent: {
        padding: theme.spacing(3, 0, 3),
        textAlign: 'center', // 텍스트 가운데 정렬
    },
}));


export default function Album() {
    const classes = useStyles();
    const [MoreView, setMoreMiew] = React.useState(false);

    const callbackFunction = () => {
        setMoreMiew(!MoreView);
    }

    const dataSet = [
        {
            title: "더존비즈온",
            name: "업무명 : Wehago 플랫폼 법인, 개인조정 모듈 개발",
            date: "시작일자 : 2019.08 ~ 2020.08",
            contents: "설명 : C# 기반의 SmartA프로그램의 300여개의 페이지를 웹으로 개발"
        },
        {
            title: "라이앤캐처스",
            name: "업무명 : Bibly",
            date: "시작일자 : 2020.12 ~ 진행중",
            contents: "설명 : 비블리 인공지능서점, 찾아가는서점 등 추천시스템, 서재관리라는 기능과 찾아가는 서점이라는 커머스가 결합된 어플리케이션"
        },
        {
            title: "라이앤캐처스",
            name: "업무명 : AIMD 추천시스템",
            date: "시작일자 : 2022.07 ~ 2022.12",
            contents: "설명 : Recbole 모델과 비블리 데이터를 통한 추천시스템(MLOPS)"
        },
        {
            title: "라이앤캐처스",
            name: "업무명 : Qualitify",
            date: "시작일자 : 2023.01 ~ 2023.08",
            contents: "설명 : 지식 거래 기반의 블록체인 마켓플레이스 플랫폼 구현"
        },
        {
            title: "라이앤캐처스",
            name: "업무명 : 브이에스 커뮤니티 recsys",
            date: "시작일자 : 2023.04 ~ 진행중",
            contents: "설명 : 비블리 추천시스템을 기반으로 전국 도서관 서비스에 추천 모델 제공"
        },
        {
            title: "라이앤캐처스",
            name: "업무명 : 라인플러스 wbp",
            date: "시작일자 : 2023.09 ~ 진행중",
            contents: "설명 : 데이터 엔지니어링 업무(파이프라인 구축 및 모니터링)"
        }
    ]

    const addComponent = (
        <div style={{padding: "3px 0px 30px"}}>
            <div style={{padding: "3px 0px 3px"}}>
                <Typography variant="h5" align="center">
                    CAREER
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
        <div className={classes.container}>
            <CssBaseline/>
            <main>
                <div className={classes.titleContent}>
                    <Typography variant="h5" align="center" id="about">
                        ABOUT ME
                    </Typography>
                </div>
                <div className={classes.WhichContent}>
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