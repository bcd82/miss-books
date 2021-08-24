const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { BookApp } from "./pages/BookApp.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";
import { BookAdd } from "./pages/BookAdd.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { UserMsg } from "./cmps/UserMsg.jsx";
export function App() {
  return (
    <section className="app">
      <Router>
        <AppHeader />
        <main>
          <Switch>
            <Route path="/book/add" component ={BookAdd}/>
            <Route path="/book/:bookId" component ={BookDetails}/>
            <Route path="/book" component ={BookApp}/>
            <Route path="/about" component ={About}/>
            <Route path="/" component ={Home}/>
          </Switch>
        </main>
        <UserMsg/>
      </Router>
    </section>
  );
}
