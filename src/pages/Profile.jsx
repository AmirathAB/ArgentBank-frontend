import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../features/auth/authSlice'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccountCard from '../components/AccountCard'
import EditUserForm from '../components/EditUserForm'

const accounts = [
  { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
  { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
  { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
]

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token, user, isLoggedIn } = useSelector((state) => state.auth)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
      return
    }
    dispatch(fetchUserProfile())
  }, [isLoggedIn, token, navigate, dispatch])

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className={isEditing ? 'header header-editing' : 'header'}>
          {isEditing ? (
            <EditUserForm onClose={() => setIsEditing(false)} />
          ) : (
            <>
              <h1>
                Welcome back<br />
                {user ? `${user.firstName} ${user.lastName}` : '...'}!
              </h1>
              <button className="edit-button" onClick={() => setIsEditing(true)}>
                Edit Name
              </button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account) => (
          <AccountCard
            key={account.title}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Profile
