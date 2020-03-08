import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {PatientList, RecordList, SearchPanel} from "./MainPanel"
import MainPanel from "./MainPanel"
import {
  fireEvent,
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait, waitForElement,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect'
// import { createMount } from "@material-ui/core/test-utils";
import { Login } from "./Login";
/* Sample : test('renders learn react link', () => {
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
  expect(getByText("Add New Patient")).not.toBeNotInTheDocument();
});

test('Check if [Add Patient] element popup after clicking [New Patient] button',()=> {
  const { getByText } = render(<SearchPanel />);
  const leftClick = { button: 1 }
  fireEvent.click(getByText('New Patient'), leftClick)
  expect(getByText("Add New Patient")).toBeInTheDocument();
});
test('Check if [Sign in] element exists',()=> {
  const { getByText } = render(<Login />);
  const leftClick = { button: 1 }
  fireEvent.click(getByText('Sign in'), leftClick)
  expect(getByText("Sign in")).toBeInTheDocument();
});


describe('Check if [Sign in] works for username [even], password [even]', () => {
  it('Login', async () => {
    const { getByPlaceholderText } = render(<Login />);
  const { getByText} = render(<Login />);

  const leftClick = { button: 1 }
  const unameInput= document.getElementById("username");

  const pswdInput=  document.getElementById("password");

  fireEvent.change(unameInput,  {target: { value: 'even' }} );
  fireEvent.change(pswdInput,  {target: { value: 'even' }} );

  const {getAllByText} = render(<SearchPanel />);
  console.log(((document.getElementsByTagName('button'))[0]).type)

  fireEvent.click((document.getElementsByTagName('button'))[0], leftClick);
  const newPatientBtn = await waitForElement(() => getAllByText("new patient"))
  expect(newPatientBtn.toBeInTheDocument())
  });
});
/*
test('Check if [Sign in] works for username [even], password [even]',()=> {
  const { getByPlaceholderText } = render(<Login />);
  const { getByText} = render(<Login />);

  const leftClick = { button: 1 }
  const unameInput= document.getElementById("username");
  console.log(unameInput.name)
  const pswdInput=  document.getElementById("password");
  console.log(pswdInput.name)
  fireEvent.change(unameInput,  {target: { value: 'even' }} );
  fireEvent.change(pswdInput,  {target: { value: 'even' }} );
  console.log(unameInput.value)
  console.log(pswdInput.value)
  const {getAllByText} = render(<SearchPanel />);
  console.log(((document.getElementsByTagName('button'))[0]).type)

  fireEvent.click((document.getElementsByTagName('button'))[0], leftClick);
  const newPatientBtn = await waitForElement(() => getAllByText("new patient"))
  expect(newPatientBtn.toBeInTheDocument())

});

/*test('Check if search function works by entering ID [0234567893] in the search bar',()=> {

  const { getAllByPlaceholderText } = render(<SearchPanel />);
  const { getByText } = render(<PatientList />);
  //const { getByText } = render(<SearchPanel />);
  
  const searchInputBar= (getAllByPlaceholderText('Search ID'))[0];
  fireEvent.change(searchInputBar,  {target: { value: '0234567893' }} );
  console.log(searchInputBar.value);
  //?Material UI Issues
  
  expect(getByText("0234567893")).toBeInTheDocument();
  expect(getByText("0234567892")).toBeInTheDocument();
});*/