import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';

export default function (el, binding) {
    //根据binding.value的值来决定创建和删除img元素
    if (binding.value) {
        if (!getImg(el)) {
            const img = createImg()
            el.appendChild(img)
        }
    } else {
        if (getImg(el)) {
            getImg(el).remove()
        }
    }
}

function getImg(el) {
    return el.querySelector('img[data-role]')
}

function createImg() {
    const img = document.createElement('img');
    img.src = loadingUrl;
    img.className = styles.loading;
    img.dataset.role = 'loading'
    return img;
}