import React,{useEffect,useState} from 'react';
import SampleEchart from './SampleEchart';
import axios from 'axios';
import { getAccessToken } from '../../redux/userReducer';

import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';

function ECharts() {


  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

    const [jobsPerLocation,setJobsPerLocation] = useState([]);
    const [studentsPerState,setStudentsPerState] = useState([]);
    const [studentsPerCity,setStudentsPerCity] = useState([]);

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        getJobsPerLocation();
        getStudentsPerState();
        getStudentsPerCity();
    },[]);


  const getJobsPerLocation = async()=>{
        if(getAccessToken()!=null){
            setIsLoggedIn(true);
            const response=await axios.get("/echart/getJobAdvertisementsPerLocation");
            setJobsPerLocation(response.data);
        }
        else{

        }
    }

    const getStudentsPerState = async()=>{
        if(getAccessToken()!=null){
            setIsLoggedIn(true);
            const response=await axios.get("/echart/getStudentsNumberPerState");
            setStudentsPerState(response.data);
        }
        else{

        }
    }

    const getStudentsPerCity = async()=>{
        if(getAccessToken()!=null){
            setIsLoggedIn(true);
            const response=await axios.get("/echart//echart/getStudentsNumberPerCity?stateCode=PR");
            setStudentsPerCity(response.data);
        }
        else{

        }
    }



  return (

    
        (isLoggedIn)
        ?
        
        <Row className='charts'>
        <Col span={11}>
            <SampleEchart title='Jobs per Location' data={jobsPerLocation.map(val=>{return val.jobAdvertisementCount; })} label={jobsPerLocation.map(val=>{return val.cityName+', '+val.stateCode; })}/>
        </Col>
        <Col span={11}>
        <SampleEchart title='Students per State' data={studentsPerState.map(val=>{return val.studentNumber; })} label={studentsPerState.map(val=>{return val.stateCode; })}/>
        </Col>
        <Col span={11}>
        <SampleEchart title='Students per City' data={studentsPerCity.map(val=>{return val.numberOfStudent; })} label={studentsPerCity.map(val=>{return val.cityName; })}/>
        </Col>
        </Row>
        :
        <>
        </>
    
    
  )
}

export default ECharts
