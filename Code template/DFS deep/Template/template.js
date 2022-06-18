function dfsTemplate(root) {
    //存储最终结果
    let res;
    //初始化当前结果
    let start;
    //构造递归函数dfs,通常参数为当前节点和当前结果
    let dfs = function (node, currentResult) {
        //终止条件返回判断
        if (node == null) {
            return;
        }
        //更新当前结果currentResult

        //若到达末尾叶子结点，进行最优结果更新
        if (node.left == null && node.right == null) {
            //update res
        }
        //左右子树递归
        dfs(node.left, currentResult);
        dfs(node.right, currentResult);
    }
    dfs(root, start);
    return res;
}