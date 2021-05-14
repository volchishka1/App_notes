function showNotification(message) {
  alert(message)
}

function taskStatusChanged(event) {
  var checkbox = event.target
  var isChecked = checkbox.checked
  if (isChecked) {
    showNotification("You completed the task")
  } else {
    showNotification("The task is incomplited")
  }

}

function createLabel(taskName) {
  var label = document.createElement("label")
  label.textContent = taskName
  return label
}

function createCheckbox() {
  var checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.onchange = taskStatusChanged
  return checkbox
}

function isValidInput(taskName) {
  return taskName !== "" && taskName.length <= 100
}

function addTask(taskName) {
  var label = createLabel(taskName)
  var checkbox = createCheckbox()
  var br = document.createElement("br")
  document.body.append(checkbox, label, br)
}

function createTask() {
  var input = document.getElementById("inputTaskName")
  var inputValue = input.value
  var inputValueFormated = inputValue.split(" ").join("")
  if (isValidInput(inputValueFormated)) {
    addTask(inputValue)
    input.value = ""
  } else {
    showNotification("Incorrect task name")
  }
}
