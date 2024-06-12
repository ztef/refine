import React from "react";
import { BaseRecord } from "@refinedev/core";
import { useTable, List } from "@refinedev/antd";
import { Table, Space } from "antd";

export const ListCategories = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column dataIndex="title" title="Title" />
            </Table>
        </List>
    );
};

/*

import { AntdInferencer } from "@refinedev/inferencer/antd";

export const ListCategories = () => {
  return (
    <AntdInferencer
    // resource="categories" // We're omitting this prop because it's inferred from the route
    // action="list" // We're omitting this prop because it's inferred from the route
    />
  );
};

*/