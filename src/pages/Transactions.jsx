import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const mockTransactions = [
  { id: 1, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00', type: 'Electronic', category: 'Food', note: 'lorem ipsum' },
  { id: 2, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00', type: 'Electronic', category: 'Food', note: 'lorem ipsum' },
  { id: 3, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00', type: 'Electronic', category: 'Food', note: 'lorem ipsum' },
  { id: 4, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00', type: 'Electronic', category: 'Food', note: 'lorem ipsum' },
  { id: 5, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00', type: 'Electronic', category: 'Food', note: 'lorem ipsum' },
]

function Transactions() {
  const navigate = useNavigate()
  const location = useLocation()
  const account = location.state || { title: 'Argent Bank Checking (x3448)', amount: '$48,098.43', description: 'Available balance' }
  const [openId, setOpenId] = useState(null)
  const [editCategory, setEditCategory] = useState({})
  const [editNote, setEditNote] = useState({})

  const toggleTransaction = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
      <Navbar />
      <main className="main transactions-page">
        <div className="transactions-container">
          <section className="transaction-account">
            <div className="transaction-account-info">
              <p className="transaction-account-title">{account.title}</p>
              <p className="transaction-account-amount">{account.amount}</p>
              <p className="transaction-account-desc">{account.description}</p>
            </div>
            <button className="transaction-close-btn" onClick={() => navigate('/profile')}>
              <i className="fa fa-times"></i>
            </button>
          </section>

          <section className="transaction-table">
            <div className="transaction-header-row">
              <span>Date</span>
              <span>Description</span>
              <span>Amount</span>
              <span>Balance</span>
              <span></span>
            </div>

            {mockTransactions.map((t) => (
              <div key={t.id} className="transaction-item">
                <div className="transaction-row" onClick={() => toggleTransaction(t.id)}>
                  <span className="t-date">{t.date}</span>
                  <span className="t-desc">{t.description}</span>
                  <span className="t-amount">{t.amount}</span>
                  <span className="t-balance">{t.balance}</span>
                  <span className="t-chevron">
                    <i className={`fa ${openId === t.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </span>
                </div>

                {openId === t.id && (
                  <div className="transaction-detail">
                    <div className="transaction-detail-row">
                      <span className="detail-label">Transaction type</span>
                      <span className="detail-value">{t.type}</span>
                    </div>
                    <div className="transaction-detail-row">
                      <span className="detail-label">Category</span>
                      <div className="detail-editable">
                        {editCategory[t.id] ? (
                          <select
                            defaultValue={t.category}
                            onBlur={() => setEditCategory({ ...editCategory, [t.id]: false })}
                            autoFocus
                          >
                            <option>Food</option>
                            <option>Transport</option>
                            <option>Shopping</option>
                            <option>Health</option>
                            <option>Other</option>
                          </select>
                        ) : (
                          <>
                            <span className="detail-value">{t.category}</span>
                            <button className="edit-icon-btn" onClick={() => setEditCategory({ ...editCategory, [t.id]: true })}>
                              <i className="fa fa-pencil"></i>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="transaction-detail-row">
                      <span className="detail-label">Note</span>
                      <div className="detail-editable">
                        {editNote[t.id] ? (
                          <input
                            type="text"
                            defaultValue={t.note}
                            onBlur={() => setEditNote({ ...editNote, [t.id]: false })}
                            autoFocus
                          />
                        ) : (
                          <>
                            <span className="detail-value">{t.note}</span>
                            <button className="edit-icon-btn" onClick={() => setEditNote({ ...editNote, [t.id]: true })}>
                              <i className="fa fa-pencil"></i>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Transactions
