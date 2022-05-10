const username = document.getElementById('userInp');
const psw = document.getElementById("pswInp");
const userP = document.getElementById('loginP');
const pswP = document.getElementById('passwordP');


class SignupValidation {

    keyWords = ['user', 'password', 'name'];

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.errUser = [''];
        this.errPsw = [];
    }

    checkUsername() {

        if (!(this.username.length >= 3 && this.username.length <= 20)) {
            this.errUser.push('User Name should be inside 3-20');
        }

        if (!(this.username.match(/[a-z]/g) || this.username.match(/[0-9]/g))) {
            this.errUser.push('User Name should be inside a-z');
        }
    }

    checkPassword() {

        if (!(this.password.length >= 3 && this.password.length <= 16)) {
            this.errPsw.push('User Name should be inside 3-20');
        }

        if ((this.password.search(/[a-z]/i) < 0) || (this.password.search(/[A-Z]/i) < 0)) {
            this.errPsw.push("Your password must contain at least one letter.");
        }
        if ((this.password.search(/[ա-ֆ]/i) < 0) || (this.password.search(/[Ա-Ֆ]/i) < 0)) {
            this.errPsw.push("Your password must contain at least one armenian letter.");
        }
        if ((this.password.search(/[а-ф]/i) < 0) || (this.password.search(/[Ա-Ֆ]/i) < 0)) {
            this.errPsw.push("Your password must contain at least one russian letter.");
        }
        if ((this.password.search(/[a-z]/i) < 0) || (this.password.search(/[ա-ֆ]/i) < 0) ||
            this.password.search(/[а-ф]/i) < 0) {
            this.errPsw.push("Your password must contain at least one lowercase.");
        }
        if ((this.password.search(/[A-Z]/i) < 0) || (this.password.search(/[Ա-Ֆ]/i) < 0) ||
            this.password.search(/[а-ф]/i) < 0) {
            this.errPsw.push("Your password must contain at least one uppercase.");
        }
        if (this.password.search(/[0-9]/) < 0) {
            this.errPsw.push("Your password must contain at least one digit.");
        }

        if (this.password.search(/[!-//]/) < 0) {
            this.errPsw.push("Your password must contain at least one symbol.");
        }

        if (this.keyWords.includes(this.password)) {
            this.errPsw.push("Your password mustn't contain keywords");
        }

    }

    main() {
        this.checkUsername();
        this.checkPassword();
    }
}

function checkValid() {
    const signup = new SignupValidation(username.value, psw.value);
    signup.main();

    if (signup.errUser.length === 1) {
        location.href = 'file:///C:/Users/User/Desktop/New%20folder/it/AGBU/NodeJs/homeworks/VALIDATION/index%20-%20success.html';
        return;
    }
    // if (signup.errUser.length === 0 && signup.errPsw.length === 0) {
    //     location.href = 'https://www.javascripttutorial.net/';
    // }

    if (signup.errUser.length > 0) {
        userP.innerText = signup.errUser.join("\n");
    }
    if (signup.errPsw.length > 0) {
        pswP.innerHTML = signup.errPsw.join("\n");
    }
}