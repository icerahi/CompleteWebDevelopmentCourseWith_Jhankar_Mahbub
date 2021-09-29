import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Friends from "./components/friends/Friends";
import About from "./components/about/About";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import FriendDetail from "./components/friendDetail/FriendDetail";
import Culture from "./components/culture/Culture";
import PostDetail from "./components/postDetail/PostDetail";
 
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/friends" component={Friends} />
          <Route path="/friend/:friendId" component={FriendDetail} />
          <Route path="/posts/:postId" component={PostDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/culture" component={Culture} />
          <Route path="*" component={NotFound} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
