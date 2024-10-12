import { useEffect, useState } from "react";
import { Steps, Form, Input, Select, Button, Space, Flex } from "antd";
import { useGetDriverTypesQuery } from "@/utils/api/drivers/types/api";
import {
  useCreateAccountMutation,
  useCreateCarForAccountMutation,
  useCreateProfileAccountMutation,
  useCreateVerifyAccountMutation,
} from "@/utils/api/drivers/registration/api";
import { useGetVehiclesQuery } from "@/utils/api/cars/api";
import { useGetVehicleColorsQuery } from "@/utils/api/cars/colors/api";
import useSharedStore from "@/store/shared/slice";

const { Step } = Steps;
const { Option } = Select;

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { data: driverTypes } = useGetDriverTypesQuery();
  const { data: cars } = useGetVehiclesQuery();
  const { data: carColors } = useGetVehicleColorsQuery();
  const { registrationDriverID } = useSharedStore((state) => state);
  const { isStep1, isStep2, isStep3 } = useSharedStore((state) => state);
  const [form] = Form.useForm();
  const { mutate: createAccount } = useCreateAccountMutation();
  const { mutate: createVerifyAccount } = useCreateVerifyAccountMutation();
  const { mutate: createProfileAccount } = useCreateProfileAccountMutation();
  const { mutate: createCarForAccount } = useCreateCarForAccountMutation();

  const steps = [
    {
      title: "Аккаунт",
      content: (
        <>
          <Form.Item
            name='phone_number'
            label='Номер телефона'
            rules={[{ required: true, message: "Пожалуйста, введите номер телефона водителя" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='driver_type'
            label='Категория'
            rules={[{ required: true, message: "Пожалуйста, выберите категорию" }]}
          >
            <Select>
              {driverTypes?.driver_types?.map((type) => (
                <Option key={type.code} value={type.code}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: "Подтверждение",
      content: (
        <>
          <Form.Item
            name='phone_number'
            label='Номер телефона'
            rules={[{ required: true, message: "Пожалуйста, введите номер телефона" }]}
          >
            <Input value={form.getFieldValue("phone_number")} disabled />
          </Form.Item>
          <Form.Item
            name='driver_type'
            label='Категория'
            rules={[{ required: true, message: "Пожалуйста, выберите категорию" }]}
          >
            <Select disabled value={form.getFieldValue("driver_type")}>
              {driverTypes?.driver_types?.map((type) => (
                <Option key={type.code} value={type.code}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='code' label='Код из смс' rules={[{ required: true, message: "Пожалуйста, введите код" }]}>
            <Input />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Данные",
      content: (
        <>
          <Form.Item
            name='full_name'
            label='Ф.И.О.'
            rules={[{ required: true, message: "Пожалуйста, введите Ф.И.О. водителя" }]}
          >
            <Input />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Машина",
      content: (
        <>
          <Form.Item
            name='vehicle_id'
            label='Машина'
            rules={[{ required: true, message: "Пожалуйста, выберите машину" }]}
          >
            <Select value={form.getFieldValue("driver_type")}>
              {cars?.vehicles?.map((car) => (
                <Option key={car.id} value={car.id}>
                  {car.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='vehicle_number'
            label='Номер машины'
            rules={[{ required: true, message: "Пожалуйста, введите номер машины" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='color_id'
            label='Цвет машины'
            rules={[{ required: true, message: "Пожалуйста, выберите цвет машины" }]}
          >
            <Select value={form.getFieldValue("driver_type")}>
              {carColors?.colors?.map((color) => (
                <Option key={color.id} value={color.id}>
                  {color.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </>
      ),
    },
  ];

  const next = () => {
    form.validateFields().then((data) => {
      if (currentStep === 0) {
        createAccount(data);
        console.log(data);
      } else if (currentStep === 1) {
        createVerifyAccount(data);
        console.log(data); // with code
      } else if (currentStep === 2) {
        console.log({ driver_id: registrationDriverID, ...data });
        createProfileAccount({ driver_id: registrationDriverID, ...data });
      }
    });
  };

  useEffect(() => {
    if (currentStep === 0 && isStep1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 1 && isStep2) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2 && isStep3) {
      setCurrentStep(currentStep + 1);
    }
  }, [isStep1, isStep2, isStep3]);

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", { driver_id: registrationDriverID, ...values });
    createCarForAccount({ driver_id: registrationDriverID, ...values });
  };

  return (
    <Flex vertical gap={20}>
      <h1>Регистрация водителя</h1>
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div style={{ marginTop: "2rem", maxWidth: "400px" }}>
        <Form form={form} layout='vertical' onFinish={onFinish}>
          {steps[currentStep].content}
        </Form>
      </div>
      <Space>
        {currentStep > 0 && <Button onClick={() => prev()}>Назад</Button>}
        {currentStep < steps.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Далее
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type='primary' onClick={() => form.submit()}>
            Завершить
          </Button>
        )}
      </Space>
    </Flex>
  );
}
