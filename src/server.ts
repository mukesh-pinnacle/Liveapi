import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import AccountsRoute from '@routes/accounts.route';
import SuperAdminsRoute from '@routes/super_admins.route';
import RolesRoute from '@routes/roles.route';
import AccountUsersRoute from '@routes/account_users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
    new IndexRoute(), new UsersRoute(), new AuthRoute(), new AccountsRoute(), new SuperAdminsRoute()
]);

app.listen();
