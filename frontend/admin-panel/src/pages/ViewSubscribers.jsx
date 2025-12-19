import { useEffect, useState } from "react";
import axios from "axios";

const ViewSubscribers = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/subscribers")
      .then(res => setSubs(res.data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Newsletter Subscribers</h2>

      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {subs.map(s => (
            <tr key={s._id}>
              <td>{s.email}</td>
              <td>{new Date(s.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSubscribers;
