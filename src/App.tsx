import React from 'react';
import {Admin, Resource, ShowGuesser} from "react-admin";
import {authProvider} from './AuthProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from './i18n/ru';
import englishMessages from 'ra-language-english';
import userList from './UserList';
import activitiesList from './ActivitiesList';
import reportsList from './ReportsList';
import MyLoginPage from "./Login/MyLoginPage";
import {dataProviderTest} from "./DataProviderTest";


const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');


function App() {

    return (
        <Admin

            dataProvider={dataProviderTest}
            authProvider={authProvider}
            loginPage={MyLoginPage}
            i18nProvider={i18nProvider}
        >
            <Resource name="admin/user/list" {...userList} />
            <Resource name="/admin/activity/list" {...activitiesList}/>
            <Resource name="reports" {...reportsList}/>
        </Admin>
    );
}

export default App;
