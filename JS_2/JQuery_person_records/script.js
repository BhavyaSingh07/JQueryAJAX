$(document).ready(function () {
    function Person(firstName, lastName, address, city) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
    }

    var peopleArray = new Array(
      new Person("John", "Doe", "Dresden Street 1", "Dresden"),
      new Person("Jane", "Doe", "Berlin Street 2", "Berlin")
    );
  
    var showHideSpeed = 200;

    var firstNameField = $("#firstName");
    var lastNameField = $("#lastName");
    var addressField = $("#address");
    var cityField = $("#city");
    var peopleDropdown = $("#people");
    var displayAddress = $("#displayAddress");
    var infoField = $("#info");
    var entryField = $("#entry");
    var reviewField = $("#review");
  
    var personEntryBtn = $("#personEntryToggle");
    var reviewBtn = $("#reviewToggle");
    var addPersonBtn = $("#addPersonBtn");

    firstNameField.focus();
    showPerson();

    personEntryBtn.click(personEntryToggle);
    reviewBtn.click(reviewToggle);
    addPersonBtn.click(addPerson);
    peopleDropdown.change(ddlOnChange);
    $(document).keypress(onEnterPress);
  
    var formShown = true;
    function personEntryToggle() {
      if (formShown) entryField.hide(showHideSpeed);
      else entryField.show(showHideSpeed);
      formShown = !formShown;
    }
  
    var displayShown = true;
    function reviewToggle() {
      if (displayShown) reviewField.hide(showHideSpeed);
      else reviewField.show(showHideSpeed);
      displayShown = !displayShown;
    }
  
    function ddlOnChange() {
      var address = peopleArray[$(this).val()].address;
      var city = peopleArray[$(this).val()].city;
      displayAddress.html(address + ", " + city);
    }
  
    function onEnterPress(event) {
      if (event.keyCode == "13") {
        addPerson();
      }
    }
  
    function addPerson() {
      var fieldsEntered = true;
      $("input[type='text']").each(function (index, inputElement) {
        if ($(inputElement).val() == "") {
          fieldsEntered = false;
          return false;
        }
      });
  
      if (fieldsEntered) {
        let person = new Person(
          firstNameField.val(),
          lastNameField.val(),
          addressField.val(),
          cityField.val()
        );
        peopleArray.push(person);
        resetForm();
        showPerson();
      } else {
        infoField.html("You didn't fill all fields!");
      } 
    }
  
    function showPerson() {
      peopleDropdown.children().remove();
  
      $(peopleArray).each(function (index, person) {
        var fullName = person.firstName + " " + person.lastName;
        var ddlNewOption = new Option(fullName, index);
        peopleDropdown.append(ddlNewOption);
      });
    }
  
    function resetForm() {
      $("input[type=text]").val("");
      infoField.html("");
      firstNameField.focus();
    }
  });
  