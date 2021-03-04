/**
 * @des 路由表
 */
const routes = [
{
    id: 'pageStore',
    icon: 'desktop',
    name: 'pageStore',
    children: [
        { id: 'pageStoreIndex', name: 'redux-toolKit 练习', path: '/pageStore/index', }
    ]
}, 
{
    id: '1',
    icon: 'desktop',
    name: 'practice',
    children: [
        { id: '1-1', name: 'index', path: '/practice/index', }, 
        { id: '1-2', name: 'react', path: '/practice/param/react',},
        { id: '1-3', name: 'hooks', path: '/practice/hooks',},
    ]
}, 
{
    id: '11',
    icon: 'desktop',
    name: 'redux',
    children: [
        { id: '11-1', name: 'redux实现', path: '/redux/redux', }, 
    ]
},
{
    id: '2',
    name: '第三方库示例',
    icon: 'desktop',
    children: [
        { id: '2-1', name: 'sheetJs', path: '/third/sheet-js' },
        { id: '2-2', name: 'html2canvas', path: '/third/html2canvas' },
        { id: '2-3', name: 'jsPdf', path: '/third/jsPdf' },
    ]
}, {
    id: '3',
    name: 'canvas',
    icon: 'desktop',
    children: [
        { id: '3-1', name: 'canvas-移动', path: '/canvas/canvas' },
        { id: '3-2', name: 'canvas-画布', path: '/canvas/drawBoard' }
    ]
}]
export default routes