//最长模板:
初始化left, right, result, bestResult
while (右指针没有到结尾) {
    窗口扩大, 加入right对应元素, 更新当前result
    while (result不满足要求) {
        窗口缩小, 移除left对应元素, left右移
    }
    更新最优结果bestResult
    right++;
}
返回bestResult;


//最短模板:
初始化left, right, result, bestResult
while (右指针没有到结尾) {
    窗口扩大, 加入right对应元素, 更新当前result
    while (result满足要求) {
        更新最优结果bestResult
        窗口缩小, 移除left对应元素, left右移
    }
    right++;
}
返回bestResult;