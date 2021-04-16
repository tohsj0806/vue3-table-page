// import request from '@/server/request';
import {tableData} from './tableDataMock';
export const searchColumns = [
    {
        label: '车牌号',
        prop: 'cph',
        clearable: true,
        placeholder: "请输入车牌号"
    },
    {
        label: '日期',
        prop: 'date',
        clearable: false,
        placeholder: "选择日期",
        isTime: 'datetimerange'
    }
];

export const tableColumns = [
    {
        prop: 'cph',
        label: '车牌号',
        width: 150,
        overflow: true
    },
    {
        prop: 'clmc',
        label: '车辆名称',
        width: 150,
        overflow: true
    },
    {
        prop: 'ppxh',
        label: '品牌型号',
        overflow: true
    },
    {   // 图片预览
        prop: 'xsz',
        label: '行驶证',
        width: 150,
        imgW: 300, // 设置该项表示预览图片
        expandFunc: true // 是否有扩展功能，启用表格列插槽
    },
];

export const localService = {
    showList(data) {
        //以后走api
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tableData);
            }, 1000);
        });
    }
};

export const options = {
    canCheck: true, // 是否可选择
    hasIndex: true, // 是否有序号
    checkFixed: 'left', // 选择固定位置
    indexFixed: 'left', // 表序号固定位置
    opW: 150,// 操作栏宽度
    autoRequest: true, // 自动请求
    startUpdate: Date.now()
};