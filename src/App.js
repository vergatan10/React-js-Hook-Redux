import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Aplikasi Kontak App</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;

// buat kirim data dari component,
// lalu kirim dan buat handler action api axios dari actions,
// lalu buat reducer untuk menampung data dari state
