import React, { useState } from "react";

function TeacherProfile() {
  const [showModal, setShowModal] = useState(false);
  const [doubtText, setDoubtText] = useState("");

  const teachersData = [
    {
      name: "Mr Harpreet Gujral",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "https://tse4.mm.bing.net/th?id=OIP.fmUrExUMup8nihEt1LNwPgHaHa&pid=Api&P=0&h=220",
    },
    {
      name: "Mr Prittam Bhatia",
      role: "developer",
      playlists: 4,
      videos: 15,
      likes: 120,
      image: "https://tse3.mm.bing.net/th?id=OIP.INlixAFunYB7kkyUUQij0AHaHa&pid=Api&P=0&h=220",
    },
    {
      name: "Mrs Kalpana Goyal",
      role: "developer",
      playlists: 2,
      videos: 9,
      likes: 40,
      image: "https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg",
    },
    {
      name: "Mr Atul Vishwakarma",
      role: "developer",
      playlists: 4,
      videos: 11,
      likes: 68,
      image: "https://tse2.mm.bing.net/th?id=OIP.1VQWtqjZ4dDe38lQ4lYoDgHaGw&pid=Api&P=0&h=220",
    },
    {
      name: "Miss Niyati Sharma",
      role: "developer",
      playlists: 3,
      videos: 17,
      likes: 100,
      image: "https://tse3.mm.bing.net/th?id=OIP.VDHZ6Z8ZN3CZBBBSQknlRgHaHa&pid=Api&P=0&h=220",
    },
    {
      name: "Mrs Manju Verma",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58477.jpg",
    },
    {
      name: "Mr Shivam Sachdeva",
      role: "developer",
      playlists: 4,
      videos: 20,
      likes: 1101,
      image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-5507.jpg",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your doubt: ${doubtText}`);
    setDoubtText("");
    setShowModal(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h1>Profile Details</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.fmUrExUMup8nihEt1LNwPgHaHa&pid=Api&P=0&h=220"
            alt="Mr Anup Singh"
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <div style={{ marginLeft: "20px" }}>
            <h3>Mr Anup Singh</h3>
            <span>(developer)</span>
          </div>
        </div>
        <button onClick={() => setShowModal(true)} style={{ marginTop: "10px" }}>
          Ask Doubt
        </button>
        <div style={{ marginTop: "10px" }}>
          <p>Total playlists: <span>4</span></p>
          <p>Total videos: <span>18</span></p>
          <p>Total likes: <span>1208</span></p>
          <p>Total comments: <span>52</span></p>
        </div>
      </section>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h2>Ask Your Doubt</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                value={doubtText}
                onChange={(e) => setDoubtText(e.target.value)}
                rows="4"
                required
                style={{ width: "100%", padding: "10px" }}
              />
              <button type="submit" style={{ marginTop: "10px" }}>
                Submit
              </button>
            </form>
            <button onClick={() => setShowModal(false)} style={{ marginTop: "10px" }}>
              Close
            </button>
          </div>
        </div>
      )}

      <section style={{ padding: "20px" }}>
        <h1>Expert Teachers</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {teachersData.map((teacher, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                style={{ width: "100px", borderRadius: "50%" }}
              />
              <h3>{teacher.name}</h3>
              <span>{teacher.role}</span>
              <p>Total playlists: <span>{teacher.playlists}</span></p>
              <p>Total videos: <span>{teacher.videos}</span></p>
              <p>Total likes: <span>{teacher.likes}</span></p>
              <button style={{ marginTop: "10px" }}>View Profile</button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px", textAlign: "center", backgroundColor: "#333", color: "#fff" }}>
        &copy; 2024 by <span>SSS</span> | All rights reserved!
      </footer>
    </div>
  );
}

export default TeacherProfile;
