
function showAlert() {
	alert(1);
}


function addEntriesToDocument() {
	fetch('https://diederik-onboarding.builtwithdark.com/getAll')
	  .then(response => response.json())
	  .then(data => {
		const entriesList = document.getElementById('entries-list');
		data.forEach(entry => {
		  const li = document.createElement('li');
		  li.textContent = `Name: ${entry.Name}, Phone: ${entry.PhoneNr}`;
		  entriesList.appendChild(li);
		});
	  })
	  .catch(error => console.error(error));
  }