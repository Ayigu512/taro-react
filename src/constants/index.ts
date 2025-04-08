// 全局响应状态码枚举
export enum ResponseCode {
  SUCCESS = '00000',
  UNAUTHORIZED = 'A0230',
  FORBIDDEN = 'A0311',
  NOT_FOUND = 'A0404',
  SERVER_ERROR = 'B0001',
}

// 基础配置常量
export const BASE_CONFIG = {
  API_TIMEOUT: 15000,
  MAX_RETRIES: 3,
  VERSION: '1.0.0',
}

export enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
