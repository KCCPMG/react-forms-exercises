import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';
import Todo from './components/Todo';

test("App smoke test", function() {
  render(<App />);
})

test("TodoList smoke test", function() {
  render(<TodoList />);
})

test("NewTodoForm smoke test", function() {
  render(<NewTodoForm />);
})

test("Todo smoke test", function() {
  render(<Todo />);
})

test("end to end", function(){
  const { container, getByLabelText, queryByText }  = render(<App />);

  expect(container.querySelector(".NewTodoForm")).not.toBeNull();

  const todoTextInput = getByLabelText("Todo Text:");
  const todoButton = queryByText("Create Todo");

  fireEvent.change(todoTextInput, {target: {value: "Complete this app"}})
  fireEvent.click(todoButton);

  expect(container.querySelectorAll(".Todo").length).toBe(1);
  expect(container.querySelectorAll(".Todo")[0].querySelector("span").textContent).toBe("Complete this app");

  fireEvent.change(todoTextInput, {target: {value: "Write these tests"}})
  fireEvent.click(todoButton);

  expect(container.querySelectorAll(".Todo").length).toBe(2);
  expect(container.querySelectorAll(".Todo")[1].querySelector("span").textContent).toBe("Write these tests");

  fireEvent.click(document.querySelectorAll(".Todo button")[0]);
  expect(container.querySelectorAll(".Todo").length).toBe(1);
  expect(container.querySelectorAll(".Todo")[0].querySelector("span").textContent).toBe("Write these tests");

  fireEvent.click(document.querySelectorAll(".Todo button")[0]);
  expect(container.querySelectorAll(".Todo").length).toBe(0);

})