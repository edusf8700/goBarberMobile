import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso');
  } catch (err) {
    yield put(updateProfileFailure());

    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, confira seus dados!'
    );
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
