document.addEventListener('DOMContentLoaded', () => {
    // Function to update the terminal content
    function updateTerminalContent(content) {
        const terminalElement = document.getElementById('terminal');
        if (terminalElement) { // Check if terminalElement is not null
            terminalElement.textContent = content;
        }
    }

    // Initial content for the terminal
    updateTerminalContent('Welcome to the Retro Terminal!\n\n');

    const inputField = document.createElement('textarea');
    inputField.id = 'input';
    inputField.placeholder = 'Type here...';
    inputField.autocomplete = 'off';
    document.body.appendChild(inputField);

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            const command = inputField.value;
            console.log(`Executing command: ${command}`);

            // Directly access the terminal element here
            const terminalElement = document.getElementById('terminal');
            if (terminalElement) {
                // Update the terminal content by appending the command output
                terminalElement.textContent += `${command}\nOutput of ${command}: Lorem ipsum dolor sit amet.\n\n`;
            }

            inputField.value = ''; // Clear the input field after executing
        }
    });
});
