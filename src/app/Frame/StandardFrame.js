import React from 'react';
import {connect} from "react-redux";
import { Layout,Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function StandardFrame(props){
    let {displaySize} = props;

    let contentStyle={
        margin:'auto',
    };
    let breadcrumbStyle={
        margin: '16px 0'
    };
    let footerStyle={
        textAlign:'center',
        padding:'5px',
    };

    if(displaySize==="big"){
        contentStyle={
            ...contentStyle,
            width:'1200px',
        }
    }
    else if(displaySize==="medium"){
        contentStyle={
            ...contentStyle,
            width:'600px',
        }
    }
    else{
        contentStyle={
            width:'100%',
        }
    }





    return(
        <Layout>
            <div  style={contentStyle}>
                <Breadcrumb style={breadcrumbStyle}>
                    <Breadcrumb.Item>Aplikacja</Breadcrumb.Item>
                    <Breadcrumb.Item>Pomiary</Breadcrumb.Item>
                    <Breadcrumb.Item>Urządzenie 1</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    {props.children}
                </div>
            </div>
            <div style={footerStyle}>
                stopka
            </div>
        </Layout>
    );
}

const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(StandardFrame);