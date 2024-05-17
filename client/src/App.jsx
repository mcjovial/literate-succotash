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
      <iframe src="https://consentprotect.com/declaration/01c47c49-4226-4d9c-bae5-9ba85499af18" width="100%" height="100%" title="cookie decalration"/>
    </div>
    <Footer />
  </div>
);

export default App;
