

const students = [
    {
        name:"Janak Pathak",
        email:"jab@gmail.com",
        sId:1
    },
    {
        name:"Pradip Pyakurel",
        email:"py@gmail.com",
        sId:2
    },
    {
        name:"Adam Giri",
        email:"adam@gmail.com",
        sId:3
    },
    {
        name:"Jack Lamechhane",
        email:"jack@gmail.com",
        sId:4
    },
]
function Student(){
  return (
    <div>
      <h2>Student List</h2>
      {students.map((student)=> (
        <div>
            <p>Name:{student.name}</p>
            <p>Email:{student.email}</p>
        </div>
      ))}
    </div>
  )

}
export default Student
