# 深度优先搜索(DFS)思路与模板 —— 二叉树基础模板
# 算法题应用场景:
## 1.二叉树有关问题
## 2.需要从根节点遍历到末尾叶子节点
# 常见题型
## 满足(最大，最小，某种要求)的深度、路径、节点和......

<br>
# DFS思路
## 1. 创建结果存储变量,初始化当前结果
## 2. 设计递归函数
### 函数执行过程:
### - 若到达结尾，则返回
### - 若未到达结尾，则更新当前结果
### - 若到达末尾叶子结点，进行最优结果更新
### - 分别对当前节点的左/右叶子节点调用递归函数
## 3. 开始调用递归函数