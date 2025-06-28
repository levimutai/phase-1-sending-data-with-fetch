// Add your code here
function submitData(name, email) {
  // Data to send
  const formData = {
    name: name,
    email: email
  };

  // Configuration for fetch
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  // Send POST request and handle response/errors
  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      // Append the new id to the DOM
      const newId = document.createElement("div");
      newId.textContent = data.id;
      document.body.appendChild(newId);
    })
    .catch(error => {
      // Append the error message to the DOM
      const errorMsg = document.createElement("div");
      errorMsg.textContent = error.message;
      document.body.appendChild(errorMsg);
    });
}