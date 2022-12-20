import React from 'react'
import { appliedjobs } from '../../../Data/appliedAdvertisements'
 
import { Col, Row } from 'antd';
import { Space, Table, Tag } from 'antd';



const columns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
    render: (text) => <a>{text}</a>,
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
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function MyAppliedJobs() {
  return (
    <div>
    <h1 style={{margin:'15px'}}> Applied job </h1>
    <Table columns={columns} dataSource={appliedjobs} />
    </div>
  )
}

export default MyAppliedJobs
