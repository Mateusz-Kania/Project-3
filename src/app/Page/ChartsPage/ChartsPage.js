import React from 'react';
import {connect} from "react-redux";
import {Row,Col} from 'antd';
import EstimatesTable from '../../Charts/EstimatesTable/EstimatesTable'
import EstimatesCircularChart from '../../Charts/EstimatesCircularChart/EstimatesCircularChart'

import createChartObjectState from './createChartObjectState';
import getStateAfterHighlightChange from './getStateAfterHighlightChange';

function ChartsPage(props){

    let {estimatesData,languageData} = props;
    let text = languageData.chartsPage;
    let [chartData,setChartData] = React.useState([]);

    let containerStyle={
      backgroundColor:"#ffffff",
    };

    let textColStyle={
      padding:'20px',
    };

    let defaultTileStyle={
        padding:'50px',
    };

    React.useEffect(() => setChartData(createChartObjectState(estimatesData)), [props.estimatesData]);

    function handleHover(hoverID){
        setChartData(getStateAfterHighlightChange(chartData,hoverID));
    }

    return(
        <div style={containerStyle}>
            <Row>
                <Col style={textColStyle} span={16}>
                <h1>
                    {text ? text.header : ""}
                </h1>
                <p>
                    {text ? text.text : ""}
                </p>
                </Col>
                <Col span={8}>
                    (tutaj może być zdjęcie urządzenia/jakieś logo)
                </Col>
            </Row>
            <Row>
                <Col style={defaultTileStyle} span={12}>
                    <h1>
                        {text ? text.estimatesTableHeader : ""}
                    </h1>
                    <EstimatesTable onHoverChange={handleHover} data={chartData} />
                </Col>
                <Col style={defaultTileStyle} span={12}>
                    <h1>
                        {text ? text.estimatesCircularChartHeader : ""}
                    </h1>
                    <EstimatesCircularChart onHoverChange={handleHover} data={chartData} length={500}/>

                    <img src={require("./arrow2.svg")} alt="" />
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps= state=>(
    {
        estimatesData:state.estimatesData,
        languageData:state.languageData,
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(ChartsPage);