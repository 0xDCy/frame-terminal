// Function to update the terminal content
function updateTerminalContent(content) {
    const terminalElement = document.querySelector('#terminal pre');
    terminalElement.textContent += content + '\n';
}

// Initial content for the terminal
updateTerminalContent('Welcome to the Retro Terminal!\n\n');

// Event listener for user input
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.createElement('textarea');
    inputField.id = 'input';
    inputField.placeholder = 'Type here...';
    inputField.autocomplete = 'off';
    document.body.appendChild(inputField);

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            // Execute the command and update the terminal content
            const command = inputField.value;
            // You would implement the command execution logic here
            console.log(`Executing command: ${command}`);
            updateTerminalContent(`You executed: ${command}`);
            inputField.value = ''; // Clear the input field after executing
        }
    });
});
