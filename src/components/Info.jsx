export default function Info({Navbar}){
    return(
        <>
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
  <a className="navbar-brand" href="#">{Navbar}</a>
  <ul className="nav nav-pills">
    <li classNameName="nav-item">,
      <a classNameName="nav-link" href="#scrollspyHeading1">{Frist}</a>
    </li>
    <li classNameName="nav-item">
      <a classNameName="nav-link" href="#scrollspyHeading2">{Second}</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">{Third}</a></li>
        <li><a classNameName="dropdown-item" href="#scrollspyHeading4">{Fourth}</a></li>
        <li><hr classNameName="dropdown-divider"/></li>
        <li><a classNameName="dropdown-item" href="#scrollspyHeading5">{Fifth}</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>
        </>
    );
}