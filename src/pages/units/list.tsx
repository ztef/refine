import { useMany, getDefaultFilter } from "@refinedev/core";
import {
  useTable,
  EditButton,
  ShowButton,
  getDefaultSortOrder,
  FilterDropdown,
  useSelect,
  List,
} from "@refinedev/antd";

import { Table, Space, Input, Select } from "antd";

export const ListUnits = () => {
  const { tableProps, sorters, filters } = useTable({
    sorters: { initial: [{ field: "id", order: "asc" }] },
    // We're adding default values for our filters
    filters: {
      
    },
    syncWithLocation: true,
  });

  const { data: categories, isLoading } = useMany({
    resource: "categories",
    ids: tableProps?.dataSource?.map((unit) => unit.category?.id) ?? [],
  });

  const { selectProps } = useSelect({
    resource: "categories",
   // defaultValue: getDefaultFilter("category.id", filters, "eq"),
  });

  return (
    <List>
      
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          sorter
          defaultSortOrder={getDefaultSortOrder("id", sorters)}
        />
        <Table.Column
          dataIndex="num_unidad"
          title="Unidad No"
          sorter
          defaultSortOrder={getDefaultSortOrder("num_unidad", sorters)}
          // FilterDropdown will map the value to the filter
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input />
            </FilterDropdown>
          )}
        />
        <Table.Column
          //dataIndex={["categories", "id"]}
          dataIndex="category"
          title="Category"
          render={(value) => {
            if (isLoading) {
              return "Loading...";
            }

            let v = value;

            

            return categories?.data?.find((category) => category.id == v)
              ?.title;
          }}
          filterDropdown={(props) => (
            <FilterDropdown
              {...props}
              // We'll store the selected id as number
              mapValue={(selectedKey) => Number(selectedKey)}
            >
              <Select style={{ minWidth: 200 }} {...selectProps} />
            </FilterDropdown>
          )}
          defaultFilteredValue={getDefaultFilter("category.id", filters, "eq")}
        />
        <Table.Column dataIndex="marca" title="Marca" />
        <Table.Column dataIndex="estatus" title="Estatus" />
        
        <Table.Column dataIndex="modelo" title="Modelo" />
        <Table.Column
          title="Actions"
          render={(_, record) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
              <EditButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};