import PropTypes from 'prop-types';
import './UserProfile.css';
const UserProfile = ({user}) => {
    if(!user) return null;
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className='card-img'>
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="profile-avatar" />
                </div>
                <div className='card-content'>
                    <div className="profile-stats">
                        <div className="profile-info">
                            <p>{user.name || user.login}</p>
                            <p className="username">@{user.login}</p>
                            {user.bio && <p className="bio">{user.bio}</p>}
                        </div>
                        <div className='profile-detail'>
                            <div className="stat">
                                <span className="stat-value">{user.followers}</span>
                                <span className="stat-label">Followers</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{user.following}</span>
                                <span className="stat-label">Following</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{user.public_repos}</span>
                                <span className="stat-label">Repositories</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-details">
                        {user.company && (<p><i className="fas fa-building"></i>{user.company}</p>)}
                        {user.location && (<p><i className="fas fa-map-marker-alt"></i>{user.location}</p>)}
                        {user.blog && (
                        <p>
                            <i className="fas fa-link"></i>
                            <a href={user.blog} target="_blank" rel="noopener noreferrer">
                            {user.blog}
                            </a>
                        </p>
                        )}
                        {user.twitter_username && (
                        <p>
                            <i className="fab fa-twitter"></i>
                            <a
                            href={`https://twitter.com/${user.twitter_username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            @{user.twitter_username}
                            </a>
                        </p>
                        )}
                    </div>

                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="view-profile-button">View GitHub Profile</a>
                </div>
            </div>
        </div>
    )
}
UserProfile.propTypes = {
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      name: PropTypes.string,
      bio: PropTypes.string,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
      public_repos: PropTypes.number.isRequired,
      company: PropTypes.string,
      location: PropTypes.string,
      blog: PropTypes.string,
      twitter_username: PropTypes.string,
      html_url: PropTypes.string.isRequired,
    }),
  };
export default UserProfile;