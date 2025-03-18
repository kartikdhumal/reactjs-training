import useFetch from "./hooks/useFetch";
import "./styles/home.scss";

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users","GET");

  if (error) {
    console.log(error);
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="container">
      <h1 className="title">User Directory</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="user-list">
          {data &&
            data.map((user) => (
              <div key={user.id} className="user-card">
                <div className="avatar">{user.name.charAt(0)}</div>
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>City:</strong> {user.address.city}</p>
                  <p><strong>Company:</strong> {user.company.name}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;