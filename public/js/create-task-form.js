async function onSubmit() {
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const status = document.getElementById("status").value

    if (title == "" || description == "" || status == "") {
        window.alert("All information needs to be filled in")
        return;
    }

    const response = await fetch("/task", {
        headers: {
            'content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            title: title,
            description: description,
            status: status
        })
    })

    if (!response.ok) {
        window.alert("An error has occurred!\nPlease check the information or try again later!")
        return;
    }

    window.location.replace("/")
}
