async function getData(){
    try {
        const response = await axios.get("http://localhost:3000/api/students");
        // console.log(response)
        makeTable(response.data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

function makeTable(data){
    let tableBody = document.querySelector("#userdata");
    let innerdata='';
    data.forEach(item => {
        innerdata += `
        <tr>
            <td>${item._id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
        <td><button onclick="updateData(${item._id})">Edit</button><button onclick="deleteData(${item._id})">Delete</button></td>
        </tr>
        `;
    });

    tableBody.innerHTML = innerdata;
}

async function addData(){
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    try {
        const response = await axios.post("http://localhost:3000/api/students", {
            "_id": id,
            "name": name,
            "email": email,
            "password":password
        });
        getData();
    } catch (error) {
        console.error("Failed to add data:", error);
    }
}

async function updateData(id){
    let newname = document.querySelector("#name").value;
    let newemail= document.querySelector("#email").value;
    let newpassword = document.querySelector("#password").value;
    try {
        await axios.put(`http://localhost:3000/api/students/${id}`, {
            "name": newname,
            "email": newemail,
            "password":newpassword
        });
        getData();
    } catch (error) {
        console.error("Failed to update data:", error);
    }
}

async function deleteData(id){
    try {
        await axios.delete(`http://localhost:3000/api/students/${id}`);
        getData();
    } catch (error) {
        console.error("Failed to delete data:", error);
    }
}
