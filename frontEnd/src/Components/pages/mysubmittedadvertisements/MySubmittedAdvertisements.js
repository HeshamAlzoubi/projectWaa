import React, { useEffect } from 'react'
import { submittedAdvertisements } from '../../../Data/submittedAdvertisementData'
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import AddEditJobAdvertisementModal from './AddEditJobAdvertisementModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdvertisement, getadvertisementList } from '../../../redux/advertisementReducer';



function MySubmittedAdvertisements() {
  const advertisementList = useSelector((state)=>state.advertisementReducer.advertisementList)
  const columns = [
    {
      title: 'Id',
      dataIndex: 'Id',
      key: 'Id',
      visible: false
    },
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
      title: 'created',
      dataIndex: 'PublicationDate',
      key: 'PublicationDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <AddEditJobAdvertisementModal isAdd = {false}   />
          <Popconfirm title="Sure to delete?" onConfirm={() => {dispatch(deleteAdvertisement(record.Id))}}>
            <Button icon={<DeleteOutlined/>} danger size='small'>Delete</Button>
          </Popconfirm>
          
        </Space>
      ),
    },
  ];
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getadvertisementList());
  },[])
  return (
    <div>
    <h1 style={{margin:'15px'}}>My Advertisements <AddEditJobAdvertisementModal isAdd={true}/> </h1>
    <Table columns={columns} dataSource={advertisementList} />
    </div>
  )
}
export default MySubmittedAdvertisements
