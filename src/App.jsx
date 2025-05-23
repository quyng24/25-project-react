import './App.css'
import { useState } from 'react'
import SearchBar from './component/github-profile-finder/SearchBar';
import UserProfile from './component/github-profile-finder/UserProfile';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  const searchUser = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);
    try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if(!response.ok) {
      throw new Error( response.status === 404 ? 'User not found' : 'Error fetching user data' )
    }
    const userData = await response.json();
    setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className='app'>

        <h1>Github Profile Finder</h1>
        <SearchBar onSearch={searchUser}/>
        {loading && <div className='loading'>Loading...</div>}
        {error && <div className='error'>{error}</div>}
        {user && <UserProfile user={user}/>}
      </div>
    </>
  )
}

export default App;
