import React from "react";
import { Button } from "antd";

export default function(pm) {
  return [
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
            <Button icon="edit" onClick={() => pm.toggleModal(row, "edit")} />
            <Button icon="eye" onClick={() => pm.toggleModal(row, "view")} />
            <Button
              type="danger"
              icon="delete"
              onClick={() => pm.onDelete(row.id)}
              className="mrgnLft5"
            />
          </span>
        );
      }
    }
  ];
}
