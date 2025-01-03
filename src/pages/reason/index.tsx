import CRUDModule from "@/components/CrudModule";
import PageLoader from "@/components/PageLoader";
import {
  useCreateReasonMutation,
  useGetReasonsQuery,
} from "@/utils/api/reason/api";
import { IReason } from "@/utils/api/reason/types";

export const Reason = () => {
  const { data: reasons } = useGetReasonsQuery();
  const { mutate: createRason } = useCreateReasonMutation();

  const columns = [
    {
      title: "Причина",
      dataIndex: "txt",
      key: "txt",
    },
  ];

  const formFields = [
    {
      name: "txt",
      label: "Причина",
      rules: [{ required: true, message: "Пожалуйста, введите название!" }],
      component: "Input",
    },
  ];

  const handleAdd = async (record: Omit<IReason, "id">) => {
    createRason(record);
  };

  if (!reasons?.reason_cancels) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IReason>
      data={reasons?.reason_cancels}
      columns={columns}
      onAdd={handleAdd}
      formFields={formFields}
      title="причины"
    />
  );
};
