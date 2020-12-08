import Vue from 'vue'
import { Button, Tag } from 'element-ui'
import {Form,FormItem} from 'element-ui' //按需导入相应的组件
import {Input,Row,Dialog,Select,Option,Divider,Message, MessageBox, Table,TableColumn,Pagination,Transfer,
Col,Switch,Checkbox,Radio,RadioGroup,CheckboxGroup,TimePicker,DatePicker,Image,Carousel,CarouselItem} from 'element-ui'
import {Scrollbar} from 'element-ui'
import {Breadcrumb} from 'element-ui'
import {BreadcrumbItem} from 'element-ui'

import {Card} from 'element-ui'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Antd)
Vue.use(Button) //当其进行相关的导入之后，将其注册为全局可用的组件
Vue.use(Form)
Vue.use(Scrollbar)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(CheckboxGroup)
Vue.use(TimePicker)
Vue.use(DatePicker)
Vue.use(Divider)
Vue.use(Transfer)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Image)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message