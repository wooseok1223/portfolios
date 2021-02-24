import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitCard from '../../src/function/Gitcard'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    titleContent: {
        padding: theme.spacing(3, 0, 3),
    }
}));

const dataSet = [
    {
        img: 'Pf',
        link: 'https://github.com/wooseok1223/portfolios',
        title: "Portfolios",
        date: "시작일자 : 2020.08 ~ 2018.09",
        contents: "설명 : React Hook을 이용해서 포트폴리오 개발"
    },
    {
        img: 'SmartPlanner',
        link: 'https://github.com/snakim0813/Smart-Planer',
        title: "Smart Planner",
        date: "시작일자 : 2018.03 ~ 2018.06",
        contents: "설명 : 자바를 기반으로 (캡스톤)에서 만든 첫 협업 작품 자바를 기반으로 (캡스톤)에서 만든 첫 협업 작품"
    },
    {
        img: 'Furniture',
        link: 'https://github.com/wooseok1223/recommend-furniture',
        title: "Recommend Furniture",
        date: "시작일자 : 2018.08 ~ 2018.12",
        contents: "설명 : yolo 이미지 디텍터를 활용한 이미지 이진 백터화, 색상 knn 분석 등 을 이용해 학습시킨 가구 추천 웹프로그램"
    },
    {
        img: 'LookBook',
        link: 'https://github.com/wooseok1223/spa-with-instagram',
        title: "LookBook",
        date: "시작일자 : 2019.08 ~ 진행중",
        contents: "설명 : 리액트, 장고로 만든 SNS Docker 배포 진행중"
    },
    {
        img: 'MyOneMeeting',
        link: 'https://github.com/wooseok1223/MyOwnMeeting',
        title: "MyOwnMetting",
        date: "시작일자 : 2019.06 ~ 진행",
        contents: "설명 : 각종 음원 사이트에서 피아노 곡 순위를 보여줌과 함께 빅데이터를 이용한 피아노곡 추천 웹사이트 개발 프로젝트"
    }
]


export default function Album() {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.mainBox}>
                <div className={classes.titleContent}>
                    <Typography variant="h5" align="center" id="project">
                        Project
                    </Typography>
                </div>
                <GitCard
                    dataSet={dataSet
                    }/>
            </div>
            <div>
                <div className={classes.titleContent}>
                    <Typography variant="h5" align="center" id="project">
                        Project
                    </Typography>
                </div>
                <Card
                    style={{width: 300}}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src=""/>}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        </main>
    );
}