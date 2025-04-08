import { userInfo } from 'node:os'
import mockjs from 'mockjs'

export default {
  'POST /min/user/login': {
    code: '200',
    message: 'ok',
    data: {
      jeecg_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDI0NTQ5NzUsInVzZXJuYW1lIjoiMTkwMjUzMDYxMjIxNjk4NzY0OSJ9.wcsDrBRP-84Y7RsuQ4z-IomtYzKbCXqvsdyHVo_IDtU',
      userInfo: {
        areaName: null,
        avatarUrl: null,
        belongingPlace: '湖北省,武汉市',
        city: null,
        country: null,
        createTime: '2025-03-20',
        email: null,
        gender: 1,
        id: '1902530612216987649',
        idCard: null,
        nickname: null,
        openid: 'os0QM5VJ0BwcGHr0P1pCgi4u5toI',
        phone: '15527956595',
        province: null,
        realname: '阿拉蕾',
        unionid: null,
        updateTime: '2025-03-20',
      },
    },
    success: true,
  },
  'GET /api/user': {
    code: '200',
    message: 'ok',
    data: {
      id: 1,
      name: 'jandan',
    },
    success: true,
  },
}
