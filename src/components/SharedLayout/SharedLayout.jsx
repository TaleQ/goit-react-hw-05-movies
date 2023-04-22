import { Outlet, NavLink } from 'react-router-dom';
import { Header, NavList, Container } from './SharedLayout.styled';
import { FcFilmReel } from 'react-icons/fc';
import { Loader } from 'components/Loader/Loader';
import { useCustomContext } from 'context/Context';

export const SharedLayout = () => {
  const { isLoading } = useCustomContext();

  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavLink to="/">
                <FcFilmReel />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Container>
          {isLoading && <Loader />}
          <Outlet />
        </Container>
      </main>
    </>
  );
};
