import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import GitCard from '../../src/function/Gitcard'
import Acitivity from '../Img/activity.png'

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
        img: Acitivity,
        title: "Furniture_Recommend",
        date: "시작일자 : 2018.08 ~ 2018.12",
        contents: "설명 : 엑셀시트를 국세청에 맞게 xml 파일로 변환시켜주는 프로그램 개발"
    },
    {
        img: Acitivity,
        title: "Furniture_Recommend",
        date: "시작일자 : 2018.08 ~ 2018.12",
        contents: "설명 : 엑셀시트를 국세청에 맞게 xml 파일로 변환시켜주는 프로그램 개발"
    },
    {
        img: Acitivity,
        title: "Furniture_Recommend",
        date: "시작일자 : 2018.08 ~ 2018.12",
        contents: "설명 : 엑셀시트를 국세청에 맞게 xml 파일로 변환시켜주는 프로그램 개발"
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
        </main>
    );
}