import { useShow, useOne } from "@refinedev/core";
import { TextField, NumberField, MarkdownField, Show } from "@refinedev/antd";

import { Typography } from "antd";

export const ShowUnit = () => {
    const { queryResult: { data, isLoading } } = useShow();

    const { data: categoryData, isLoading: categoryIsLoading } =
    useOne({
        resource: "categories",
        id: data?.data?.category || "",
        queryOptions: {
            enabled: !!data?.data,
        },
    });

    return (
      <Show isLoading={isLoading}>
        
        <Typography.Title level={5}>Id</Typography.Title>
        <TextField value={data?.data?.id} />

        <Typography.Title level={5}>Unidad_No</Typography.Title>
        <TextField value={data?.data?.num_unidad} />

        <Typography.Title level={5}>Marca</Typography.Title>
        <MarkdownField value={data?.data?.marca} />

        <Typography.Title level={5}>Modelo</Typography.Title>
        <TextField value={data?.data?.modelo} />

        <Typography.Title level={5}>Category</Typography.Title>
        <TextField
          value={categoryIsLoading ? "Loading..." : categoryData?.data?.title}
        />

        <Typography.Title level={5}>Price</Typography.Title>
        <NumberField value={data?.data?.price} />
      </Show>
    );
};