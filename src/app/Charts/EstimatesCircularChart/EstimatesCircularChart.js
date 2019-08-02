import React from 'react';

import {XYPlot, XAxis, YAxis, CircularGridLines} from 'react-vis';

import 'react-vis/dist/style.css';
import mapLineSeries from './mapLineSeries';
import mapArrow from './mapArrow';



const margin = {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
};


function EstimatesCircularChart(props) {
    let {data,length} = props;




    function lineLabel(t){


        return(Math.abs(100*t));
    }
    function lineLabelY(t){
        if(t===-1){
            return("180°")
        }
        else if(t===1) {
            return("0°")
        }

        return("");
    }


    function lineLabelX(t) {
        if (t === -1) {
            return ("270°")
        } else if (t === 1) {
            return ("90°")
        }

        return ("");
    }
//
    return (
        <XYPlot
            margin={margin}
            xDomain={[-1,1]}
            yDomain={[-1,1]}
            width={length}
            height={length}
        >
            <CircularGridLines
                rRange={[0, (length/2)]}
            />

            <XAxis tickFormat={lineLabelX} top={(length ) / 2} />
            <YAxis tickFormat={lineLabelY} left={(length -margin.left*2) / 2} />
            {data.map(mapLineSeries)}
            {data.map(mapArrow)}

        </XYPlot>
    );
}

export default EstimatesCircularChart;