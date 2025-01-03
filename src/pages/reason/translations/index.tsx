import CRUDModule from "@/components/CrudModule";
import PageLoader from "@/components/PageLoader";
import { useGetLanguagesQuery } from "@/utils/api/language/api";
import { useGetReasonsQuery } from "@/utils/api/reason/api";
import {
  useCreateReasonTranslationMutation,
  useGetReasonsTranslationQuery,
} from "@/utils/api/reason/translations/api";
import { IReasonTranslation } from "@/utils/api/reason/translations/types";
import { TableProps } from "antd";

export const ReasonTranslations = () => {
  const { data: reasons } = useGetReasonsQuery();
  const { data: languages } = useGetLanguagesQuery();
  const { mutate: createRasonTranslation } =
    useCreateReasonTranslationMutation();
  const { data } = useGetReasonsTranslationQuery();

  const columns: TableProps<IReasonTranslation>["columns"] = [
    {
      title: "Перевод",
      dataIndex: "translation",
      key: "translation",
    },
    {
      title: "Код языка",
      dataIndex: ["language", "code"],
    },
    {
      title: "Название языка",
      dataIndex: ["language", "name"],
    },
    {
      title: "Причина отказа",
      dataIndex: ["reason_cancel", "txt"],
    },
  ];

  const formFields = [
    {
      name: "translation",
      label: "Перевод",
      rules: [{ required: true, message: "Пожалуйста, введите перевод!" }],
      component: "Input",
    },
    {
      name: "language_id",
      label: "Язык",
      rules: [{ required: true, message: "Пожалуйста, выберите язык!" }],
      component: "Select",
      options: languages?.languages?.map((lang) => ({
        value: lang.id,
        label: lang.name,
      })),
    },
    {
      name: "reason_cancel_id",
      label: "Регион",
      rules: [
        { required: true, message: "Пожалуйста, выберите причину отказа!" },
      ],
      component: "Select",
      options: reasons?.reason_cancels?.map((item) => ({
        value: item.id,
        label: item.txt,
      })),
    },
  ];

  const handleAdd = async (record: any) => {
    createRasonTranslation(record);
  };

  if (!data?.reason_cancel_translations) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IReasonTranslation>
      data={data?.reason_cancel_translations}
      columns={columns}
      onAdd={handleAdd}
      formFields={formFields}
      title="переводы причин"
    />
  );
};
