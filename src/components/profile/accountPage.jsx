import React, { useContext, useState, useEffect } from 'react';
import {
  useHistory,
  useRouteMatch,
  Route,
  Switch,
} from 'react-router-dom';
import authAPI from '../../api/axios';
import Navigation from '../navigation/navigation';
import Header from '../header/header';
import Footer from '../footer/footer';
import PersonalInfo from './personalInfo';
import EditPersonalInfo from './editPersonalInfo';
import AccountMenu from './accountMenu';
import MyOrders from './myOrders';
import DeleteAccount from './deleteAccount';
import AuthContext from '../../contexts/authContext';
import ContactUs from './contactUs';

const AccountPage = () => {
  const { isUserLoggedIn, isPageLoading } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { path, url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (!isPageLoading && !isUserLoggedIn) {
      history.push('/account/login');
    }
    const getUser = async () => {
      try {
        const response = await authAPI.get('/account/me');
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (e) {
        return e;
      }
    };
    getUser();
  }, [isPageLoading, isUserLoggedIn, history]);

  return (
    <>
      <Navigation />
      <Header />
      <AccountMenu />
      <Switch>
        <Route exact path={path}>
          <PersonalInfo
            name={name}
            email={email}
            link={`${url}/edit`}
          />
        </Route>
        <Route path={`${path}/edit`}>
          <EditPersonalInfo
            url={`${url}/`}
            name={name}
            email={email}
            nameValue={name || ''}
            emailValue={email || ''}
            onChangeName={(e) => setName(e.target.value)}
            onChangeEmail={(e) => setEmail(e.target.value)}
          />
        </Route>
        <Route path={`${path}/orders/history`}>
          <MyOrders />
        </Route>
        <Route path={`${path}/contact-us`}>
          <ContactUs />
        </Route>
        <Route path={`${path}/delete-account`}>
          <DeleteAccount />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default AccountPage;
