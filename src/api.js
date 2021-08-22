export const getUsers = () => fetch("http://localhost:4000/").then(res => res.json())

export const registerUser = (todo) => fetch("http://localhost:4000/register", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
})