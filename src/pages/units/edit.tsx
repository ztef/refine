import { useForm, useSelect, Edit } from "@refinedev/antd";

import { Form, Input, Select, InputNumber } from "antd";

export const EditUnit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({
    redirect: "show",
  });

  const { selectProps } = useSelect({
    resource: "categories",
    defaultValue: queryResult?.data?.data?.category,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Unidad No" name="num_unidad">
          <Input />
        </Form.Item>
        <Form.Item label="Marca" name="marca">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Modelo" name="modelo">
          <Input />
        </Form.Item>
        <Form.Item label="Estatus" name="estatus">
            <Select options={[{ value: 'Funciona', label: <span>Funciona</span> }, { value: 'No_Funciona', label: <span>No Funciona</span> }]} />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select {...selectProps} />
        </Form.Item>
       
      </Form>
    </Edit>
  );
};