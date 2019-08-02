import {CustomSVGSeries, LineSeries} from "react-vis/es";
import convertRDegToXY from "./convertRDegToXY";
import React from "react";
import ColorData from '../../Data/colorData'
import Arrow from './arrow2.svg'

export default function mapLineSeries(object){

    let width=18;
    let height=30;


    function component(props){
        return(
            <g transform={`translate(${-width/2},${-height/2}) rotate(${object.angle} ${width/2} ${height/2})`}>
                <Arrow  fill={object.highlighted ? "#000000" : object.color} width={`${width}px`}  height={`${height}px`} />
            </g>
        );
    };

    return(


        <CustomSVGSeries key={object.key}
            customComponent={component} data={[
            convertRDegToXY(object.arrowLength / 100, object.angle),
        ]}
        />
    );
}