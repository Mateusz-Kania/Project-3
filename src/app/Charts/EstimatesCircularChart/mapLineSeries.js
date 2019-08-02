import {LineSeries, XYPlot} from "react-vis/es";
import convertRDegToXY from "./convertRDegToXY";
import React from "react";
import ColorData from '../../Data/colorData'

export default function mapLineSeries(object){
    return(
        <LineSeries key={object.key}
                    color={object.highlighted ? "#000000" : object.color}
                    strokeWidth={object.highlighted ? "4px" : "3px"}
            data={[{x:0,y:0}, convertRDegToXY((object.arrowLength-2)/100,object.angle)]}//-2, zeby linia nie była tak samo długa jak strzałka
        />
    );
}