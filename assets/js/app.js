import '../css/app.scss';

import  {Dropdown} from "bootstrap";

document.addEventListener('DOMContentLoaded',() => {
   enableDropDown();
});

const enableDropDown = () => {
   var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
   var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new Dropdown(dropdownToggleEl)
   })
}