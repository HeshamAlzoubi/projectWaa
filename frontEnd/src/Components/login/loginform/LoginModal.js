import React, { useEffect, useState } from 'react';
import { Button, Modal ,message } from 'antd';
import LoginForm from './LoginForm';
import { useDispatch ,useSelector} from "react-redux";
 
const LoginModal = () => {
  const loginstatus = useSelector((state) => state.userReducer.loginstatus);
   
 
  useEffect(()=>{
    if(loginstatus==="success")
    {
      setIsModalOpen(false);
      
    }
    

  },[loginstatus])
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>

      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      
      <Modal title="Login" open={isModalOpen}  onCancel={handleCancel}
      footer={[
          <Button key="cancelLogin" onClick={handleCancel}>
            Cancel
          </Button>]}
      >
        <LoginForm/>
      </Modal>
    </>
  );
};
export default LoginModal;