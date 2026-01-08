body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: url("images/background-chat.jpg") center/cover fixed;
}

header {
  background: rgba(255,182,193,0.95);
  text-align: center;
  padding: 30px;
}

.logo {
  font-family: 'Pacifico', cursive;
  font-size: 4em;
}

.animated-title {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

nav button {
  background: hotpink;
  border: none;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
}

nav button:hover {
  transform: translateY(-2px);
}

.page {
  display: none;
  padding: 40px;
  background: rgba(255,255,255,0.95);
}

.page.active { display: block; }

.grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 15px;
  width: 250px;
  text-align: center;
}

.card img {
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
}

.card p {
  font-weight: 500;
  margin: 10px 0 5px 0;
}

.card span {
  font-weight: 700;
  color: hotpink;
}

.reviews {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.review {
  background: pink;
  padding: 15px;
  border-radius: 15px;
  max-width: 250px;
  text-align: center;
}

.contact-form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-form input,
.contact-form textarea,
.contact-form button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1em;
}

.contact-form button {
  background: hotpink;
  color: white;
  border: none;
  cursor: pointer;
}

footer {
  background: pink;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
}

.paw {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 40px;
  animation: float 2s infinite alternate;
}

@keyframes float {
  from { transform: translateY(0); }
  to { transform: translateY(-20px); }
}

.section-title {
  text-align: center;
  font-size: 2em;
  margin: 40px 0 20px 0;
  color: hotpink;
  font-family: 'Pacifico', cursive;
}
