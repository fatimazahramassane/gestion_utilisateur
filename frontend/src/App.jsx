import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'http://localhost:5000/api/users'

function App() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState({ name: '', email: '' })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)

  // Charger les utilisateurs au démarrage
  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Soumettre le formulaire (Créer ou Modifier)
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!form.name || !form.email) {
      alert('Veuillez remplir tous les champs')
      return
    }

    try {
      const method = editingId ? 'PUT' : 'POST'
      const url = editingId ? `${API_URL}/${editingId}` : API_URL

      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setForm({ name: '', email: '' })
        setEditingId(null)
        fetchUsers()
      }
    } catch (error) {
      console.error('Erreur:', error)
    }
  }

  // Modifier un utilisateur
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email })
    setEditingId(user.id)
  }

  // Supprimer un utilisateur
  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        })
        if (response.ok || response.status === 204) {
          fetchUsers()
        }
      } catch (error) {
        console.error('Erreur:', error)
      }
    }
  }

  // Annuler l'édition
  const handleCancel = () => {
    setForm({ name: '', email: '' })
    setEditingId(null)
  }

  return (
    <div className="container">
      <h1> Gestion des Utilisateurs</h1>
         =
      <img src="https://img-c.udemycdn.com/course/480x270/4039152_884e_11.jpg" alt="A beautiful scenery" />

   
      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="btn btn-primary">
          {editingId ? '✏️ Modifier' : '➕ Ajouter'}
        </button>
        {editingId && (
          <button type="button" onClick={handleCancel} className="btn btn-secondary">
            Annuler
          </button>
        )}
      </form>

      {/* Liste des utilisateurs */}
      <div className="users-list">
        {loading ? (
          <p>Chargement...</p>
        ) : users.length === 0 ? (
          <p className="empty">Aucun utilisateur trouvé</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>
              <div className="user-actions">
                <button 
                  onClick={() => handleEdit(user)} 
                  className="btn btn-edit"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => handleDelete(user.id)} 
                  className="btn btn-delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App