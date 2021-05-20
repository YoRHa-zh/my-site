import Mock from 'mockjs'

const data = Mock.mock({
    "data|10-20": [{
        id: "@uuid",
        name: "@ctitle(1, 10)",
        "url|1": ["@url", null],
        "github|1": ["@url", null],
        "description|1-4": ["@cparagraph(1, 5)"],
        thumb: "@image(300x250, @color, #fff, @natural)"
    }]
})
Mock.mock('/api/project', 'get', {
    code: 0,
    msg: '',
    // data:[]
    data:data.data
  
})