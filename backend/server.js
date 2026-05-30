const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de données temporaire (tableau en mémoire)
let users = [
  { id: 1, name: 'fatimazahra', email: 'fatimazahra@gmail.com' },
  { id: 2, name: 'malak', email: 'malak@gmail.com' }
];
let nextId = 3;


app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Nom et email requis' });
  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});


app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' });
  res.json(user);
});


app.put('/api/users/:id', (req, res) => {
  const { name, email } = req.body;
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Utilisateur introuvable' });
  users[index] = { id: users[index].id, name, email };
  res.json(users[index]);
});


app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Utilisateur introuvable' });
  users.splice(index, 1);
  res.status(204).send();
});


app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});