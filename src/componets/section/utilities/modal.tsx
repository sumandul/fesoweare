import React, { useState } from "react";
import { Modal, Button } from "antd";

interface popModalProps {
  children: JSX.Element[] | JSX.Element;
  isModalOpen: any;
  setIsModalOpen: any;
}

const PopModal: React.FC<popModalProps> = ({
  children,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Add Address"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            className=" bg-blue-50 w-1/4 my-10 mr-5  hover:bg-yellow-100"
            onClick={handleOk}
          >
            Save
          </Button>,
        ]}
        width={700}
      >
        {children}
      </Modal>
    </div>
  );
};

export default PopModal;
