// Function to update the terminal content
function updateTerminalContent(content) {
    const terminalElement = document.getElementById('terminal');
    terminalElement.textContent = content;
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
            updateTerminalContent(`${terminalElement.textContent}${command}\nOutput of ${command}: Lorem ipsum dolor sit amet.\n\n`);
            inputField.value = ''; // Clear the input field after executing
        }
    });
});
