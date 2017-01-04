import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import configureStore from './configureStore';

import '../style/index.pcss';

import MyWeather from './components/MyWeather';

const store = configureStore({
    period: 'current',
    weatherList: [],
    cityName: '',
});

render(
    <Provider store={store}>
        <MyWeather />
    </Provider>,
    document.getElementById('app'),
);

