const rulesXieYin = {
  'yi': '1',
  'ai': '2',
  'er': '2',
  'san': '3',
  'shan': '3',
  'si': '4',
  'shi': '4',
  'wu': '5',
  'wo': '5',
  'liu': '6',
  'lu': '6',
  'qi': '7',
  'qu': '7',
  'chi': '7',
  'ba': '8',
  'bai': '8',
  'jiu': '9',
  'lin': '0',
  'ling': '0',
  'dou': ',',
  'jia': '+',
  'shu': '|',
  'qian': '$',
  'jin': '$',
}

const rulesDefault = {
  '两': '2',
  '女': '0',
  '母': '0',
  '雌': '0',
  '阴': '0',
  '未': '!',
  '不': '!',
  '无': '!',
  '谁': '?',
  '何': '?',
  '问': '?',
  '点': '.',
  '冒': ':',
  '分': ';',
  '双': '"',
  '单': '\'',
  '重': '`',
  '星': '*',
  '乘': '*',
  '日': '*',
  '阳': '*',
  '花': '*',
  '雪': '*',
  '减': '-',
  '横': '-',
  '等': '=',
  '斜': '/',
  '反': '\\',
  '下': '_',
  '南': '_',
  '美': '$',
  '弓': '$',
  '龙': '$',
  '蛇': '$',
  '滚': '@',
  '环': '@',
  '圈': '@',
  '井': '#',
  '道': '#',
  '网': '#',
  '百': '%',
  '和': '&',
  '中': '&',
  '上': '^',
  '北': '^',
  '云': '~',
  '水': '~',
  '雨': '~',
  '风': '~',
  '浪': '~',
  '丝': '~',
  '西': '{',
  '东': '}',
  '左': '[',
  '右': ']',
  '月': ')',
  '刀': '(',
  '小': '<',
  '大': '>',
  '空': ' '
}

exports.rules = Object.assign(rulesDefault,rulesXieYin)