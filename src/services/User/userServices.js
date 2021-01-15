import request from 'superagent';

export const getUserByIdRequest = (user) => {
    return request.get(`${process.env.REACT_APP_API_URL}/user/${user._id}`)
        .then(res => res.body)
};