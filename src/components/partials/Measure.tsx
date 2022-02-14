import { BP } from "./Interfaces";
import {MeasureContainerStyled, SingleMeasureStyled, DelMeasureBtnStyled } from './styles/MeasureStyles';

interface Props {
    measure: BP;
    deleteMeasure(measureDateToDelete: string): void;
}

const Measure = ({measure, deleteMeasure}: Props) => {
    return (
        <MeasureContainerStyled>            
                <SingleMeasureStyled><h3>{measure.date}</h3></SingleMeasureStyled>
                <SingleMeasureStyled>{measure.systolic}</SingleMeasureStyled>
                <SingleMeasureStyled>{measure.dyastolic}</SingleMeasureStyled>
                <SingleMeasureStyled>{measure.heartRate}</SingleMeasureStyled>            
            <DelMeasureBtnStyled onClick={() => {deleteMeasure(measure.date);
            }}>X</DelMeasureBtnStyled>
        </MeasureContainerStyled>
    );
};

export default Measure;