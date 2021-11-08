import  axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "11a8c961-0e91-4678-b22a-bdf836e730ac"
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
    },
    savePhotos(photos){
        const formData = new FormData();
        formData.append('image',photos)
        return instance.put(`profile/photo`,formData,{
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`,profile);
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



