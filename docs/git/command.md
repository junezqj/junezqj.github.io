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

