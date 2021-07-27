import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

const Home = lazy(() => import('./pages/home/home.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout-page.component'));



class App extends React.Component {

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  };


  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <GlobalStyle/>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/shop' component={Shop} />
              <Route exact path='/signin'>
                {
                  currentUser ? <Redirect to='/' /> : <SignInAndSignUp/>
                }
              </Route>
              <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    );  
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
