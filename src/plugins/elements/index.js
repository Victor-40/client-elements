import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Row,
  Col,
  Container,
  RadioGroup
} from 'element-ui';

const elements = [ Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Row,
  Col,
  Container,
  RadioGroup
];

locale.use(lang);

elements.forEach(El => Vue.use(El, {locale}));

