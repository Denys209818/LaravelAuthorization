import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from './LoginAction';
import * as RegisterActions from './RegisterAction';

export const useActions = () => 
{
    const dispatch = useDispatch();
    return bindActionCreators(LoginActions, dispatch);
}

export const useActionsRegister = () => 
{
    const dispatch = useDispatch();
    return bindActionCreators(RegisterActions, dispatch);
}
