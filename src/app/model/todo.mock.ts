import {TodoModel} from "./todo.model";
export const data: TodoModel[] = [
  {
    id: 1,
    dueDate: new Date(),
    title: 'Workshop Angular',
    description: 'Concept for an introductory Angular workshop',
  },
  {
    id: 2,
    dueDate: new Date(),
    title: 'Mock data',
    description: 'Make the mock data that the project will use',
  },
  {
    id: 3,
    dueDate: new Date(),
    title: 'Components',
    description: 'Implement the components of the TODO list web app',
  },

  {
    id: 4,
    dueDate: new Date(),
    title: 'Cards',
    description: 'Implement the cards of the TODO list web app',
  },
]
