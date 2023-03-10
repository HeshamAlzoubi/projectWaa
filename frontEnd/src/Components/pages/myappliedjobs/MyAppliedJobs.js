import React, { useEffect } from 'react'
import { appliedjobs } from '../../../Data/appliedAdvertisements'
 
 
import { Space, Table, Tag } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { appliedJobs } from './../../../redux/userReducer';



const columns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
    render: (text) => text,
  },
  {
    title: 'Company',
    dataIndex: 'CompanyName',
    key: 'campany',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'description',
  },
  {
    title: 'State',
    dataIndex: 'State',
    key: 'state',
  },
  {
    title: 'City',
    dataIndex: 'City',
    key: 'city',
  },
  
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'applied',
    dataIndex: 'ApplicationDate',
    key: 'ApplicationDate',
  },
 
];

function MyAppliedJobs() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(appliedJobs());
  },[])

  const myAppliedJobs = useSelector((state)=>state.userReducer.myAppliedJobs)

  console.log(myAppliedJobs)

  return (
    <div>
    <h1 style={{margin:'15px'}}> Applied job </h1>
    <Table columns={columns} dataSource={myAppliedJobs} />
    </div>
  )
}

export default MyAppliedJobs
