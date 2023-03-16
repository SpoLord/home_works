//подія: назва, дедлайн, комент

let events = ""; //створюється змінна events з локальною областю видимості, сука. В якості значення ми присвоїли їй пусту строку.

while (confirm("Are you in joe?")) {
    let eventName = prompt("Name of event: ");
    let eventDeadline = prompt("Deadline of event: ");
    let eventComment = prompt("Comment of event: ");

    events += `* ${eventName}, ${eventDeadline}, ${eventComment};\n`
}

console.log(events)