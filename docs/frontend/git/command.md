---
title: Git 常用基本命令
date: 2025-03-19
---

# Git 常用命令手册

## 基础配置
```bash
# 设置全局用户名
git config --global user.name "Your Name"

# 设置全局邮箱
git config --global user.email "email@example.com"

# 查看配置列表
git config --list
```

## 仓库操作
```bash
# 初始化仓库
git init

# 克隆远程仓库
git clone <url>
git clone -b <branch> <url>  # 克隆指定分支
```

## 基础工作流
```bash
# 查看当前状态
git status                 # 查看完整状态
git status -s              # 精简状态显示

# 添加文件
git add <file>             # 添加指定文件
git add .                  # 添加所有文件
git add *.js               # 通配符添加

# 提交更改
git commit -m "commit message"          # 常规提交
git commit -a -m "commit message"       # 跳过add直接提交已跟踪文件

# 查看提交历史
git log                    # 查看提交历史
git log --oneline          # 单行显示
git log --graph            # 图形化显示
git log -p filename.txt    # 查看文件修改历史
```

## 分支管理
```bash
# 分支操作
git branch                      # 列出本地分支
git branch -a                   # 列出所有分支（含远程）
git branch feature/login        # 创建新分支
git checkout dev                # 切换分支
git checkout -b hotfix          # 创建并切换分支
git branch -d old-branch        # 删除分支
git branch -m new-name          # 重命名当前分支

# 合并与变基
git merge feature              # 合并指定分支到当前分支
git merge --abort              # 中止合并冲突
git rebase main                # 变基操作（改变提交基础）
git rebase --continue          # 继续变基操作

# 远程操作
git push origin --delete old-branch  # 删除远程分支
git fetch --prune                    # 同步远程已删除分支
```

## 远程协作
```bash
# 远程仓库
git remote -v                   # 查看远程仓库
git remote add upstream https://github.com/original/repo.git  # 添加上游仓库
git fetch upstream              # 获取上游更新

# 推送与拉取
git push -u origin main        # 首次推送并建立跟踪
git push                       # 后续推送
git pull                       # 拉取并合并（= fetch + merge）
git fetch origin               # 仅获取远程更新
```

## 撤销与恢复
```bash
# 文件级撤销
git restore filename.txt        # 撤销工作区修改
git restore --staged file.txt   # 撤销暂存区修改

# 提交级撤销
git reset HEAD~1                # 撤销最后一次提交（保留修改）
git reset --hard HEAD~1         # 彻底撤销最后一次提交
git revert commit_hash          # 创建撤销提交
```

## 高级操作
```bash
# 储藏与标签
git stash                      # 储藏当前修改
git stash list                 # 查看储藏列表
git stash apply                # 应用最近储藏
git stash pop                  # 应用并删除储藏

git tag v1.0                   # 创建轻量标签
git tag -a v1.1 -m "Release"   # 创建注释标签
git push --tags                # 推送所有标签

# 子模块与调试
git submodule add https://github.com/user/repo  # 添加子模块
git bisect start                                # 二分法调试
```


