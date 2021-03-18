"use strict";

const { response } = require("express");

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id); 
        users.id.psword(userInfo.psword); 
        users.id.name(userInfo.name); 
        return { success: true };
    }
}

module.exports = UserStorage;