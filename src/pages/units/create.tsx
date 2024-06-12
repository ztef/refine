import { useForm, useSelect, Create } from "@refinedev/antd";

import { Form, Input, Select, InputNumber } from "antd";

export const CreateProduct = () => {
  const { formProps, saveButtonProps } = useForm({
    redirect: "edit",
  });

  const { selectProps } = useSelect({
    resource: "categories",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
        <Form.Item label="Category" name="category">
          <Select {...selectProps} />
        </Form.Item>
       
      </Form>
    </Create>
  );
};