import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from '../features/auth/authSlice'

function EditUserForm({ onClose }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [userName, setUserName] = useState(user?.userName || '')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await dispatch(updateUserProfile({ userName }))
    if (updateUserProfile.fulfilled.match(result)) {
      onClose()
    } else {
      setError(result.payload || 'Error updating profile')
    }
  }

  return (
    <div className="edit-user-form">
      <h2>Edit user info</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            value={user?.firstName || ''}
            disabled
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            value={user?.lastName || ''}
            disabled
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="edit-form-buttons">
          <button type="submit" className="edit-button">Save</button>
          <button type="button" className="edit-button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditUserForm
