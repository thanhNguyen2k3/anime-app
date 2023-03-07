import Form from '../layouts/Form';
import SignIn from '../layouts/Form/SignIn';

function RegisterPage() {
    return (
        <div>
            <Form title={'Đăng ký'}>
                <SignIn />
            </Form>
        </div>
    );
}

export default RegisterPage;
