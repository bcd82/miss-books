const { NavLink } = ReactRouterDOM;

export const AppHeader = (props) => {
  return (
    <header className="header">
      <h1 className="logo">Miss Book</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/book">Books</NavLink>
      </nav>
    </header>
  );
};
