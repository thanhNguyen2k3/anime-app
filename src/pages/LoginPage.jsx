import Form from '../layouts/Form';
import Login from '../layouts/Form/Login/Login';

function LoginPage() {
    return (
        <section>
            <Form title={'Đăng nhập'}>
                <Login />
            </Form>
        </section>
    );
}

export default LoginPage;
