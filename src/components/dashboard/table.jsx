import React, { useState } from "react";
import { Radio, Space, Table, Tag } from "antd";
const topOptions = [
  { label: "topLeft", value: "topLeft" },
  { label: "topCenter", value: "topCenter" },
  { label: "topRight", value: "topRight" },
  { label: "none", value: "none" },
];
// const bottomOptions = [
//   { label: 'bottomLeft', value: 'bottomLeft' },
//   { label: 'bottomCenter', value: 'bottomCenter' },
//   { label: 'bottomRight', value: 'bottomRight' },
//   { label: 'none', value: 'none' },
// ];
const columns = [
  {
    title: "Organization",
    dataIndex: "organization",
    key: "organization",
    filters: [
      { text: "Sage Mfb", value: "Sage Mfb" },
      { text: "Ohpay Mfb", value: "Ohpay Mfb" },
      { text: "PalPay", value: "PalPay" },
      { text: "CardPay", value: "CardPay" },
      { text: "Quick Pay", value: "Quick Pay" },
    ],
    onFilter: (value, record) => record.organization === value,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "User Name",
    dataIndex: "name",
    key: "name",
    filters: [
      { text: "John Brown", value: "John Brown" },
      { text: "Jim Green", value: "Jim Green" },
      { text: "Joe Black", value: "Joe Black" },
    ],
    onFilter: (value, record) => record.name === value,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "0",
    organization: "Sage Mfb",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "1",
    organization: "Ohpay Mfb",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    organization: "PalPay",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    organization: "CardPay",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    organization: "Quick Pay",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "8",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "9",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "10",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "11",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const TableComponent = () => {
  const [top, setTop] = useState("topLeft");
  const [bottom, setBottom] = useState("bottomRight");
  return (
    <div>
      <div>
        <Radio.Group
          style={{ marginBottom: 10 }}
          //   options={topOptions}
          value={top}
          onChange={(e) => {
            setTop(e.target.value);
          }}
        />
      </div>
      <Radio.Group
        style={{ marginBottom: 10 }}
        // options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      />

      <div style={{ overflowX: "auto" }}>
        <Table
          columns={columns}
          pagination={{ position: [top, bottom] }}
          dataSource={data}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};
export default TableComponent;
