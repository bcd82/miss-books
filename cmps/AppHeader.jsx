const { NavLink, withRouter } = ReactRouterDOM;

 const _AppHeader = (props) => {
  return (
    <header className="header">
      <div className="main-header main-layout">
      <h1 className="logo" onClick={()=>{
        props.history.push('/')
      }}>Miss Book</h1>
      <nav>
        <NavLink to='/' exact={true}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/book">Books</NavLink>
      </nav>
      </div>
    </header>
  );
};

export const AppHeader = withRouter(_AppHeader);
