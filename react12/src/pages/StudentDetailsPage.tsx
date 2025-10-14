import { useNavigate, useParams } from "react-router";

const students = [
    {
        name:"Janak Pathak",
        email: "jab@gmail.com",
        sId: 1,
        rollNumber: 501,
        bio: "I am a student from abc"
    },
    {
        name:"Pradip Pyakurel",
        email: "py@gmail.com",
        sId: 2,
        rollNumber: 502,
        bio: "I am a student from sss"
    },
    {
    name:"Adam Giri",
        email: "adam@gmail.com",
        sId: 3,
        rollNumber: 503,
        bio: "I am a student from sos"
    },
    {
        name:"Jack Lamechhane",
        email: "jack@gmail.com",
        sId: 4,
        rollNumber: 504,
        bio: "I am a student from la"
    },
]
  
function StudentDetailsPage() {
  const { studentId } = useParams();
  
  const student = students.find(student => {
    return student.sId === Number(studentId);
  });

  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate('/students');
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div style={{ marginTop: "20px" }}>This is student's details page</div>
      
      
        <div>
          <p>Name: {student?.name}</p>
          <p>Bio: {student?.bio}</p>
          <p>Roll Number: {student?.rollNumber}</p>
          <p>Email: {student?.email}</p>
        </div>
      
    </div>
  );
}
export default StudentDetailsPage;