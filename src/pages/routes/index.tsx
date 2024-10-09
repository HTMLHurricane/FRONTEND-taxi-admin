// import CRUDModule from '@/components/modules/CrudModule'
// import React from 'react'

// interface User {
//   id: string
//   name: string
//   email: string
//   age: number
// }

// const Routes: React.FC = () => {
//   const columns = [
//     {
//       title: 'Имя',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Возраст',
//       dataIndex: 'age',
//       key: 'age',
//     },
//   ]

//   const data: User[] = [
//     { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', age: 30 },
//     { id: 2, name: 'Мария Петрова', email: 'maria@example.com', age: 25 },
//   ]

//   const handleAdd = async (record: User) => {
//     // Здесь должна быть логика добавления записи в базу данных
//     console.log('Добавление:', record)
//   }

//   const handleEdit = async (id: string, record: User) => {
//     // Здесь должна быть логика редактирования записи в базе данных
//     console.log('Редактирование:', id, record)
//   }

//   const handleDelete = async (id: string) => {
//     // Здесь должна быть логика удаления записи из базы данных
//     console.log('Удаление:', id)
//   }

//   return (
//     <CRUDModule<User>
//       data={data}
//       columns={columns}
//       onAdd={handleAdd}
//       onEdit={handleEdit}
//       onDelete={handleDelete}
//     />
//   )
// }

// export default Routes
