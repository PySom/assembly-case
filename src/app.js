import { Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";

export default function App() {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/:term' component={Home} />
        </Layout>
      );
}

