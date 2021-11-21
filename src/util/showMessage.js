import getComponent from './getComponent'
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'

/**
 * @param {String} content 要插入的内容
 * @param {String} type 图标类型
 * @param {Number} duration 显示时间
 * @param {String} container 要插入的指定父容器
 * 创建dom元素并插入页面
 */
export default function (option = {}) {
    const content = option.content || '123123';
    const type = option.type || "info";
    const duration = option.duration || 2000;
    const container = option.container || document.body;

    const div = document.createElement('div');
    const IconDom = getComponent(Icon, {type})

    div.innerHTML = `<span>${IconDom.outerHTML}</span><div>${content}</div>`;
    // div.className = styles.message +' '+`${styles.message}-${type}`;
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`
    if (getComputedStyle(container).position == 'static') {
        container.style.position = 'relative'
    }
    container.appendChild(div)

    div.clientHeight;
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;

        div.addEventListener('transitionend', function () {
            div.remove();
            option.callback && option.callback()
        }, {once: true})
    }, duration);
}