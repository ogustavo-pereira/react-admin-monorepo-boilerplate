import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

import { UserList } from 'user-team';
import { authProvider } from './authProvider';
import { Dashboard } from './Dashboard';
import { PostList, PostEdit, PostCreate } from './posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}
        />
        <Resource
            name="users"
            list={UserList}
            icon={UserIcon}
            recordRepresentation="name"
        />
    </Admin>
);

export default App;
