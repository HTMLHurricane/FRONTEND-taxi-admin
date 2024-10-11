import { useState } from "react";
import { Steps, Form, Input, Select, Button } from "antd";

const { Step } = Steps;
const { Option } = Select;

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const steps = [
    {
      title: "Личная информация",
      content: (
        <>
          <Form.Item
            name='fullName'
            label='Ф.И.О.'
            rules={[{ required: true, message: "Пожалуйста, введите ваше Ф.И.О." }]}
          >
            <Input />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Контактная информация",
      content: (
        <>
          <Form.Item
            name='category'
            label='Категория'
            rules={[{ required: true, message: "Пожалуйста, выберите категорию" }]}
          >
            <Select>
              <Option value='category1'>Категория 1</Option>
              <Option value='category2'>Категория 2</Option>
              <Option value='category3'>Категория 3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='phone'
            label='Номер телефона'
            rules={[{ required: true, message: "Пожалуйста, введите номер телефона" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name='code' label='Код' rules={[{ required: true, message: "Пожалуйста, введите код" }]}>
            <Input />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Дополнительная информация",
      content: (
        <>
          <Form.Item
            name='additionalCategory'
            label='Дополнительная категория'
            rules={[{ required: true, message: "Пожалуйста, выберите дополнительную категорию" }]}
          >
            <Select>
              <Option value='additionalCategory1'>Дополнительная категория 1</Option>
              <Option value='additionalCategory2'>Дополнительная категория 2</Option>
              <Option value='additionalCategory3'>Дополнительная категория 3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='additionalFullName'
            label='Дополнительное Ф.И.О.'
            rules={[{ required: true, message: "Пожалуйста, введите дополнительное Ф.И.О." }]}
          >
            <Input />
          </Form.Item>
        </>
      ),
    },
  ];

  const next = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "1.5rem",
      }}
    >
      <h1>Регистрация водителя</h1>
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='mt-8'>
        <Form form={form} layout='vertical' onFinish={onFinish}>
          {steps[currentStep].content}
        </Form>
      </div>
      <div className='mt-8 flex justify-between'>
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
      </div>
    </div>
  );
}
