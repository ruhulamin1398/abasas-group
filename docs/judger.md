# Eagle-OJ-Judger

## 关于

[Eagle-OJ-Judger](https://github.com/Eagle-OJ/eagle-oj-judger)是用于代码编译和执行的Web API。它提供了RESTful接口，所以你可以轻松地集成你自己的系统。你可以尝试一下[在线测试](http://docs.eagleoj.com/judger/index) .

## 支持的语言

| 语言ID      | 名称        |
| ----------- | ----------- |
| PYTHON36    | Python(3.6) |
| PYTHON27    | Python(2.7) |
| JAVA8       | OpenJDK(8)  |
| C           | C(5.4)      |
| CPP         | C++(5.4)    |

## 下载

托管您自己的 `Eagle-OJ-judger` 您需要首先安装Docker。 然后运行下面的代码。

`docker run -d -p 5000:5000 d87904488/eagle-oj-judger`

好！就这样。让我们来运行代码吧！！

## 运行代码

### URL

你应该将 `POST` JSON 数据设置为 `IP:5000/judger`，例如，如果你想在本地运行`eagle-oj-judger`, 那你判卷机的URL是 `127.0.0.1:5000/judger`.

### 请求数据的结构

|    字段名     | 说明                                                     |
| ------------ | -------------------------------------------------------- |
| lang         | 语言类型（您可以在上面看到支持的语言列表）                   |
| source_code  | 程序源代码                                                |
| time_limit   | 代码运行的时间限制（秒）                                   |
| memory_limit | 代码运行的内存限制(MB)                                     |
| test_cases   | 每个请求至少需要一个测试用例                                |

### 响应数据的结构

|  字段名     | 说明                                   |
| ---------- | -------------------------------------- |
| time       | 代码运行的时间限制（秒）                 |
| memory     | 代码运行的内存限制(MB)                   |
| test_cases | 每个请求至少需要一个测试用例              |
| result     | 代码运行结果                            |

### 结果类型

|   结果  | 说明                |
| ------ | ------------------- |
| AC     | Accepted            |
| WA     | Wrong Answer        |
| CE     | Compile Error       |
| RTE    | Runtime Error       |
| TLE    | Time Limit Exceeded |
| SE     | Server Error        |

### 例子

为了帮助我们知道如何轻松使用eagle-oj-判卷机，我们提供了一些示例。

#### 例子1

最简单的例子

*请求*

``` json
{
	"lang": "PYTHON35",
	"source_code": "print('HelloWorld')",
	"time_limit": 3,
	"memory_limit": 128,
	"test_cases": [
		{
			"stdin": null,
			"stdout": "HelloWorld"
		}
	]
}
```

响应

```json
{
    "time": 0.03,
    "result": "AC",
    "test_cases": [
        {
            "error_message": null,
            "result": "AC"
        }
    ],
    "memory": 6
}
```

#### 例子2

这个例子让我们尝试更多的测试用例

*请求*

```json
{
	"lang": "PYTHON35",
	"source_code": "a = input()\nprint(a)",
	"time_limit": 3,
	"memory_limit": 128,
	"test_cases": [
		{
			"stdin": "1",
			"stdout": "1"
		},
		{
			"stdin": "2",
			"stdout": "2"
		}
	]
}
```

*响应*

```json
{
    "time": 0.03,
    "result": "AC",
    "test_cases": [
        {
            "error_message": null,
            "result": "AC"
        },
        {
            "error_message": null,
            "result": "AC"
        }
    ],
    "memory": 6
}
```

#### 例子3

这个例子让我们尝试错误的答案代码。

*请求*

```json
{
	"lang": "PYTHON35",
	"source_code": "a = input()\nprint(a)",
	"time_limit": 3,
	"memory_limit": 128,
	"test_cases": [
		{
			"stdin": "1",
			"stdout": "1"
		},
		{
			"stdin": "2",
			"stdout": "3"
		}
	]
}
```

*响应*

```json
{
    "time": 0.03,
    "result": "WA",
    "test_cases": [
        {
            "error_message": null,
            "result": "AC"
        },
        {
            "error_message": null,
            "result": "WA"
        }
    ],
    "memory": 6
}
```

#### 例子4

这个例子关于SE结果

*请求*

```json
{
	"lang": "PYTHON35",
	"source_code": "a = input()\nprint(a)",
	"time_limit": 3,
	"memory_limit": 128,
	"test_cases": []
}
```

*响应*

```json
{
    "error_message": "agrs are not legal",
    "result": "SE"
}
```



##  注释

* 我们的判卷机基于 https://github.com/QingdaoU/Judger .
* 如果你有任何的问题，你可以直接打开这个问题。
