async function deleteTask(event) {
    const taskId = event.target.id

    if (!taskId) {
        window.alert("An error has occurred!\nPlease check the information or try again later!")
        return;
    }

    if (confirm("Attention!\nThis action is irreversible, do you want to continue?")) {
        const response = await fetch(`/task/${taskId}`, {
            headers: {
                'content-type': 'application/json'
            },
            method: "DELETE",
        })

        if (!response.ok) {
            window.alert("An error has occurred!\nPlease check the information or try again later!")
            return;
        }

        window.location.reload()
    }
}