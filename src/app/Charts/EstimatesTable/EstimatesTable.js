import React from 'react';
import {Table} from 'antd'
import {connect} from "react-redux";

//based on ant.design table component

function estimatesTable(props){
    let {languageData,data,onHoverChange} = props;

    let text=languageData.estimatesTable;


    const columns = [
        {
            title: text ? text.name : "",
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: text ? text.rms : "",
            dataIndex: 'rms',
            key: 'rms',
        },
        {
            title: text ? text.angle : "",
            dataIndex: 'angle',
            key: 'angle',
        },
    ];



    return(
        <span
            onMouseLeave={()=>{onHoverChange()}}
            >
        <Table key={data.key} dataSource={data} columns={columns}
               pagination={false}
               onRow={(record) => {
                   return {
                       onMouseEnter: () => {
                           onHoverChange(record.key)},
                   };
               }}

        />
        </span>



    );
}

const mapStateToProps= state=>(
    {
        languageData:state.languageData,
    }
);

export default connect(mapStateToProps)(estimatesTable);