const data = []


for (let i=1; i<=10; i++){
    const new_note = {
        id: i,
        title: "Note Title "+i,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsa."
    }
    data.push(new_note)
}

export default data