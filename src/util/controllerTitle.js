let routerTitle = '';
let siteTitle = '';

function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = '加载中'
    } else if (!routerTitle && siteTitle) {
        document.title = siteTitle
    } else if (routerTitle && !siteTitle) {
        document.title = routerTitle
    } else {
        document.title = routerTitle + '-' + siteTitle
    }
}

export default {
    setRouterTitle(title) {
        routerTitle = title;
        setTitle()
    },
    setSiteTitle(title) {
        siteTitle = title;
        setTitle()
    }
}

