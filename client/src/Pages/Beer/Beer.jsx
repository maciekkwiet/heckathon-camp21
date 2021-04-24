import Callendar from '../../Components/Callendar/CustomTimeline';
import { useState, useEffect } from 'react';
import { useSocket } from 'socketio-hooks';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import { Bordzik } from '../../Components/Bordzik/Bordzik';
import { Container, Navi, Icons, StyledButton, SideContainer, Title, Person, Name } from '../Daily/DailyStyles';

export const BeerPage = () => {
  const [show, setShow] = useState(false);
  // const [peoples, setPeoples] = useState([{ name: '' }]);
  const [userssss, setUsers] = useState();
  let history = useHistory();

  function handleReturn() {
    history.push('/menu');
  }

  useSocket('USER_JOINED', users => {
    console.log(users);
    setUsers(userssss);
  });

  // useEffect(() => {
  //   let users = JSON.parse(localStorage.getItem('users'));
  //   console.log(users[0].name);
  //   setPeoples(users);
  // }, []);

  return (
    <Container>
      <Navi>
        <Icons>
          <StyledButton onClick={handleReturn}>
            <FaAngleLeft size={'2rem'} />
          </StyledButton>
          <StyledButton onClick={() => setShow(!show)}>
            <FaUserFriends size={'2rem'} />
          </StyledButton>
        </Icons>
      </Navi>
      <SideContainer show={show}>
        <Title>Na spotkaniu:</Title>
        {userssss?.map(person => {
          return (
            <Person>
              <Name>{`${person.name}`}</Name>
            </Person>
          );
        })}
      </SideContainer>
      <Bordzik></Bordzik>
      <Callendar />
    </Container>
  );
};
