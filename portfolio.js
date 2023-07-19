// Add a DOMContentLoaded event listener to ensure the code runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the toggle switch and the icon container
   const toggleSwitch = document.getElementById('toggleSwitch'); 
  
    // Add an event listener to the toggle switch
    toggleSwitch.addEventListener('change', () => {
      // Toggle the background color based on the switch state
      document.body.style.backgroundColor = toggleSwitch.checked ? 'black' : 'white';
      document.body.style.color = toggleSwitch.checked ? 'white' : 'black';
      
  
      // Toggle the visibility of the moon and sun icons
      document.getElementById('moonIcon').style.display = toggleSwitch.checked ? 'inline' : 'none';
      document.getElementById('home').style.color = toggleSwitch.checked ? 'white' : 'black';
      document.getElementById('name').style.color = toggleSwitch.checked ? 'white' : 'black';
      document.getElementById('portfo').style.color = toggleSwitch.checked ? 'white' : 'black';
      document.getElementById('interest').style.color = toggleSwitch.checked ? 'white' : 'black';
      document.getElementById('serve').style.color = toggleSwitch.checked ? 'white' : 'black';
      document.getElementById('educa').style.color = toggleSwitch.checked ? 'white' : 'black';
      document.getElementById('sunIcon').style.display = toggleSwitch.checked ? 'none' : 'inline';
    });
  });
  