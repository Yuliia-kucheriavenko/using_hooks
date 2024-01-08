import React, { useState } from 'react';
import './App.css';
 import { Footer } from './Footer';
import { Btn } from './Btn';
import { AppBtn } from './AppBtn';
import { Counter } from './Counter';
import { Contacts } from './Contacts';
import { AuthorDataContext, CompanyDataContext, authorDate, companyDate } from './context';
import { Company } from './Company';
import { useMultiplication } from './hooks/useMultiplication';

const user = {
  userName: 'Ketrin',
  userSurname: 'Oster'
}

const App = ()  => {
  const [counterFirst, setCounterFirst] = useState(0);
  const [counter, setCounter] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const [stateUser, setStateUser] = useState({isAdmin: false, userPossition: 'Marcetolog'});
  const assignAdmin = () => {
    setStateUser({...stateUser, isAdmin: true})
  };
  const {value, multiplication} = useMultiplication();

  return (
    <div className="App">
      <h1>Hello {user.userName} {user.userSurname}</h1>
      <h1> {user.userName} is {stateUser.isAdmin ? 'Admin' : 'user'} She is {stateUser.userPossition}.</h1>
      <button onClick={assignAdmin}> Assign admin</button>
      <p>Button for greeting</p>
      <Btn onClick={(val) => alert(val)}/>
      <h2>Click buttons</h2>
      <AppBtn onClick={() => setCounterFirst(counterFirst + 1)} text='Click + 1'/>
      <AppBtn onClick={() => setCounterFirst(counterFirst - 1)} text='Click - 1'/>
      <h4>{counterFirst}</h4>
      <h2>Multiply by 2</h2>
      <AppBtn onClick={multiplication} text={value} />

      <h2>Counter</h2>
      {isShow && (
        <>
      <Counter counter={counter} onCount={() => setCounter(counter + 1)}/>
      <AppBtn onClick={() => setCounter(1)} text='Reset Counter'/>
      <AppBtn onClick={() => setIsShow(false)} text='Remove Counter'/>

      </>
      )}


      <Footer author='Bill Both' copyright='Copyright'/>
      <AuthorDataContext.Provider value={authorDate}>
        <Contacts />
      </AuthorDataContext.Provider>
      <CompanyDataContext.Provider value={companyDate}>
        <Company />
      </CompanyDataContext.Provider>
    </div>
  );
}

export default App;
