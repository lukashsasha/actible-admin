import React from 'react';
import {Admin, Resource, Layout} from "react-admin";
import {authProvider} from './AuthProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from './i18n/ru';
import englishMessages from 'ra-language-english';
import userList from './UserList';
import activitiesList from './ActivitiesList';
import reportsList from './ReportsList';
import MyLoginPage from "./Login/MyLoginPage";
import {dataProvider} from "./DataProvider";
import {MyAppBar} from "./Layout/MyAppBar";



const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');
const MyLayout = (props:any) => <Layout {...props} appBar={MyAppBar} />;



function App() {

    return (
        <Admin

            dataProvider={dataProvider}
            authProvider={authProvider}
            loginPage={MyLoginPage}
            i18nProvider={i18nProvider}
            layout={MyLayout}
        >
            <Resource name="admin/user/list" {...userList} />
            <Resource name="admin/activity/list" {...activitiesList}/>
            <Resource name="admin/reports" {...reportsList}/>
        </Admin>
    );
}

export default App;
