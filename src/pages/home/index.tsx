import { useState, useEffect } from "react";
import { Select, Space, DatePicker, Radio, RadioChangeEvent, Card } from "antd";
import { Params } from "@/utils/api/home/types";
import dayjs from "dayjs";
import { YearStatistic } from "./year";
import { AllMonthStatistic } from "./month";
import { DailyStatistic } from "./day";
import { MonthlyStatistic } from "./month/index2";

const { Option } = Select;

export const Home = () => {
  const [filter, setFilter] = useState("annual");
  const [params, setParams] = useState<Params>({
    date:
      filter === "annual"
        ? dayjs().startOf("year").format("YYYY")
        : filter === "monthly"
        ? dayjs().startOf("month").format("YYYY-MM")
        : dayjs().startOf("day").format("YYYY-MM-DD"),
    type: "forward",
    status: "completed",
    ride_type: "special",
  });

  useEffect(() => {
    const newDate =
      filter === "annual"
        ? dayjs().startOf("year").format("YYYY")
        : filter === "monthly"
        ? dayjs().startOf("month").format("YYYY-MM")
        : dayjs().startOf("day").format("YYYY-MM-DD");

    setParams((prevParams) => ({
      ...prevParams,
      date: newDate,
    }));
  }, [filter]);
  const onChangeFilter = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
  };

  const handleDateChange = (date: dayjs.Dayjs | null, dateString: any) => {
    setParams((prevParams) => ({
      ...prevParams,
      date: dateString,
    }));
  };

  const handleSelectChange = (key: keyof Params, value: string) => {
    setParams((prev) => ({
      ...prev,
      [key]: value as Params[typeof key],
    }));
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-6">
        <Radio.Group onChange={onChangeFilter} value={filter}>
          <Radio value="annual" className="text-[16px] font-semibold">
            Годовой отчет
          </Radio>
          <Radio value="monthly" className="text-[16px] font-semibold">
            Месячный отчет
          </Radio>
          <Radio value="daily" className="text-[16px] font-semibold">
            Отчет дня
          </Radio>
        </Radio.Group>

        <Space>
          <Select
            value={params.type}
            onChange={(value) => handleSelectChange("type", value)}
            style={{ width: 100 }}
          >
            <Option value="forward">Вперед</Option>
            <Option value="backward">Назад</Option>
          </Select>
          <Select
            value={params.status}
            onChange={(value) => handleSelectChange("status", value)}
            style={{ width: 140 }}
          >
            <Option value="completed">Завершенный</Option>
            <Option value="canceled">Отменено</Option>
          </Select>
          <Select
            value={params.ride_type}
            onChange={(value) => handleSelectChange("ride_type", value)}
            style={{ width: 140 }}
          >
            <Option value="taxi">Такси</Option>
            <Option value="special">Специальные</Option>
          </Select>
          {filter === "annual" ? (
            <DatePicker.YearPicker
              value={dayjs(params.date)}
              onChange={handleDateChange}
              format="YYYY"
              style={{ width: 120 }}
            />
          ) : filter === "monthly" ? (
            <DatePicker.MonthPicker
              value={dayjs(params.date)}
              onChange={handleDateChange}
              format="YYYY-MM"
              style={{ width: 120 }}
            />
          ) : (
            <DatePicker
              value={dayjs(params.date)}
              onChange={handleDateChange}
              format="YYYY-MM-DD"
              style={{ width: 120 }}
            />
          )}
        </Space>
      </div>

      {filter === "annual" ? (
        <YearStatistic params={params} />
      ) : filter === "monthly" ? (
        <>
          <Card
            title={
              <span className="text-xl">
                Отчет за весь месяц по маршрутам за {params.date}
              </span>
            }
            className="mb-5"
          >
            <MonthlyStatistic params={params} />
          </Card>
          <Card
            title={
              <span className="text-xl">
                Подробный отчет за {params.date} месяц
              </span>
            }
          >
            <AllMonthStatistic params={params} />
          </Card>
        </>
      ) : (
        <DailyStatistic params={params} />
      )}
    </div>
  );
};

export default Home;
