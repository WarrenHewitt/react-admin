/**
 * @des 路由表
 */
const routes = [{
    id: '1',
    icon: 'desktop',
    name: 'practice',
    children: [
        { id: '1-1', name: 'index', url: '/practice/index', }, 
        { id: '1-2', name: 'react', url: '/practice/param/react',},
        { id: '1-3', name: 'hooks', url: '/practice/hooks',},
    ]
}, {
    id: '2',
    name: '第三方库示例',
    icon: 'desktop',
    children: [
        { id: '2-1', name: 'sheetJs', url: '/third/sheet-js' },
        { id: '2-2', name: 'html2canvas', url: '/third/html2canvas' },
        { id: '2-3', name: 'jsPdf', url: '/third/jsPdf' },
    ]
}, {
    id: '3',
    name: 'canvas',
    icon: 'desktop',
    children: [
        { id: '3-1', name: 'canvas-移动', url: '/canvas/canvas' },
        { id: '3-2', name: 'canvas-画布', url: '/canvas/drawBoard' }
    ]
}]
export default routes