# CSS 预处理器：Sass vs Less vs Stylus

## 一、什么是 CSS 预处理器？
CSS 预处理器是一种在 CSS 基础上扩展的语言，提供了变量、嵌套、混合、函数、继承等功能，使 CSS 的编写更高效和模块化。常见的 CSS 预处理器包括：

- **Sass (Syntactically Awesome Stylesheets)**
- **Less (Leaner Style Sheets)**
- **Stylus**

## 二、Sass 介绍与示例

### **1. 变量（Variables）**
```scss
$primary-color: #007bff;
$font-size: 16px;

body {
  color: $primary-color;
  font-size: $font-size;
}
```

### **2. 嵌套规则（Nesting Rules）**
```scss
nav {
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
}
```

### **3. 混合（Mixins）**
```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

### **4. 函数（Functions）**
```scss
@function double($value) {
  @return $value * 2;
}

.box {
  width: double(50px);
}
```

### **5. 扩展/继承（Extend/Inheritance）**
```scss
%button-base {
  padding: 10px 20px;
  border-radius: 5px;
}

.button-primary {
  @extend %button-base;
  background-color: blue;
  color: white;
}

.button-secondary {
  @extend %button-base;
  background-color: gray;
  color: white;
}
```

### **6. 导入路径（Import Paths）**
```scss
// _variables.scss
$primary-color: #007bff;

// main.scss
@use 'variables' as v;

body {
  color: v.$primary-color;
}
```

## 三、Less 介绍与示例

### **1. 变量（Variables）**
```less
@primary-color: #007bff;
@font-size: 16px;

body {
  color: @primary-color;
  font-size: @font-size;
}
```

### **2. 嵌套规则（Nesting Rules）**
```less
nav {
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
}
```

### **3. 混合（Mixins）**
```less
.border-radius(@radius) {
  border-radius: @radius;
}

.box {
  .border-radius(10px);
}
```

### **4. 函数（Functions）**
```less
.multiply(@value, @factor) {
  width: @value * @factor;
}

.box {
  .multiply(50px, 2);
}
```

### **5. 扩展/继承（Extend/Inheritance）**
```less
.button-base {
  padding: 10px 20px;
  border-radius: 5px;
}

.button-primary {
  &:extend(.button-base);
  background-color: blue;
  color: white;
}

.button-secondary {
  &:extend(.button-base);
  background-color: gray;
  color: white;
}
```

### **6. 导入路径（Import Paths）**
```less
// variables.less
@primary-color: #007bff;

// main.less
@import "variables.less";

body {
  color: @primary-color;
}
```

## 四、Stylus 介绍与示例

### **1. 变量（Variables）**
```stylus
primary-color = #007bff
font-size = 16px

body
  color primary-color
  font-size font-size
```

### **2. 嵌套规则（Nesting Rules）**
```stylus
nav
  ul
    list-style none

  a
    text-decoration none
    &:hover
      color red
```

### **3. 混合（Mixins）**
```stylus
border-radius(radius)
  border-radius radius

.box
  border-radius(10px)
```

### **4. 函数（Functions）**
```stylus
double(value)
  return value * 2

.box
  width double(50px)
```

### **5. 扩展/继承（Extend/Inheritance）**
```stylus
button-base()
  padding 10px 20px
  border-radius 5px

.button-primary
  button-base()
  background-color blue
  color white

.button-secondary
  button-base()
  background-color gray
  color white
```

## 五、总结：Sass vs Less vs Stylus

| 功能           | Sass                       | Less                        | Stylus                     |
|----------------|----------------------------|----------------------------|-----------------------------|
| **变量语法**    | `$变量名: 值;`             | `@变量名: 值;`             | `变量名 = 值`              |
| **嵌套规则**    | 支持嵌套，`&` 引用父级选择器 | 支持嵌套，`&` 引用父级    | 支持缩进嵌套，`&` 引用父级 |
| **混合 (Mixins)** | `@mixin` 定义，`@include` 使用 | 直接定义 `.类名()`，调用使用 | 定义 `函数名()`，直接调用  |
| **函数 (Functions)** | 使用 `@function` 定义，可执行复杂运算 | 使用类似 mixin 的形式定义 | 定义函数，直接返回计算结果 |
| **继承 (Extend)** | `@extend` 继承样式        | `&:extend(.类名)`           | 使用函数复用样式           |
| **导入路径管理** | `@use` 和 `@import`      | 仅支持 `@import`           | 使用 `@import` 导入文件    |

## 六、推荐选择
- **Sass**：功能丰富，模块化强，适合中大型项目。它与许多前端框架如 Bootstrap 紧密集成。
- **Less**：简单直观，上手快，更适合中小型项目。像 Ant Design 就采用了 Less。
- **Stylus**：自由度高，语法简洁，更适合追求极简代码的项目。

根据团队需求和项目规模选择合适的预处理器，可以大幅提升样式开发的效率和可维护性！

如果需要进一步了解具体的配置或用法，可以参考官方文档：
- [Sass 官方文档](https://sass-lang.com/documentation)
- [Less 官方文档](http://lesscss.org/)
- [Stylus 官方文档](https://stylus-lang.com/)

