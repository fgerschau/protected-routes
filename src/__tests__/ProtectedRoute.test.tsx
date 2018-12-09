import * as React from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { configure, mount } from 'enzyme';
import { MemoryRouter, Route, Switch, Redirect } from 'react-router';
import * as Adapter from 'enzyme-adapter-react-16';
import TestComponent from '../test-utils/TestComponent';
import { ProtectedRouteProps } from '../..';

const setUp = (protectedRouteProps: ProtectedRouteProps) => {
  return (
    <MemoryRouter initialEntries={['/secret-route']} >
      <Switch>
        <ProtectedRoute
          {...protectedRouteProps}
        />
        <Route
          path="/login"
          render={() => <TestComponent id="login" />}
        />
      </Switch>
    </MemoryRouter>
  );
};

describe('ProtectedRoute success', () => {
  configure({ adapter: new Adapter() });

  test('Should load the protected page', () => {
    const wrapper = mount(setUp({
      path: '/secret-route',
      isAuthenticated: true,
      redirectPath: '/login',
      component: TestComponent,
    }));

    expect(wrapper.exists('#test-component')).toBe(true);
    expect(wrapper.exists('#login')).toBe(false);
  });

  test('Should not load the protected page when not authenticated', () => {
    const wrapper = mount(setUp({
      path: '/secret-route',
      isAuthenticated: false,
      redirectPath: '/login',
      component: TestComponent,
    }));

    expect(wrapper.exists('#test-component')).toBe(false);
    expect(wrapper.exists('#login')).toBe(true);
  });
});
