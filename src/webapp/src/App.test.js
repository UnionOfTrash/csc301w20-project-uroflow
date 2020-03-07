import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {PatientList, RecordList, SearchPanel} from "./MainPanel"
import {
  fireEvent,
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect'

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('Check if [ID] element in document', () => {
  const { getByText } = render(<SearchPanel />);
  const linkElement = getByText("ID");
  expect(linkElement).toBeInTheDocument();
});
test('Check if [Add Patient] element not popup without clicking [New Patient] button',()=> {
  const { getByText } = render(<SearchPanel />);
  const leftClick = { button: 1 }
  //fireEvent.click(getByText('New Patient'), leftClick)
  expect(getByText("Add New Patient")).toBeInTheDocument();
});
test('Check if [Add Patient] element popup after clicking [New Patient] button',()=> {
  const { getByText } = render(<SearchPanel />);
  const leftClick = { button: 1 }
  fireEvent.click(getByText('New Patient'), leftClick)
  expect(getByText("Add New Patient")).toBeInTheDocument();
});
describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});