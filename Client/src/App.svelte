<script>
  import Home from './components/Home.svelte';
  import Login from './components/Login.svelte';
  import SignUp from './components/SignUp.svelte';
  import { Router, Link, Route } from 'svelte-routing';
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/Signup">SignUp</Link>
    <Link to="/Login">Login</Link>
  </nav>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/SignUp">
    <SignUp />
  </Route>
  <Route path="/Login">
    <Login />
  </Route>
</Router>

<main>
</main>
