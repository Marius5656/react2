# 💎 Mineralų galerija – React + Node projektas

## 🧭 Aprašymas
Šis projektas – tai **pilnas „front-end + back-end“ sprendimas**, skirtas mineralų galerijai.  
Naudojamas **React (Vite)** frontendas ir **Node.js/Express** serveris su `multer` biblioteka paveikslėliams įkelti.  
Vartotojas gali:
- Peržiūrėti mineralų sąrašą su nuotraukomis  
- Pridėti naują mineralą (pavadinimas, aprašymas, paveikslėlis)  
- Ištrinti mineralą iš sąrašo  

---

## ⚙️ Technologijos

**Frontend:**
- React (Vite)
- Fetch API
- CSS (responsyvus dizainas)

**Backend:**
- Node.js + Express
- Multer (paveikslėlių įkėlimui)
- CORS
- JSON API

---

## 📁 Projekto struktūra

```
react2/
├── backend/
│   ├── server.js
│   └── uploads/              ← čia saugomi įkelti paveikslėliai
│
├── src/
│   ├── components/
│   │   ├── MineralaiPage.jsx
│   │   ├── Portfolio.jsx
│   │   └── Hero.jsx
│   ├── hooks/
│   │   └── useFetchData.js
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│   └── images/               ← statiniai paveikslėliai galerijai
│
└── README.md
```

---

## 🚀 Kaip paleisti projektą

### 1️⃣ Paleisti **backend**
```bash
cd backend
node server.js
```
Serveris veiks adresu:
👉 [http://localhost:4000](http://localhost:4000)

### 2️⃣ Paleisti **frontend**
```bash
cd react2
npm run dev
```
Frontend veiks adresu:
👉 [http://localhost:5173](http://localhost:5173)

---

## 📸 Paveikslėlių įkėlimas
Naudojamas **Multer** įkėlimui.  
Kai vartotojas prideda naują mineralą, paveikslėlis išsaugomas aplanke:
```
backend/uploads/
```
ir pasiekiamas per URL, pvz.:
```
http://localhost:4000/uploads/1739979983212.jpg
```

---

## 🧩 API pavyzdžiai

**Gauti visus mineralus:**
```
GET http://localhost:4000/mineralai
```

**Pridėti naują mineralą:**
```
POST http://localhost:4000/mineralai
Body (form-data):
  - title: "Kalkakmenis"
  - description: "Statybinis akmuo"
  - image: (paveikslėlis)
```

**Ištrinti mineralą:**
```
DELETE http://localhost:4000/mineralai/2
```

---

## 🪄 Ateities plėtra
- Įvertinimų (rating) sistema  
- Redagavimo (edit) forma  
- Duomenų išsaugojimas duomenų bazėje (pvz., MongoDB arba SQLite)
