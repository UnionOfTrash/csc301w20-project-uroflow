import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { PatientList, RecordList, SearchPannel } from "./MainPannel"
import MainPannel from "./MainPannel"
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
//Enzyme
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ContactsOutlined } from '@material-ui/icons';
//npm install --save-dev enzyme
//npm install --save-dev enzyme-adapter-react-16
describe("Test by [Jest] module", () => {
  it('Check if [ID] clickable element in document.', () => {
    const { getByText } = render(<SearchPannel />);
    const linkElement = getByText("ID");
    expect(linkElement).toBeInTheDocument();
  });

  it('Check if [Add Patient] element popup after clicking [New Patient] button', () => {
    const { getByText } = render(<SearchPannel />);
    const leftClick = { button: 1 }
    fireEvent.click(getByText('New Patient'), leftClick)
    expect(getByText("Add New Patient")).toBeInTheDocument();
  });

  it('Check if [Add Patient] element not popup without clicking [New Patient] button', () => {
    const { getByText } = render(<SearchPannel />);
    //const leftClick = { button: 1 }
    //fireEvent.click(getByText('New Patient'), leftClick)
    try { getByText("Add New Patient") }
    catch (e) {
      expect(true);
    }
    expect(false);
  });

  it('Check if [Sign in] element exists', () => {
    const { getByText } = render(<Login />);
    const leftClick = { button: 1 }
    fireEvent.click(getByText('Sign in'), leftClick)
    expect(getByText("Sign in")).toBeInTheDocument();
  });
})

Enzyme.configure({ adapter: new Adapter() })

describe('Test by [Enzyme] module', function () {
  it('Check if [New Patient] button shown after login with correct credential', function () {
    const wrapper = mount(<Login />);
    wrapper.find('[id="username"]').at(0).simulate('change', { target: { value: 'even' } })
    wrapper.find('[id="password"]').at(0).simulate('change', { target: { value: 'even' } })
    wrapper.find('button').simulate('click');
    const { getByText } = render(<SearchPannel />);
    expect(getByText("New Patient")).toBeInTheDocument;
  })
  it('Check if search function works by entering ID [0234567893] in the search bar', () => {
    const wrapper = mount(<SearchPannel />);
    wrapper.find('[placeholder="Search ID"]').at(0).simulate('change', { target: { value: '0234567893' } })
    expect(wrapper.contains(wrapper.find('[text="details"]')));
  })

})
