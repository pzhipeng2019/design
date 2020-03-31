import ContentLayout from "../../page/ContentLayout";
import XgButton from "../../page/XgButton";
import Navigation from "../../page/Navigation";
import Icon from "../Icon";
import Fade from "../../page/Fade";
import Menu from "../Menu";
import Test from "../../page/test";
import PageSwitch from "../../page/PageSwitch";
import PageMenu from "../../page/PageMenu";
import PageSteps from "../../page/PageSteps";
import PageIcon from "../../page/PageIcon";
import PageBreadcrumber from "../../page/PageBreadcrumber";
import PageUpload from "../../page/PageUpload";
import PageTable from "../../page/PageTable"
import PageCheckbox from "../../page/PageCheckbox";
import PageRadiobox from "../../page/PageRadiobox";
import PagePagination from "../../page/PagePagination";
import PageSelect from "../../page/PageSelect";
import PageCascader from "../../page/PageCascader";
import PageInput from "../../page/PageInput";
let routers = [
    {
        path:"/",
        exact:true,
        component:ContentLayout,
        title:"布局"
    },
    {
        path:"/button",
        exact:false,
        component:XgButton,
        title:"Buttons  按钮"
    },
    {
        path:"/icon",
        exact:false,
        component:PageIcon,
        title:"Icon  图标"
    },
    {
        path:"/navigation",
        exact:false,
        component:Navigation,
        title:"Navigation  导航  "
    },
    {
        path:"/fade",
        exact:false,
        component:Fade,
        title:"Fade "
    },
    {
        path:"/menu",
        exact:false,
        component:PageMenu,
        title:"Menu "
    },
    {
        path:"/pageswitch",
        exact:false,
        component:PageSwitch,
        title:"switch "
    },
    {
        path:"/pagesteps",
        exact:false,
        component:PageSteps,
        title:"steps "
    },
    {
        path:"/breadcrumber",
        exact:false,
        component:PageBreadcrumber,
        title:"Breadcrumber  面包屑 "
    },
    {
        path:"/upload",
        exact:false,
        component:PageUpload,
        title:"Upload  上传"
    },
    {
        path:"/table",
        exact:false,
        component:PageTable,
        title:"Table  表格"
    },
    {
        path:"/checkbox",
        exact:false,
        component:PageCheckbox,
        title:"Checkbox多选框"
    },
    {
        path:"/radiobox",
        exact:false,
        component:PageRadiobox,
        title:"Radiobox  单项框"
    },
    {
        path:"/pagination",
        exact:false,
        component:PagePagination,
        title:"Pagination分页"
    },
    {
        path:"/select",
        exact:false,
        component:PageSelect,
        title:"Select选择器"
    },
    {
        path:"/cascader",
        exact:false,
        component:PageCascader,
        title:"Cascader级联选择"
    },
    {
        path:"/input",
        exact:false,
        component:PageInput,
        title:"Input输入框"
    },
    {
        path:"/test",
        exact:false,
        component:Test,
        title:"Test "
    },
];
export default routers;