import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import { useGetRegionTypesQuery } from "@/utils/api/regions/types/api";
import { IRegionType } from "@/utils/api/regions/types/types";
import React from "react";

const RegionsTypes: React.FC = () => {
  const { data: regionTypes } = useGetRegionTypesQuery();

  const columns = [
    {
      title: "Код",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
  ];

  if (!regionTypes?.locality_types) {
    return <PageLoader />;
  }
  return <CRUDModule<IRegionType> data={regionTypes?.locality_types} columns={columns} title='типами регионов' />;
};

export default RegionsTypes;
