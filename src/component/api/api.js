import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1e1cdae0-7c1a-4a97-971e-10a9c7b5cd4b"
    }
});

export const authAPI = {
    authUsers() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    loginGet(email,password,rememberMe = false) {
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    getLogOut() {
        return instance.delete(`auth/login`)
    }
}


export const profileAPI = {
    profileGet(userId) {
        return instance.get(`profile/`+ userId )
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId )
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const usersAPI = {
    currentUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) 
    { return instance.post(`follow/${userId}`) 
},

    unfollow(userId) 
    { return instance.delete(`follow/${userId}`) 
},


}



