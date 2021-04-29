// This is not a normal JS file, rather a special JS Web worker.
// It does not have immediate access the content of a page, but it 
// has access to the chrome API.

// Some chrome API require special permissions, but not the commands API,
// so we just use it here to write the name of the command that was 
// just invoked.

// https://developer.chrome.com/docs/extensions/reference/commands/

console.log('I am alive in the background!');

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});