import { render, container, fireEvent, getByLabelText, queryByText } from '@testing-library/react';
import App from './App';
import Box from './components/Box';
import BoxList from './components/BoxList';
import NewBoxForm from './components/NewBoxForm';


test("App smoke test", function() {
  render(<App/>);
})

test("Box smoke test", function() {
  render(<Box height={50} width={50} backgroundColor="agehg" />)
})

test("BoxList smoke test", function() {
  render(<BoxList />)
})

test("NewBoxForm smoke test", function() {
  render(<NewBoxForm  />)
})

test("end to end", function(){
  const { container, getByLabelText, queryByText }  = render(<App />);

  expect(container.querySelector(".NewBoxForm")).not.toBeNull();
  expect(container.querySelectorAll(".Box").length).toBe(0);

  const newBoxForm = container.querySelector(".NewBoxForm");
  const widthInput = getByLabelText("Width")
  const heightInput = getByLabelText("Height")
  const bgColorInput = getByLabelText("Background Color")
  const createBoxButton = queryByText("Create Box");

  fireEvent.change(widthInput, {target: {value: 150}} );
  fireEvent.change(heightInput, {target: {value: 200}} );
  fireEvent.change(bgColorInput, {target: {value: "pink"}});
  fireEvent.click(createBoxButton);

  expect(container.querySelectorAll(".Box").length).toBe(1);

  expect(container.querySelector(".Box").style._values).toEqual({
    "height": "200px",
    "width": "150px",
    "background-color": "pink"
  })

  fireEvent.change(widthInput, {target: {value: 275}} );
  fireEvent.change(heightInput, {target: {value: 8}} );
  fireEvent.change(bgColorInput, {target: {value: "lightgray"}});
  fireEvent.click(createBoxButton);

  

  expect(container.querySelectorAll(".Box").length).toBe(2);

  expect(container.querySelectorAll(".Box")[1].style._values).toEqual({
    "height": "8px",
    "width": "275px",
    "background-color": "lightgray"
  })
})