import React from "react";
import { Button, message, Card, Table } from "antd";
import ActionModal from "./ActionModal";

class Contact extends React.Component {
  state = {
    contactList: [],
    isModalVisible: false,
    modelActionType: "",
    isFetching: false,
    seletedContact: undefined
  };

  toggleModal = (rowData, type) => {
    if (type === "edit") {
      this.setState({ seletedContact: rowData, modelActionType: "edit" });
    } else if (type === "view") {
      this.setState({ seletedContact: rowData, modelActionType: "view" });
    }
    console.log("log is coming");

    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (!this.state.seletedContact) {
          values.id = new Date();
          this.setState({ contactList: [...this.state.contactList, values] });
          message.success("Data saved successfully");
        } else {
          let conList = this.state.contactList;
          conList.forEach(man => {
            if (man.id === this.state.seletedContact.id) {
              man.name = values.name;
              man.description = values.description;
              message.success("Data updated successfully");
            }
          });
          this.setState({
            contactList: conList,
            seletedContact: undefined,
            modelActionType: ""
          });
        }
        form.resetFields();
        this.setState({
          isModalVisible: !this.state.isModalVisible,
          seletedContact: undefined
        });
      }
    });
  };
  onDelete = id => {
    const contactList = this.state.contactList.filter(
      contact => contact.id !== id
    );
    this.setState({ contactList });
    message.success("Data deleted successfully");
  };

  onCancel = form => {
    this.setState({
      seletedContact: undefined,
      modelActionType: "",
      isModalVisible: !this.state.isModalVisible
    });
    form.resetFields();
  };

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        rowKey: "name",
        key: "name",
        width: 250
      },
      {
        title: "Description",
        dataIndex: "description",
        rowKey: "description",
        key: "description"
      },
      {
        title: "Action",
        dataIndex: "actions",
        rowKey: "actions",
        key: "actions",
        width: 250,
        render: (info, row) => {
          return (
            <span>
              <Button
                icon="edit"
                onClick={() => this.toggleModal(row, "edit")}
              />
              <Button
                icon="eye"
                onClick={() => this.toggleModal(row, "view")}
              />
              <Button
                type="danger"
                icon="delete"
                onClick={() => this.onDelete(row.id)}
                className="mrgnLft5"
              />
            </span>
          );
        }
      }
    ];
    return (
      <div className="contact">
        <Card className="table-container">
          <Button
            onClick={this.toggleModal}
            className="display-inline float-right"
            type="primary"
            shape="circle"
            icon="plus"
          />
          <Table
            style={{ marginTop: "30px" }}
            dataSource={this.state.contactList}
            columns={columns}
            rowKey={record => record.id}
            loading={this.state.isFetching}
            bordered={true}
          />
          <ActionModal
            {...this.state}
            submitHandle={this.submitHandle}
            onCancel={this.onCancel}
          />
        </Card>
      </div>
    );
  }
}

export default Contact;
