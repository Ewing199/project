import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import zh from '../../node_modules/vee-validate/dist/locale/zh_CN'

Validator.addLocale(zh);

const config ={
    locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

const dictionary = {
    zh_CN :{
        messages:{
            email:() => '请输入正确的邮箱格式',
            required:(field) => "请输入" + field
        },
        attributes:{
            email:'邮箱',
            password:'密码',
            name:'账号',
        }
    }
}


Validator.updateDictionary(dictionary);