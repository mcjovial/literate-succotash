import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <div>
      <iframe src="https://consentprotect.com/declaration/aadc5a46-d245-4936-98fc-58f1ee680ed5" title="cookie decalration" width="100%" height="100%" />
    </div>
    <Footer />
  </div>
);

export default App;
