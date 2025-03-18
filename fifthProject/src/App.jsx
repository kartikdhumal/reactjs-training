import { useState, useEffect } from "react";
import axios from 'axios';
import './styles/home.scss';
// import { debounce } from "./utils/dobouncing";
// import { useCallback } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        try {
          let response = await axios.get("https://jsonplaceholder.typicode.com/users");
          setUsers(response.data);
          setFilteredUsers(response.data);
        } catch (err) {
          console.log("Error fetching users:", err.message);
        } finally {
          setLoading(false);
        }
      }, 300);
    } catch (err) {
      console.log("Error fetching users:", err.message);
      setLoading(false);
    }
  };

  // const debouncedSearch = useCallback(
  //   debounce((query) => {
  //     setDebouncedQuery(query);
  //   }, 3000),
  //   []
  // );

  const handleSearchQuery = (e) => {
    const query = e.target.value;
    setSearchTerm(query)
    setTimeout(() => {
      setSearchQuery(query);
    }, 3000);
    // debouncedSearch(query);
  };

  useEffect(() => {
    console.log("Debounced Search Query:", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, users]);

  return (
    <div className="container">
      <h1 className="title">All Users {users.length > 0 && "- (" + users.length + ")"}</h1>
      <input
        type="text"
        className="input"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearchQuery}
      />
      <div className="user-list">
        {
          loading ? <p className="loading-text">Loading...</p> :
            filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div className="user-card" key={user.id}>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Company: {user.company.name}</p>
                </div>
              ))
            ) : (
              <p className="no-users">No users found</p>
            )}
      </div>
    </div>
  );
}

export default App;
