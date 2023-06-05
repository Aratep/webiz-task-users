import { Routes, Route } from "react-router-dom";

// PAGES
import UsersPage from 'pages/users/Users.page';
import PostsPage from 'pages/posts/PostsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="posts">
        <Route path=":userName/:userId" element={<PostsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
