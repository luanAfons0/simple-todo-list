/* eslint no-unused-vars: 0 */
async function onSubmit() {
    const url = window.location.href.split("/")
    const taskId = url[url.length - 1]

    if (!taskId) {
        window.alert("Task not found!");
        return;
    }

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;

    if (title == "" || description == "" || status == "") {
        window.alert("All information needs to be filled in");
        return;
    }

    const response = await fetch(`/task/${taskId}`, {
        headers: {
            "content-type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
            title: title,
            description: description,
            status: status,
        }),
    });

    if (!response.ok) {
        window.alert(
            "An error has occurred!\nPlease check the information or try again later!",
        );
        return;
    }

    window.location.replace("/");
}
